import React from 'react';
import {
  withKnobs,
} from '@storybook/addon-knobs';

import styled from 'styled-components';
import {
  HorizontalCard,
} from './index';
import Toy from '../../assets/toy.jpg';
import Toy2 from '../../assets/toy2.jpg';
import Toy3 from '../../assets/toy3.jpg';

const Wrapper = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

export default {
  title: 'components|Card/HorizontalCard',
  component: HorizontalCard,
  decorators: [withKnobs],
};

export const card = () => (
  <Wrapper>
    <HorizontalCard title="Card Title" src={Toy} rank={5} author="Cross out" description="lorem ipsum dolor sit amet" />
    <HorizontalCard title="Card Title" src={Toy2} rank={3} author="Cross out" description="lorem ipsum dolor sit amet" />
    <HorizontalCard title="Card Title" src={Toy3} rank={1} author="Cross out" description="lorem ipsum dolor sit amet" />
    <HorizontalCard title="Card Title" src={Toy} rank={2} author="Cross out" description="lorem ipsum dolor sit amet" />
  </Wrapper>
);

card.story = {
  name: 'Default',
};
