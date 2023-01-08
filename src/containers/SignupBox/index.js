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

const SignupBox = ({ signup, setEmail, setPassword }) => {
  const handleId = (e) => {
    setEmail(e.target.value);
  };

  const handlePw = (e) => {
    setPassword(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      signup();
    }
  };

  return (
    <AreaWrapper>
      <AreaRow>
        <ImgAreaBox1>
          <TitleAreaContent>Join us!</TitleAreaContent>
          <BunnyAreaContent>
            <BunnyImg />
          </BunnyAreaContent>
          <IdTextAreaContent>ID:</IdTextAreaContent>
          <PwTextAreaContent>PW:</PwTextAreaContent>
          <IdAreaContent>
            <IdInput
              // placeholder="your@email.com"
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
            <LoginButton onClick={signup}>signup</LoginButton>
          </ButtonAreaContent>
          <LinkAreaContent>
            <SignupLink to="/auth">are you already a bunny?</SignupLink>
          </LinkAreaContent>

          <ImgAreaContent>
            <CDPlayerImg />
          </ImgAreaContent>
        </ImgAreaBox1>
      </AreaRow>
    </AreaWrapper>
  );
};

export default SignupBox;
