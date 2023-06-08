import styled from "styled-components";
import {
  colors,
  border,
  borderRadius,
  fontSize,
  fontWeights,
  lineHeights,
} from "./styles/setups";

const Input = ({
  name,
  type,
  icon,
  placeholder,
  value,
  onChange,
  error,
  message,
}) => {
  return (
    <Root>
      <InputBox>
        <LeftSection>{icon}</LeftSection>
        <TextBox
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </InputBox>
      <GuideMessage error={error}>{message}</GuideMessage>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: none;
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  border: none;
`;

const Section = styled.div`
  position: absolute;
`;

const LeftSection = styled(Section)`
  top: 1.3rem;
  left: 1.5rem;
  background-color: none;
`;

const TextBox = styled.input`
  box-sizing: border-box;
  width: 32.9rem;
  height: 5rem;
  padding: 1.3rem 2.5rem 1.3rem 5rem;
  border: ${border.basic};
  border-radius: ${borderRadius.round};

  &:hover {
    border: ${border.hover};
  }
`;

const GuideMessage = styled.div`
  border: none;
  font-family: "Noto Sans KR";
  font-weight: ${fontWeights.basic};
  font-size: ${fontSize.small};
  line-height: ${lineHeights.tight};
  color: ${(props) => (props.error ? colors.orange_main : colors.mint_main)};
`;

export default Input;
