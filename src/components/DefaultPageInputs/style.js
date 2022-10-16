import styled from 'styled-components';
import theme from '../../styles/theme';
import {
  AreaWrapper as _AreaWrapper,
  AreaRow as _AreaRow,
  AreaBox1 as _AreaBox1,
  AreaContent as _AreaContent,
} from '../styleArea';

export const AreaWrapper = styled(_AreaWrapper)`
  padding: 0;

  background: ${theme.backgroundColor};
`;
export const AreaRow = styled(_AreaRow)``;
export const AreaInputRow = styled(_AreaRow)`
  z-index: 100;

  width: 100%;
  max-height: 100%;

  border-top: 3px solid white;
  border-radius: 10%;
`;
export const AreaBox1 = styled(_AreaBox1)``;
export const AreaContent = styled(_AreaContent)``;
