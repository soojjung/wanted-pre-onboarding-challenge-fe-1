/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../../utils/api';
// import { validateEmail, validatePassword } from '../../../tools/ValidationTool';
import LoginBox from '../../../containers/LoginBox';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectTo, setRedirectTo] = useState('');

  const login = () => {
    const params = { email, password };

    const request = async () => {
      try {
        const { headers } = await api({
          url: '/users/login',
          method: 'post',
          data: params,
          // crossDomain: true,
          // withCredentials: true,
        });
      } catch (err) {
        console.error('err', err);
      }
    };

    request();
  };

  return (
    <LoginBox login={login} setEmail={setEmail} setPassword={setPassword} />
  );
};

export default LoginPage;
