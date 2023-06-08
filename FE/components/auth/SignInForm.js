import useInput from "../../utils/hooks/useInput";
import { useEffect, useState } from "react";
import IEmail from "../../assets/icons/email.svg";
import ILock from "../../assets/icons/lock_closed.svg";
import IOpen from "../../assets/icons/eye_opened.svg";
import IClose from "../../assets/icons/eye_closed.svg";
import Input from "../Input";
import Button from "../Button";
import styled from "styled-components";

// CHECK React-hook-form 처리방식 보고 모방하기
// TODO 로그인 MOCK API 연결
// TODO 로그인 성공/실패 시 에러 메시지 알림창 처리
const signInForm = () => {
  const [email, _, changeEmail, emailErr, emailMsg] = useInput("");
  const [password, __, changePassword, passwordErr, passwordMsg] = useInput("");

  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);

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

  useEffect(() => {
    if (!email || !password) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`[@handleSubmit] ${email} ${password}`);
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
      <Button
        type="submit"
        text="로그인"
        onClick={handleSubmit}
        disabled={disabled}
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

export default signInForm;
