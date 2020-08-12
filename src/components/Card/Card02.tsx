import React from 'react';

import VerticalCard from './VerticalCard';
import StarsRank from '../StarsRank';

interface CardProps {
  // loading: boolean;
  src: string;
  label: string;
  title: string;
  author: string;
  // children?: React.ReactNode;

  rank: number;
}

const Card02: React.FC<CardProps> = ({ src, label, title, author, rank }: CardProps) => (
  <VerticalCard src={src} label={label} title={title} author={author}>
    <StarsRank rank={rank} />
  </VerticalCard>
);

export default Card02;
