import React from 'react';
import {
  withKnobs, text,
} from '@storybook/addon-knobs';

import Card from './Card';

export default {
  title: 'components|Card',
  component: Card,
  decorators: [withKnobs],
};

export const card = () => {
  const name = text('name', '카드이름');

  return <Card name={name} />;
};

card.story = {
  name: 'Default',
};
