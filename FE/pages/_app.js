import Head from "next/head";
import PropTypes from "prop-types";
import GlobalStyle from "../components/styles/GlobalStyle";

// 페이지 공통 로직 처리
const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>DongBan</title>
      </Head>
      <>
        <GlobalStyle />
        <Component />
      </>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
