import React from 'react';
import {
  AreaWrapper,
  AreaRow,
  AreaBox1,
  AreaCenterContent,
  TitleH1,
  P,
} from './style';

const DefaultPageDescription = () => {
  return (
    <AreaWrapper minWidth>
      <AreaRow>
        <AreaBox1 padding>
          <AreaCenterContent>
            <TitleH1>생리 예정일 계산기</TitleH1>
          </AreaCenterContent>
        </AreaBox1>
      </AreaRow>
      <AreaRow>
        <AreaBox1 padding>
          <AreaCenterContent>
            <P>다음 생리 예정일을 알려드립니다.</P>
            <P>
              <b>생리 주기</b>를 안다면 <b>생리 주기 기준</b>으로,
            </P>
            <P>
              모른다면 <b>최근 기록 기준</b>으로 계산 방법을
            </P>
            <P>선택해주세요.</P>
          </AreaCenterContent>
        </AreaBox1>
      </AreaRow>
    </AreaWrapper>
  );
};

export default DefaultPageDescription;
