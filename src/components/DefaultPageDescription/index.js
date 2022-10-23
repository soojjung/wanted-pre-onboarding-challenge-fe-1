import React from 'react';
import {
  AreaWrapper,
  AreaRow,
  AreaBox1,
  AreaContent,
  TitleH3,
  TitleH5,
  P,
} from './style';

const DefaultPageDescription = () => {
  return (
    <AreaWrapper minWidth>
      <AreaRow border="bottom">
        <AreaBox1>
          <AreaContent>
            <TitleH5>Calculator</TitleH5>
          </AreaContent>
          <AreaContent>
            <TitleH3>생리 예정일 계산기</TitleH3>
          </AreaContent>
        </AreaBox1>
      </AreaRow>
      <AreaRow border="bottom">
        <AreaBox1>
          <AreaContent>
            <TitleH5>Description</TitleH5>
          </AreaContent>
          <AreaContent>
            <P>
              다음 생리 예정일을 알려드립니다. <br />
              <b>생리 주기</b>를 안다면 <b>생리 주기 기준</b>으로, 모른다면{' '}
              <br />
              <b>최근 기록 기준</b>으로 계산 방법을 선택해주세요.
            </P>
          </AreaContent>
        </AreaBox1>
      </AreaRow>
    </AreaWrapper>
  );
};

export default DefaultPageDescription;
