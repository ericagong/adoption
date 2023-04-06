import useInput from "../hooks/useInput";
import Root from "../components/Layout";
import Layout from "../components/Card";
import Logo from "../assets/illustrations/logo.svg";
import Input from "../components/Input";
import Show from "../assets/icons/eye_opened.svg";

const Home = () => {
  const validation = (data) => {
    return data.length > 5;
  };

  const [password, _, changePassword, passwordErr, passwordMsg] = useInput(
    "",
    validation,
    "사용가능합니다.",
    "사용이 불가능합니다."
  );

  return (
    <Root>
      <Layout>
        <Logo />
        <Input
          name="password"
          type="text"
          icon={<Show />}
          placeholder="hihi"
          value={password}
          onChange={changePassword}
          error={passwordErr}
          message={passwordMsg}
        />
      </Layout>
    </Root>
  );
};

export default Home;
