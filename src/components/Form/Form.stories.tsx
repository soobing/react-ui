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
    <Form maxLength={10} initValue="" placeholder="아이디어스" />
    <Form maxLength={10} initValue="abc" placeholder="아이디어스" />
    <Form maxLength={10} placeholder="disabled" initValue="" disabled />
    <Form maxLength={10} initValue="readOnly" readOnly />
  </Wrapper>
);

forms.story = {
  name: 'Default',
};
