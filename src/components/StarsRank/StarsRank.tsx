import React from 'react';
import styled from 'styled-components';

const MAX_RANK = 5;
interface StarsRankProps {
  rank: number;
}

const Dot = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  & > ${Dot} + ${Dot} {
    margin-left: 0.2em;
  }
`;

const Filled = styled(Dot)`
  background: #ffe500;
`;

const Unfilled = styled(Dot)`
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
