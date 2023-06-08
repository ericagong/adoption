import Root from "../components/Layout";
import Layout from "../components/Card";
import ILogo from "../assets/illustrations/logo.svg";
import Link from "../components/Link";
import SignUpForm from "../components/auth/SignUpForm";

const SignUp = () => {
  return (
    <Root>
      <Layout>
        <ILogo />
        <Link href={"/signIn"} text="로그인하기" />
        <SignUpForm />
      </Layout>
    </Root>
  );
};

export default SignUp;
