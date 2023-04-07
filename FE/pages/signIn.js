import Root from "../components/Layout";
import Layout from "../components/Card";
import ILogo from "../assets/illustrations/logo.svg";
import Link from "../components/Link";
import SignInForm from "../components/auth/SignInForm";

const SignIn = () => {
  return (
    <Root>
      <Layout>
        <ILogo />
        <Link href={"/signUp"} text="회원가입하기" />
        <SignInForm />
      </Layout>
    </Root>
  );
};

export default SignIn;
