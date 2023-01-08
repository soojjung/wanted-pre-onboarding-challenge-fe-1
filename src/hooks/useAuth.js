/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { validateEmail, validatePassword } from '../tools/ValidationTool';

const useAuth = ({ modal, toast, handleError }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // onMount
  useEffect(() => {
    setIsLoading(false);
  }, []);

  const fetchAuth = async (redirectTo) => {
    try {
      const { data } = await api({
        url: '/v1/au/users/me',
        method: 'get',
        headers: { 'content-type': 'application/json' },
      });
      data && setUser(data);
      // !!redirectTo && navigate(redirectTo, { replace: true });
      setIsLoading(false);
    } catch (err) {
      logout();
      setIsLoading(false);
    }
  };

  const login = ({ params, redirectTo }) => {
    const request = async () => {
      try {
        const { headers } = await api({
          url: '/v1/na/auth/login',
          method: 'post',
          data: params,
          crossDomain: true,
          withCredentials: true,
        });
        const { authorization: session, 'authorization-refresh': refresh } =
          headers;
        if (!!session && !!refresh) {
          session && localStorage.setItem('session', session);
          refresh && localStorage.setItem('refresh', refresh);
          session && fetchAuth(redirectTo || '/');
        }
      } catch (err) {
        const { response: { status } = {} } = err;
        status === 401
          ? alert(
              'You have entered an incorrect username or password.' ||
                `${err.response.data.message}`
            )
          : handleError(err);
      }
    };

    // const isValidEmail = validateEmail(params.email);
    // const isValidPassword = validatePassword(params.password);
    // if (!isValidEmail) {
    //   alert('올바른 이메일을 입력하세요.');
    // } else

    // if (!isValidPassword) {
    //   alert('올바른 비밀번호를 입력하세요.');
    // } else {
    request();
    // }
  };

  const logout = () => {
    // localStorage.removeItem('session');
    setUser(undefined);
  };

  return {
    isLoading,
    user,
    authenticated: !!user,
    refresh: fetchAuth,
    login,
    logout,
  };
};

export default useAuth;
