import React from 'react';

interface CardProps {
  name: string;
}

const Card: React.FC<CardProps> = ({ name }: CardProps) => (
  <div>{name}</div>
);

export default Card;
