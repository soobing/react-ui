import React from 'react';
import {
  withKnobs, text,
} from '@storybook/addon-knobs';

import styled from 'styled-components';
import {
  VerticalCard,
} from './index';
import Toy from '../../assets/toy.jpg';
import Toy2 from '../../assets/toy2.jpg';
import Toy3 from '../../assets/toy3.jpg';

const Wrapper = styled.div`
  display: grid; 
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

export default {
  title: 'components|Card/VerticalCard',
  component: VerticalCard,
  decorators: [withKnobs],
};

export const card = () => {
  const label = text('label', 'label');

  return (
    <Wrapper>
      <VerticalCard type="large" title="Card Title" src={Toy} label={label} rank={5} description="lorem ipsum dolor sit amet" author="Cross out" />
      <VerticalCard type="medium" title="Card Title" src={Toy2} label={label} rank={3} author="Cross out" />
      <VerticalCard type="small" title="Card Title" src={Toy3} label={label} author="Cross out" />
      <VerticalCard type="small" title="Card Title" src={Toy} label={label} author="Cross out" />
    </Wrapper>
  );
};

card.story = {
  name: 'Default',
};
