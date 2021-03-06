import React, {
  useState,
} from 'react';
import styled from 'styled-components';

interface FormProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxLength?: number;
  initValue?: string;
}

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin-left: 20px;
`;

const Text = styled.div`
  position: relative;
  width: 100%;
  & > textarea {
    height: 100%;
    width: 100%;
    resize: none;
    overflow: hidden;
  }
`;

const Count = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Form: React.FC<FormProps> = ({ initValue = '', ...textareaProps }: FormProps) => {
  const { maxLength = 10 } = textareaProps;
  const [savedValue, setValueSaved] = useState(initValue);
  const [value, setValue] = useState(savedValue);

  const showSaveButton = savedValue !== value;
  return (
    <Wrapper>
      <Text>
        <textarea
          {...textareaProps}
          value={value}
          onChange={(e) => {
            // 한글 maxLength 조정
            if (e.target.value.length > maxLength) return;
            setValue(e.target.value);
          }}
        />
        <Count>{maxLength - value.length}</Count>
      </Text>
      {showSaveButton && <Button type="button" onClick={() => setValueSaved(value)}>Save</Button>}
    </Wrapper>
  );
};

export default Form;
