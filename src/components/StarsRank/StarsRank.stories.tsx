import React from 'react';
import {
  withKnobs,
} from '@storybook/addon-knobs';

import styled from 'styled-components';
import StarsRank from './StarsRank';

const Wrapper = styled.div`
`;

export default {
  title: 'components|StarsRank',
  component: StarsRank,
  decorators: [withKnobs],
};

export const starsRank = () => (
  <Wrapper>
    <StarsRank rank={3} />
  </Wrapper>
);

starsRank.story = {
  name: 'Default',
};
