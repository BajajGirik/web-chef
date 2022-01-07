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

export function loginErrors(email, pass) {
  const isFieldEmpty = !email || !pass ? true : false;
  return (
    isFieldEmpty ||
    (getEmailError(email) !== "" ? true : false) ||
    (getPasswordError(pass) !== "" ? true : false)
  );
}

export function signUpErrors(email, pass, repass) {
  return (
    loginErrors(email, pass) ||
    (getRePasswordError(pass, repass) !== "" ? true : false)
  );
}
