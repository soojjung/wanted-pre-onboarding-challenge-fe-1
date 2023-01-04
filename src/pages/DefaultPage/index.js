import React from 'react';
import DefaultPageDescription from '../../components/DefaultPageDescription';
import DefaultPageInputs from '../../components/DefaultPageInputs';
import gradation from '../../assets/images/gradation_bg.jpg';
import styled from 'styled-components';

const DefaultPage = () => {
  return (
    <MainWrapper>
      <MainBackground src={gradation} alt={'background'} />
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
  width: 100vw;
  // max-width: 390px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const MainBackground = styled.img`
  opacity: 0.75;
`;
