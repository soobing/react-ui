import React from 'react';
import styled from 'styled-components';

const PXtoVW = (size: number) => `${(100 * size) / 575}vw`; // 575px 기준

interface CardProps {
  // loading: boolean;
  src: string;
  label: string;
  title: string;
  author: string;
  children?: React.ReactNode;
}

const Wrapper = styled.div`
  background: #f9f9fb;
  border: 1px solid #ececec;
  border-radius: 0.8em;
  display: table; 
  grid-template-rows: repeat(2, 50%);
  min-width: 200px;
`;

const Title = styled.h1`
  font-size: ${PXtoVW(16)};
`;

const Label = styled.h2`
  font-size: ${PXtoVW(12)};
  color: gray;
  font-weight: 300;
`;

const Highlight = styled.h2`
  font-size: ${PXtoVW(12)};
  font-weight: normal;

  & > span {
    font-size: ${PXtoVW(12)};
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

const Contents = styled.div`
  padding: 5% 10%;
`;

const Body = styled(Contents)``;

const Footer = styled(Contents)`
  border-top: 1px solid #ececec;
`;

const VerticalCard: React.FC<CardProps> = ({ src, label, title, author, children = null }: CardProps) => (
  <Wrapper>
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
      {children && <Footer>{children}</Footer>}
    </div>
  </Wrapper>
);

export default VerticalCard;
