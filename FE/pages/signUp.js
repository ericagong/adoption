import Root from "../components/Layout";
import Layout from "../components/Card";
import ILogo from "../assets/illustrations/logo.svg";
import SignUpForm from "../components/auth/SignUpForm";

const SignUp = () => {
  return (
    <Root>
      <Layout>
        <ILogo />
        <SignUpForm />
      </Layout>
    </Root>
  );
};

export default SignUp;
