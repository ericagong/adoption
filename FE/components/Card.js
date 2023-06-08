import PropTypes from "prop-types";
import styled from "styled-components";
import { border, colors } from "./styles/setups";

const Card = ({ children }) => {
  return <Root>{children}</Root>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 41.6rem;
  gap: 1rem;
  border: ${border.basic};
  background-color: ${colors.white_main};
  padding: 3.2rem auto;
`;

export default Card;
