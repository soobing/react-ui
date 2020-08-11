import React from 'react';
import styled from 'styled-components';

const MAX_RANK = 5;
interface StarsRankProps {
  rank: number;
}

const Wrapper = styled.div`
  display: grid; 
  grid-template-columns: repeat(5,1em);
  column-gap: 0.3em;
`;

const Filled = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background: #ffe500;
`;

const Unfilled = styled.div`
  width: 1em;
  height: 1em;
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
