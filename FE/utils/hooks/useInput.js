import { useState, useCallback } from "react";

/**
 * useInput custom hook
 * @param {object} initialValue default = null
 * @returns [value, setValue, onChange]
 * @description 해당 value 외의 다른 의존성이 있는 onChange 함수 필요시, 별도 작성 필요
 */

const noValidation = () => {
  return true;
};

const useInput = (
  initialValue = null,
  validator = noValidation,
  validateMsg,
  errorMsg
) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const onChange = useCallback(
    (e) => {
      const input = e.target.value;
      setValue(input);

      if (!input) {
        // 아무것도 없으면 에러 삭제
        setError(true);
        setMessage("빈 칸으로 제출할 수 없습니다.");
      } else {
        if (!validator(input)) {
          setError(true);
          setMessage(errorMsg);
        } else {
          setError(false);
          setMessage(validateMsg);
        }
      }
    },
    [value]
  );

  return [value, setValue, onChange, error, message];
};

export default useInput;
