import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  AreaWrapper as _AreaWrapper,
  AreaRow as _AreaRow,
  AreaBox1 as _AreaBox1,
  AreaContent as _AreaContent,
} from '../../components/styleArea';
import Newtro from '../../assets/newtro.jpg';
import Bunny from '../../assets/bunny.jpeg';

export const AreaWrapper = styled(_AreaWrapper)``;
export const AreaRow = styled(_AreaRow)``;
export const AreaBox1 = styled(_AreaBox1)``;
export const AreaContent = styled(_AreaContent)``;

export const ImgAreaBox1 = styled(_AreaBox1)`
  position: relative;

  width: 500px;
  margin: 20px auto;
`;

export const TitleAreaContent = styled(_AreaContent)`
  position: absolute;

  top: 3%;
  left: 8%;

  text-align: center;
  font-size: 18px;
  line-height: 18px;

  color: #dadcff;
  background-color: inherit;
`;

export const IdTextAreaContent = styled(_AreaContent)`
  position: absolute;

  top: 22%;
  right: 55%;

  padding: 10px 20px;
  text-align: center;

  color: #2e2e2e;
  background-color: inherit;
`;

export const PwTextAreaContent = styled(_AreaContent)`
  position: absolute;

  top: 37%;
  right: 55%;

  padding: 10px 20px;
  text-align: center;

  color: #2e2e2e;
  background-color: inherit;
`;

export const IdAreaContent = styled(_AreaContent)`
  position: absolute;

  top: 22%;
  left: 40%;

  padding: 10px 20px;
  text-align: center;

  background-color: inherit;
`;

export const IdInput = styled.input`
  margin: 0;
  padding: 0;

  width: 200px;

  border: none;

  font-family: 'Rowdies', cursive;
  font-size: 16px;

  color: #5b5b5b;
  background-color: inherit;
`;

export const PwAreaContent = styled(_AreaContent)`
  position: absolute;

  top: 37%;
  left: 40%;

  padding: 10px 20px;
  text-align: center;

  background-color: inherit;
`;

export const PwInput = styled.input`
  margin: 0;
  padding: 0;

  width: 200px;

  border: none;

  font-family: 'Rowdies', cursive;
  font-size: 16px;

  color: #5b5b5b;
  background-color: inherit;
`;

export const ButtonAreaContent = styled(_AreaContent)`
  position: absolute;

  bottom: 2%;
  left: 46%;

  padding: 10px 20px;
  text-align: center;

  background-color: inherit;
`;

export const LoginButton = styled.button`
  margin: 0;
  padding: 0;

  border: none;

  font-family: 'Rowdies', cursive;
  font-size: 14px;

  color: #5b5b5b;
  background-color: inherit;

  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const LinkAreaContent = styled(_AreaContent)`
  position: absolute;

  bottom: 2%;
  right: 1%;

  padding: 10px 20px;
  text-align: center;

  background-color: inherit;
`;

export const SignupLink = styled(Link)`
  margin: 0;
  padding: 0;

  border: none;

  font-family: 'Rowdies', cursive;
  font-size: 14px;

  color: #5b5b5b;
  background-color: inherit;

  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const ImgAreaContent = styled(_AreaContent)`
  width: 100%;
  vertical-align: middle;
`;

export const CDPlayerImg = styled.img.attrs({
  src: `${Newtro}`,
})`
  width: 100%;
`;

export const BunnyAreaContent = styled(_AreaContent)`
  position: absolute;

  top: 22%;
  left: 5%;

  width: 23%;
  height: 152px;
  vertical-align: middle;

  border: 3px solid #9c9d9e;
  border-radius: 3px;
`;

export const BunnyImg = styled.img.attrs({
  src: `${Bunny}`,
})`
  width: 100%;
`;

// export const TextAreaRow = styled(_AreaRow)`
//   padding: 10px 20px;
//   border-radius: 10px;
//   background-color: inherit;
//   text-align: center;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;
