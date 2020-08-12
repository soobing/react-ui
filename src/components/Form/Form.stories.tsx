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
    <Form placeholder="아이디어스" />
    <Form initValue="abc" />
    <Form placeholder="disabled" disabled />
    <Form initValue="readOnly" readOnly />
  </Wrapper>
);

forms.story = {
  name: 'Default',
};
