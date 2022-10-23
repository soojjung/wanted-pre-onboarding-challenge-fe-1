import React from 'react';
import DefaultPageDescription from '../../components/DefaultPageDescription';
import DefaultPageInputs from '../../components/DefaultPageInputs';
import styled from 'styled-components';

const DefaultPage = () => {
  return (
    <MainWrapper>
      <DefaultPageDescription />
      <DefaultPageInputs border />
    </MainWrapper>
  );
};

export default DefaultPage;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;

  @media (min-width: 900px) {
    width: 50%;
  }
`;
