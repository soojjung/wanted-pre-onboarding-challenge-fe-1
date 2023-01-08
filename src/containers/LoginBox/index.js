import React from 'react';
import {
  AreaWrapper,
  AreaRow,
  ImgAreaBox1,
  TitleAreaContent,
  IdTextAreaContent,
  PwTextAreaContent,
  IdAreaContent,
  IdInput,
  PwAreaContent,
  PwInput,
  ButtonAreaContent,
  LoginButton,
  LinkAreaContent,
  SignupLink,
  ImgAreaContent,
  CDPlayerImg,
  BunnyAreaContent,
  BunnyImg,
} from './style';

const LoginBox = ({ login, setEmail, setPassword }) => {
  const handleId = (e) => {
    setEmail(e.target.value);
  };

  const handlePw = (e) => {
    setPassword(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      login();
    }
  };

  return (
    <AreaWrapper>
      <AreaRow>
        <ImgAreaBox1>
          <TitleAreaContent>Welcome back</TitleAreaContent>
          <BunnyAreaContent>
            <BunnyImg />
          </BunnyAreaContent>
          <IdTextAreaContent>ID:</IdTextAreaContent>
          <PwTextAreaContent>PW:</PwTextAreaContent>
          <IdAreaContent>
            <IdInput
              // placeholder="blackbunny@google.com"
              onChange={handleId}
            />
          </IdAreaContent>
          <PwAreaContent>
            <PwInput
              // placeholder="happy 2023"
              type="password"
              onChange={handlePw}
              onKeyDown={onKeyPress}
            />
          </PwAreaContent>
          <ButtonAreaContent>
            <LoginButton onClick={login}>login</LoginButton>
          </ButtonAreaContent>
          <LinkAreaContent>
            <SignupLink to="/signup">not a bunny yet?</SignupLink>
          </LinkAreaContent>

          <ImgAreaContent>
            <CDPlayerImg />
          </ImgAreaContent>
        </ImgAreaBox1>
      </AreaRow>
    </AreaWrapper>
  );
};

export default LoginBox;
