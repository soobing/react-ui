import React from 'react';
import {
  withKnobs,
} from '@storybook/addon-knobs';

import styled from 'styled-components';
import Form from './Form';

const Wrapper = styled.div`
  display: grid; 
  grid-template-rows: repeat(3, 70px);
  grid-gap: 10px;
`;

export default {
  title: 'components|Form',
  component: Form,
  decorators: [withKnobs],
};

export const forms = () => (
  <Wrapper>
    <Form maxLength={3} initValue="" />
    <Form maxLength={3} initValue="abc" />
    <Form maxLength={3} initValue="??" />
  </Wrapper>
);

forms.story = {
  name: 'Default',
};
