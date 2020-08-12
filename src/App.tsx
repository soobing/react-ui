import React from 'react';
import styled, {
  ThemeProvider,
} from 'styled-components';

import Card from './page/Card';
import Form from './page/Form';

import './styles/global.css';
import theme from './styles/theme';

const Wrapper = styled.div`
  max-width: 1950px;
  height: 100vh;
  margin: auto;
  background: ${(props) => props.theme.gray10};
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Card />
        <Form />
      </Wrapper>
    </ThemeProvider>
  );
}
