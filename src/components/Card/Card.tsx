import React from 'react';

import {
  Card01,
  Card02,
  Card03,
} from './index';

type CardType = '01' | '02' | '03';

interface CardProps {
  type: CardType;

  // loading: boolean;
  src: string;
  label: string;
  title: string;
  author: string;
  children?: React.ReactNode;

  rank?: number;
  description?: string;
}

const Card: React.SFC<CardProps> = ({ type, src, label, title, author, rank, description, children }: CardProps) => {
  switch (type) {
    case '01': return <Card01 title={title} src={src} label={label} author={author} />;
    case '02': return rank && <Card02 title={title} src={src} label={label} author={author} rank={rank} />;
    case '03': return rank && description && <Card03 title={title} src={src} label={label} author={author} rank={rank} description={description} />;
    default: return children as any;
  }
};

export default Card;
