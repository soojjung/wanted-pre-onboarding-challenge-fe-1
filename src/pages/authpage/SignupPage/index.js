/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import api from '../../../utils/api';
import SignupBox from '../../../containers/SignupBox';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    const params = { email, password };

    const request = async () => {
      try {
        const { headers } = await api({
          url: '/users/create',
          method: 'post',
          data: params,
        });
      } catch (err) {
        console.error('err', err);
      }
    };

    request();
  };

  return (
    <SignupBox signup={signup} setEmail={setEmail} setPassword={setPassword} />
  );
};

export default SignupPage;
