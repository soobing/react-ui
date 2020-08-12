import React from 'react';
import styled from 'styled-components';

import StarsRank from '../StarsRank';

const PXtoVW = (size: number) => `${(100 * size) / 575}vw`; // 575px 기준
interface CardProps {
  // loading: boolean;
  src: string;
  rank: number;
  title: string;
  description: string;
  author: string;
}

const Wrapper = styled.div`
  background: #f9f9fb;
  border: 1px solid #ececec;
  border-radius: 0.8em;
  display: flex; 
  flex-direction: row;
  min-width: 400px;
`;

const Title = styled.h1`
  font-size: ${PXtoVW(16)};
`;

const ImgThumbnail = styled.div`
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-top-left-radius: 0.8em;
    border-bottom-left-radius: 0.8em;
  }
`;

const Description = styled.p`
  text-overflow: ellipsis;
  overflow: hidden; 
  white-space: nowrap;
`;
const Contents = styled.div`
  padding: 5% 10%;
`;

const Body = styled(Contents)`
  height: 70%;
`;

const Footer = styled(Contents)`
  max-width: 70%;
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
`;
const Author = styled.div`
`;

const HorizontalCard: React.FC<CardProps> = ({ title, src, rank, description, author }: CardProps) => (
  <Wrapper>
    <ImgThumbnail>
      <img src={src} alt={title} />
    </ImgThumbnail>
    <div>
      <Body>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Body>
      <Footer>
        <StarsRank rank={rank} />
        <span>|</span>
        <Author>{author}</Author>
      </Footer>
    </div>
  </Wrapper>
);

export default HorizontalCard;
