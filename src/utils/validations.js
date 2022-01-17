const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

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

export function getPinCodeError(pincode) {
  if (!pincode) return "";
  if (isNaN(pincode)) return "Pincode Should be a number";
  return pincode.length !== 6 ? "Pincode should be 6-digit" : "";
}

export function getPhoneNumberError(phoneNo) {
  if (!phoneNo) return "";
  return phoneNo.match(phoneRegex) && !phoneNo.match(/0{5,}/)
    ? ""
    : "Invalid Phone Number";
}

export function shippingErrors(phoneNo, pincode) {
  const isFieldEmpty = !phoneNo || !pincode ? true : false;
  return (
    isFieldEmpty ||
    getPhoneNumberError(phoneNo) !== "" ||
    getPinCodeError(pincode) !== ""
  );
}
