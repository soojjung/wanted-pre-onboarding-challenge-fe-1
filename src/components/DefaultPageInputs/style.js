import styled from 'styled-components';
import theme from '../../styles/theme';
import {
  AreaWrapper as _AreaWrapper,
  AreaRow as _AreaRow,
  AreaBox1 as _AreaBox1,
  AreaContent as _AreaContent,
} from '../styleArea';

export const AreaWrapper = styled(_AreaWrapper)`
  height: 60%;
  padding: 0;

  background: ${theme.backgroundColor};
`;
export const AreaRow = styled(_AreaRow)`
  align-items: center;
`;
export const AreaBox1 = styled(_AreaBox1)``;
export const AreaContent = styled(_AreaContent)``;

export const AreaInputRow = styled(_AreaRow)`
  z-index: 100;

  width: 100%;
  max-height: 100%;

  border-top: 3px solid white;
  border-radius: 10%;
`;

export const AreaWhiteBox1 = styled(_AreaBox1)`
  // height: 30px;

  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
`;

export const IconBox = styled(_AreaBox1)`
  width: 10%;
`;

export const QuestionBox = styled(_AreaBox1)`
  width: 35%;
`;

export const AnswerBox = styled(_AreaBox1)`
  width: 40%;
`;

export const ButtonBox = styled(_AreaBox1)`
  width: 15%;
`;
