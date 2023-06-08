import NextLink from "next/link";
import styled from "styled-components";
import { fontWeights, fontSize, colors } from "./styles/setups";

const Link = ({ href, text, isOuterLink = false }) => {
  const getLink = () => {
    const linkText = <Text>{text}</Text>;
    if (!isOuterLink) return <Root href={href}>{linkText}</Root>;
    else
      return (
        <Root as="a" href={href} target="_blank">
          {linkText}
        </Root>
      );
  };

  return <>{getLink()}</>;
};

const Root = styled(NextLink)``;

const Text = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: ${fontWeights.basic};
  font-size: ${fontSize.small};
  color: ${colors.gray_main};
  text-decoration: none;
  &:hover {
    color: ${colors.orange_main};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Link;
