import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: blue;
`;

interface CardProps {
  name: string;
}

const Card: React.FC<CardProps> = ({ name }: CardProps) => (
  <Wrapper>{name}</Wrapper>
);

export default Card;
