import React from 'react';
import {
  withKnobs, text, number,
} from '@storybook/addon-knobs';
import styled from 'styled-components';

import {
  Card,
} from './index';
import Toy from '../../assets/toy.jpg';
// import Toy2 from '../../assets/toy2.jpg';
// import Toy3 from '../../assets/toy3.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

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

const HorWrapper = styled.div`
  height: 50%;
`;

export default {
  title: 'components|Card',
  component: null,
  decorators: [withKnobs],
};

export const card = () => {
  const label = text('label', 'label');
  const rank = number('star ranks', 3, {
    min: 0, max: 5,
  });

  return (
    <Wrapper>
      <Card type="01" title="Card Title" src={Toy} label={label} author="Cross out" />
      <Card type="02" title="Card Title" src={Toy} label={label} author="Cross out" rank={rank} />
      <Card type="03" title="Card Title" src={Toy} label={label} author="Cross out" rank={rank} description="lorem ipsum dolor sit amet" />
      <HorWrapper>
        <Card type="04" title="Card Title" src={Toy} author="Cross out" rank={rank} description="lorem ipsum dolor sit amet" />
      </HorWrapper>
    </Wrapper>
  );
};

card.story = {
  name: 'Default',
};
