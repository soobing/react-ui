import React from 'react';
import styled from 'styled-components';

import {
  Card,
} from '../components/Card';
import Toy from '../assets/toy.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;

  & > div {
    width: 25%;

    :nth-of-type(4) {
      height: 200px;
    }
  }

  & > div + div {
    margin-left: 10px;
  }
`;

export default function CardPage() {
  return (
<Wrapper>
    <Card type="01" title="Card Title" src={Toy} label="label" author="Cross out" />
    <Card type="02" title="Card Title" src={Toy} label="label" author="Cross out" rank={3} />
    <Card type="03" title="Card Title" src={Toy} label="label" author="Cross out" rank={3} description="lorem ipsum dolor sit amet" />
    <Card type="04" title="Card Title" src={Toy} author="Cross out" rank={3} description="lorem ipsum dolor sit amet" />
</Wrapper>
  );
}
