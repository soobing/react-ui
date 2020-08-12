import React from 'react';
import styled from 'styled-components';

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
  description: string;
}

const Description = styled.p`
  text-overflow: ellipsis;
  overflow: hidden; 
  white-space: nowrap;
`;

const Card01: React.FC<CardProps> = ({ src, label, title, author, rank, description }: CardProps) => (
  <VerticalCard src={src} label={label} title={title} author={author}>
    <StarsRank rank={rank} />
    <Description>{description}</Description>
  </VerticalCard>
);

export default Card01;
