import React from 'react';
import styled from 'styled-components';

import StarsRank from '../StarsRank';

type CardType = 'small' | 'medium' | 'large';
interface CardProps {
  // loading: boolean;
  type: CardType;
  src: string;
  rank?: number;
  label?: string;
  title: string;
  description?: string;
  author: string;
}

const Wrapper = styled.div<{ type: CardType }>`
  background: #f9f9fb;
  border: 1px solid #ececec;
  border-radius: 0.8em;
  display: grid; 
  grid-template-rows: repeat(2, 50%);
  height: 500px;
  min-width: 200px;
`;

const Title = styled.h1`
  font-size: 1.2em;
`;

const Label = styled.h2`
  font-size: 1em;
  color: gray;
  font-weight: 300;
`;

const Highlight = styled.h2`
  font-size: 1em;
  font-weight: normal;

  & > span {
    font-size: 1em;
    font-weight: 300;

    :nth-of-type(1) {
      color: red;
    }
    :nth-of-type(2) {
      color: gray;
      text-decoration: line-through;
    }
  }
`;

const ImgThumbnail = styled.div`
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-top-left-radius: 0.8em;
    border-top-right-radius: 0.8em;
  }
`;

const Description = styled.p`
  text-overflow: ellipsis;
  overflow: hidden; 
  white-space: nowrap;
`;
const Contents = styled.div`
  padding: 10%;
`;

const Body = styled(Contents)``;

const Footer = styled(Contents)`
  border-top: 1px solid #ececec;
`;

const VerticalCard: React.FC<CardProps> = (
  { label, type, title, src, rank, description, author }: CardProps,
) => {
  const showFooter = type === 'medium' || type === 'large';
  const showStarsRanking = type === 'medium' || type === 'large';
  const showDescription = type === 'large';

  return (
    <Wrapper type={type}>
      <ImgThumbnail>
        <img src={src} alt={title} />
      </ImgThumbnail>
      <div>
        <Body>
          <Label>{label}</Label>
          <Title>{title}</Title>
          <Highlight>
            <span>Highlight </span>
            <span>{author}</span>
          </Highlight>
        </Body>
        {
          showFooter
          && (
            <Footer>
              {showStarsRanking && rank && <StarsRank rank={rank} />}
              {showDescription && description && <Description>{description}</Description>}
            </Footer>
          )
        }
      </div>
    </Wrapper>
  );
};

export default VerticalCard;
