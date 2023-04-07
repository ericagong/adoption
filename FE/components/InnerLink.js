import Link from "next/link";
import styled from "styled-components";
import { fontWeights, fontSize, colors } from "./styles/setups";

const InnerLink = ({ href, text }) => {
  return <Root href={href}>{text}</Root>;
};

const Root = styled(Link)`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: ${fontWeights.basic};
  font-size: ${fontSize.small};
  color: ${colors.gray_main};
  text-decoration: underline;
`;

export default InnerLink;
