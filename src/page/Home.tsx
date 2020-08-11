import React from 'react';

import styled from 'styled-components';

const Hero = styled.div`
  position: absolute;
  width: 213px;
  height: 252px;
  left: 48.33px;
  top: 310.71px;
`;

export default function Home() {
  return (
    <Hero>
      This is home
    </Hero>
  );
}
