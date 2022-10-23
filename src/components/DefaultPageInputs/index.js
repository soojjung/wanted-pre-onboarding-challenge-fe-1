import React from 'react';
import {
  AreaWrapper,
  AreaRow,
  AreaInputRow,
  AreaBox1,
  AreaWhiteBox1,
  IconBox,
  QuestionBox,
  AnswerBox,
  ButtonBox,
  AreaContent,
} from './style';

const DefaultPageInputs = () => {
  return (
    <AreaWrapper minWidth>
      <AreaInputRow>
        <AreaBox1 padding>
          <AreaRow>
            <AreaWhiteBox1 padding>
              <AreaRow>
                <IconBox>
                  <AreaContent>icn</AreaContent>
                </IconBox>
                <QuestionBox>
                  <AreaContent>최근 생리일</AreaContent>
                </QuestionBox>
                <AnswerBox>
                  <AreaContent>Date input</AreaContent>
                </AnswerBox>
                <ButtonBox>
                  <AreaContent>달력</AreaContent>
                </ButtonBox>
              </AreaRow>
            </AreaWhiteBox1>
          </AreaRow>
          <AreaRow>
            <AreaWhiteBox1 padding>
              <AreaContent>2</AreaContent>
            </AreaWhiteBox1>
          </AreaRow>
          <AreaRow>
            <AreaWhiteBox1 padding>
              <AreaContent>3</AreaContent>
            </AreaWhiteBox1>
          </AreaRow>
          <AreaRow>
            <AreaWhiteBox1 padding>
              <AreaContent>4</AreaContent>
            </AreaWhiteBox1>
          </AreaRow>
        </AreaBox1>
      </AreaInputRow>
    </AreaWrapper>
  );
};

export default DefaultPageInputs;
