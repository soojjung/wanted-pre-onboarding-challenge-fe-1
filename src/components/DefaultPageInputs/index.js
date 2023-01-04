import React from 'react';
import calendar from '../../assets/icons/calendar.svg';
import check from '../../assets/icons/check-red.svg';
import {
  AreaWrapper,
  AreaRow,
  AreaInputRow,
  AreaBox1,
  AreaWhiteBox1,
  AreaBox2,
  IconBox,
  QuestionBox,
  AnswerBox,
  ButtonBox,
  AreaContent,
  IconImage,
  P,
  RadioButton,
  CalendarButton,
  ConfirmButton,
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
                  <AreaContent>
                    <IconImage src={calendar} alt="calendar" />
                  </AreaContent>
                </IconBox>
                <QuestionBox>
                  <AreaContent>
                    <P color="blue">최근 생리일</P>
                  </AreaContent>
                </QuestionBox>
                <AnswerBox>
                  <AreaContent>
                    <P>Date input</P>
                  </AreaContent>
                </AnswerBox>
                <ButtonBox>
                  <AreaContent>
                    <CalendarButton>달력</CalendarButton>
                  </AreaContent>
                </ButtonBox>
              </AreaRow>
            </AreaWhiteBox1>
          </AreaRow>
          <AreaRow>
            <AreaWhiteBox1 padding>
              <AreaRow>
                <IconBox>
                  <AreaContent>
                    <IconImage src={check} alt="check-circle" />
                  </AreaContent>
                </IconBox>
                <QuestionBox>
                  <AreaContent>
                    <P color="red">계산 방법</P>
                  </AreaContent>
                </QuestionBox>
                <AreaBox1>
                  <AreaRow>
                    <AreaBox2>
                      <AreaRow>
                        <AreaContent>
                          <RadioButton
                            type="checkbox"
                            name="recentDates"
                            value="recentDates"
                            // checked="checked"
                          />
                        </AreaContent>
                        <AreaBox1>
                          <AreaContent>
                            <P>최근 기록</P>
                          </AreaContent>
                        </AreaBox1>
                      </AreaRow>
                    </AreaBox2>
                    <AreaBox2>
                      <AreaContent>
                        <P>생리 주기</P>
                      </AreaContent>
                    </AreaBox2>
                  </AreaRow>
                </AreaBox1>
              </AreaRow>
            </AreaWhiteBox1>
          </AreaRow>
          <AreaRow>
            <AreaWhiteBox1 padding>
              <AreaContent>3</AreaContent>
            </AreaWhiteBox1>
          </AreaRow>
          <AreaRow>
            <AreaBox1>
              <AreaContent>
                <ConfirmButton>확인</ConfirmButton>
              </AreaContent>
            </AreaBox1>
          </AreaRow>
        </AreaBox1>
      </AreaInputRow>
    </AreaWrapper>
  );
};

export default DefaultPageInputs;
