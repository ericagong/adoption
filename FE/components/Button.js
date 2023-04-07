import styled, { css } from "styled-components";
import {
  borderRadius,
  colors,
  fontSize,
  fontWeights,
  lineHeights,
} from "./styles/setups";

const Button = ({
  type,
  icon = null,
  text,
  onClick,
  disabled = false,
  background = colors.orange_main,
}) => {
  return (
    <Root
      type={type}
      onClick={onClick}
      disabled={disabled}
      background={background}
    >
      <LeftSection>{icon}</LeftSection>
      {text}
    </Root>
  );
};

const Root = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: 32.9rem;
  height: 5rem;
  border-radius: ${borderRadius.round};
  border: none;
  background-color: ${(props) => props.background};
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: ${fontWeights.extra};
  font-size: ${fontSize.basic};
  line-height: ${lineHeights.basic};
  color: ${colors.white_main};

  &:hover {
    cursor: "pointer";
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${colors.orange_disabled};
      &:hover {
        cursor: "default";
      }
    `}
`;

const Section = styled.div`
  position: absolute;
`;

const LeftSection = styled(Section)`
  top: 1.3rem;
  left: 1.5rem;
  background-color: none;
`;

export default Button;
