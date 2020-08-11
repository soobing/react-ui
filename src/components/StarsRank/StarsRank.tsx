import React from 'react';
import styled from 'styled-components';

const MAX_RANK = 5;
type RankType = 1 | 2 | 3 | 4 | 5;
interface StarsRankProps {
  rank: RankType;
}

const Wrapper = styled.div`
  display: grid; 
  grid-template-columns: repeat(5, 2vw);
  column-gap: 0.4vw;
`;

const Filled = styled.div`
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  background: #ffe500;
`;

const Unfilled = styled.div`
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  background: #e6e6e6;
`;

const StarsRank: React.FC<StarsRankProps> = ({ rank }: StarsRankProps) => (
  <Wrapper>
    {
      [...Array(rank)].map((star, index) => <Filled key={`s_${index}`} />)
    }
    {
      [...Array(MAX_RANK - rank)].map((star, index) => <Unfilled key={`n_${index}`} />)
    }
  </Wrapper>
);

export default StarsRank;
