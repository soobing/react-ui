import React from 'react';

import HorizontalCard from './HorizontalCard';

interface CardProps {
  // loading: boolean;
  src: string;
  rank: number;
  title: string;
  description: string;
  author: string;
}

const Card04: React.FC<CardProps> = ({ src, rank, description, title, author }: CardProps) => (
  <HorizontalCard src={src} title={title} author={author} rank={rank} description={description} />
);

export default Card04;
