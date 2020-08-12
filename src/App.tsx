import React from 'react';
import styled, {
  ThemeProvider,
} from 'styled-components';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import Home from './page/Home';
import Card from './page/Card';
import Form from './page/Form';

import './styles/global.css';
import theme from './styles/theme';

const Wrapper = styled.div`
  max-width: 1950px;
  height: 100%;
  margin: auto;
  background: ${(props) => props.theme.gray10};
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/card">Card</Link>
                </li>
                <li>
                  <Link to="/form">Form</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/card">
                <Card />
              </Route>
              <Route path="/form">
                <Form />
              </Route>
            </Switch>
          </div>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}
