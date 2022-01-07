import { connect } from "react-redux";
import { IconButton, TextField, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginViaEmailPass } from "../../state/user/userActions";
import { LOGO } from "../../constants";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import {
  getEmailError,
  getPasswordError,
  getRePasswordError,
  getSignUpErrors,
} from "../../helpers/utils";

function SignUp(props) {
  const [passVisible, setPassVisible] = useState(false);
  const [rePassVisible, setRePassVisible] = useState(false);

  const [errors, setErrors] = useState({
    emailError: "",
    passError: "",
    rePassError: "",
  });

  const [activeFields, setActiveFields] = useState({
    emailActive: false,
    passActive: false,
    rePassActive: false,
  });

  const emailRef = useRef();
  const passRef = useRef();
  const rePassRef = useRef();

  const { dispatch } = props;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (getSignUpErrors(emailRef.current.value, passRef.current.value)) return;

    dispatch(loginViaEmailPass(emailRef.current.value, passRef.current.value));
  };

  return (
    <div className="p-nav mh-auto">
      <div className="Auth-container flex al-center">
        <img className="Auth-img" src={LOGO} alt="_Logo" />

        <form className="flex-c al-center">
          <h1 className="Auth-form-heading">Sign Up</h1>

          <TextField
            className="Auth-form-input-field"
            label="Email"
            variant="outlined"
            inputRef={emailRef}
            onChange={(e) =>
              setErrors({
                ...errors,
                emailError: getEmailError(e.target.value),
              })
            }
            error={!activeFields.emailActive && errors.emailError !== ""}
            helperText={!activeFields.emailActive && errors.emailError}
            onFocus={() =>
              setActiveFields({ ...activeFields, emailActive: true })
            }
            onBlur={() =>
              setActiveFields({ ...activeFields, emailActive: false })
            }
          />
          <TextField
            className="Auth-form-input-field"
            label="Password"
            variant="outlined"
            inputRef={passRef}
            type={passVisible ? "text" : "password"}
            onChange={(e) =>
              setErrors({
                ...errors,
                passError: getPasswordError(e.target.value),
              })
            }
            error={!activeFields.passActive && errors.passError !== ""}
            helperText={!activeFields.passActive && errors.passError}
            onFocus={() =>
              setActiveFields({ ...activeFields, passActive: true })
            }
            onBlur={() =>
              setActiveFields({ ...activeFields, passActive: false })
            }
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setPassVisible(!passVisible)}>
                  {passVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              ),
            }}
          />
          <TextField
            className="Auth-form-input-field"
            label="Re-Password"
            variant="outlined"
            inputRef={rePassRef}
            type={rePassVisible ? "text" : "password"}
            onChange={(e) =>
              setErrors({
                ...errors,
                rePassError: getRePasswordError(e.target.value),
              })
            }
            error={!activeFields.rePassActive && errors.rePassError !== ""}
            helperText={!activeFields.rePassActive && errors.rePassError}
            onFocus={() =>
              setActiveFields({ ...activeFields, rePassActive: true })
            }
            onBlur={() =>
              setActiveFields({ ...activeFields, rePassActive: false })
            }
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setRePassVisible(!rePassVisible)}>
                  {rePassVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              ),
            }}
          />

          <Button className="Auth-form-btn" onClick={handleFormSubmit}>
            Sign Up
          </Button>
          <p className="Auth-form-redirect">
            Old User? <Link to="/auth/log-in">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state,
  };
}

export default connect(mapStateToProps)(SignUp);
