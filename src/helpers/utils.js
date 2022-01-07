const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export function getEmailError(email) {
  return !email ? "" : email.match(emailRegex) ? "" : "Invalid E-mail";
}

export function getPasswordError(pass) {
  return !pass ? "" : pass.length >= 8 ? "" : "Password Length must be 8";
}

export function getRePasswordError(pass, rePass) {
  return pass === rePass ? "" : "Passwords don't match";
}

export function getLoginErrors(email, pass) {
  const isFieldEmpty = !email || !pass ? "Fields cannot be empty" : "";
  return isFieldEmpty || getEmailError(email) || getPasswordError(pass);
}

export function getSignUpErrors(email, pass, repass) {
  return getLoginErrors(email, pass) || getRePasswordError(pass, repass);
}
