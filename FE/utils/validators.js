/**
 * 이메일 검증
 * @param {string} email 이메일
 * @returns boolean
 */
export function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

/**
 * username 검증
 * @param {string} username 사용자명
 * @returns boolean
 */
export function isValidUsername(username) {
  const usernamePattern = /[a-zA-Zㄱ-힣\d]{3,8}$/;
  return usernamePattern.test(username);
}

/**
 * Password 검증
 * @param {string} password 패스워드
 * @returns boolean
 */
export function isValidPassword(password) {
  const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{5,10}$/;
  return passwordPattern.test(password);
}

/**
 * Password Confirm 검증
 * @param {string} password 패스워드
 * @param {string} passwordConfirm 패스워드 재입력
 * @returns boolean
 */
export function isValidPasswordConfirm(password, passwordCheck) {
  return password === passwordCheck;
}
