import React from 'react';
import {
  AreaWrapper,
  AreaRow,
  AreaInputRow,
  AreaBox1,
  AreaContent,
} from './style';

const DefaultPageInputs = () => {
  return (
    <AreaWrapper minWidth>
      <AreaInputRow>
        <AreaBox1 padding>
          <AreaRow>
            <AreaBox1>
              <AreaContent>1</AreaContent>
            </AreaBox1>
          </AreaRow>
          <AreaRow>
            <AreaBox1>
              <AreaContent>2</AreaContent>
            </AreaBox1>
          </AreaRow>
          <AreaRow>
            <AreaBox1>
              <AreaContent>3</AreaContent>
            </AreaBox1>
          </AreaRow>
          <AreaRow>
            <AreaBox1>
              <AreaContent>4</AreaContent>
            </AreaBox1>
          </AreaRow>
        </AreaBox1>
      </AreaInputRow>
    </AreaWrapper>
  );
};

export default DefaultPageInputs;
