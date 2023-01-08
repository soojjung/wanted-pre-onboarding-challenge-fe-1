// email validation
export const validateEmail = (email) => email && email.includes('@');

/* password validation */
export const validatePassword = (password) => {
  /* 최소 8자 이상, 최소 1개 이상의 알파벳, 최소 1개 이상의 숫자, 공백금지 */
  const rule = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?!.* ).*$/;
  return rule.test(password);
};
