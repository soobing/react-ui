import React from 'react';
import styled from 'styled-components';

import Form from '../components/Form';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    height: 50px;
  }
  
  & > div + div {
    margin-top: 10px;
  }
`;

export default function FormPage() {
  return (
<Wrapper>
    <Form placeholder="아이디어스" />
    <Form initValue="abc" />
    <Form placeholder="disabled" disabled />
    <Form initValue="readOnly" readOnly />
</Wrapper>
  );
}
