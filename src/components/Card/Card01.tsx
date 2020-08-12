import React from 'react';

import VerticalCard from './VerticalCard';

interface CardProps {
  // loading: boolean;
  src: string;
  label: string;
  title: string;
  author: string;
  // children?: React.ReactNode;
}

const Card01: React.FC<CardProps> = ({ src, label, title, author }: CardProps) => (
  <VerticalCard src={src} label={label} title={title} author={author} />
);

export default Card01;
