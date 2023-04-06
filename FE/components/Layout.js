import PropTypes from "prop-types";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <Root>{children}</Root>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default Layout;
