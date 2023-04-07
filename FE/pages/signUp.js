import Root from "../components/Layout";
import Layout from "../components/Card";
import ILogo from "../assets/illustrations/logo.svg";
import InnerLink from "../components/InnerLink";
import SignUpForm from "../components/auth/SignUpForm";

const SignUp = () => {
  return (
    <Root>
      <Layout>
        <ILogo />
        <InnerLink href={"/signIn"} text="로그인으로" />
        <SignUpForm />
      </Layout>
    </Root>
  );
};

export default SignUp;
