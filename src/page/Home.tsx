import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.p`
  text-align: center;
  font-size: 20px;
  margin-top: 100px;
`;

export default function Home() {
  return (
    <Wrapper>
      안녕하세요! 박수빈 입니다.
      <br />
      각 Page에서 컴포넌트를 확인하실 수 있습니다.😃
    </Wrapper>
  );
}
