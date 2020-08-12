import React, {
  useState,
} from 'react';
import styled from 'styled-components';

interface FormProps {
  maxLength: number;
}

const Wrapper = styled.div`
`;

const Form: React.FC<FormProps> = ({ maxLength }: FormProps) => {
  const [text, setText] = useState('');
  return (
    <Wrapper>
      <textarea
        value={text}
        onChange={(e) => {
          // 한글 maxLength 조정
          if (e.target.value.length > maxLength) return;

          setText(e.target.value);
        }}
        maxLength={maxLength}
      />
      {text.length}
      /
      {maxLength}
    </Wrapper>
  );
};

export default Form;
