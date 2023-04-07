import useInput from "../../utils/hooks/useInput";
import { useEffect, useState } from "react";
import IEmail from "../../assets/icons/email.svg";
import IUser from "../../assets/icons/user.svg";
import ILock from "../../assets/icons/lock_closed.svg";
import {
  isValidEmail,
  isValidUsername,
  isValidPassword,
  isValidPasswordConfirm,
} from "../../utils/validators";
import IOpen from "../../assets/icons/eye_opened.svg";
import IClose from "../../assets/icons/eye_closed.svg";
import Input from "../Input";
import Button from "../Button";
import styled from "styled-components";

// CHECK React-hook-form 처리방식 보고 모방하기
// TODO 서버 사이드 에러 체크 기능 추가 (이미 가입된 이메일 처리) - 실시간으로 처리할지? 클릭시 처리할지 의사결정
// TODO 회원가입 MOCK API 연결
// TODO 회원가입 성공/실패 시 에러 메시지 알림창 처리
const SignUpForm = () => {
  const [email, setEmail, changeEmail, emailErr, emailMsg] = useInput(
    "",
    isValidEmail,
    "사용가능한 이메일입니다.",
    "올바르지 않은 형식의 이메일입니다."
  );
  const [username, setUsername, changeUsername, usernameErr, usernameMsg] =
    useInput(
      "",
      isValidUsername,
      "사용가능한 사용자 이름입니다.",
      "사용자명은 영어 대소문자, 한글, 숫자만 사용 가능하며 3-8자 사이로 구성해야합니다."
    );
  const [password, setPassword, changePassword, passwordErr, passwordMsg] =
    useInput(
      "",
      isValidPassword,
      "사용가능한 비밀번호입니다.",
      "비밀번호는 5-10자 사이의 영어 대소문자/숫자 조합이어야합니다."
    );

  const [passwordConfirm, setPasswordConfirm, changePasswordConfirm] =
    useInput("");
  const [passwordConfirmErr, setPasswordConfirmErr] = useState(false);
  const [passwordConfirmMsg, setPasswordConfirmMsg] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!passwordConfirm) {
      setPasswordConfirmErr(true);
      setPasswordConfirmMsg("");
      return;
    }
    if (isValidPasswordConfirm(password, passwordConfirm)) {
      setPasswordConfirmErr(false);
      setPasswordConfirmMsg("비밀번호와 일치합니다.");
      return;
    }
    setPasswordConfirmErr(true);
    setPasswordConfirmMsg("비밀번호와 일치하지 않습니다.");
  }, [password, passwordConfirm]);

  const getType = showPassword ? "text" : "password";

  const getToggleButton = () => {
    const onToggleShow = () => {
      setShowPassword((prev) => !prev);
    };
    return (
      <RightButton type="button" onClick={onToggleShow}>
        {showPassword ? <IClose /> : <IOpen />}
      </RightButton>
    );
  };

  const getDisabled =
    emailErr || usernameErr || passwordErr || passwordConfirmErr ? true : false;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`[@handleSubmit] ${(email, username, password)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="email"
        type="text"
        icon={<IEmail />}
        placeholder="이메일"
        value={email}
        onChange={changeEmail}
        error={emailErr}
        message={emailMsg}
      />
      <Input
        name="username"
        type="text"
        icon={<IUser />}
        placeholder="사용자명"
        value={username}
        onChange={changeUsername}
        error={usernameErr}
        message={usernameMsg}
      />
      <InputWrapper>
        <Input
          name="password"
          type={getType}
          icon={<ILock />}
          placeholder="비밀번호"
          value={password}
          onChange={changePassword}
          error={passwordErr}
          message={passwordMsg}
        />
        {getToggleButton()}
      </InputWrapper>
      <Input
        name="passwordConfrim"
        type={getType}
        icon={<ILock />}
        placeholder="비밀번호 확인"
        value={passwordConfirm}
        onChange={changePasswordConfirm}
        error={passwordConfirmErr}
        message={passwordConfirmMsg}
      />
      <Button
        type="submit"
        text="회원가입"
        onClick={handleSubmit}
        disabled={getDisabled}
      />
    </form>
  );
};

const InputWrapper = styled.div`
  border: none;
  position: relative;
`;

const RightButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 1.3rem;
  right: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;

export default SignUpForm;
