import { connect } from "react-redux";
import { IconButton, TextField, Button, Alert } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { signinViaEmailPass } from "../../state/user/userActions";
import { LOGO, ROUTES } from "../../utils/constants";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import {
  getEmailError,
  getPasswordError,
  getRePasswordError,
  signUpErrors,
} from "../../utils/validations";

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

  const navigate = useNavigate();
  const { user, dispatch } = props;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      signUpErrors(
        emailRef.current.value,
        passRef.current.value,
        rePassRef.current.value
      ) ||
      user.loading
    )
      return;

    dispatch(
      signinViaEmailPass(
        emailRef.current.value,
        passRef.current.value,
        navigate
      )
    );
  };

  return (
    <div className="p-container mh-auto">
      <div className="Auth-container flex al-center">
        <img className="Auth-img" src={LOGO} alt="_Logo" />

        <form onSubmit={handleFormSubmit} className="flex-c al-center">
          <h1 className="Auth-form-heading">Sign Up</h1>
          {user?.error && (
            <Alert className="Auth-alert" severity="error">
              {user.error}
            </Alert>
          )}

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
                rePassError: getRePasswordError(
                  passRef.current.value,
                  e.target.value
                ),
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

          <Button className="Auth-form-btn" type="submit">
            Sign Up
          </Button>
          <p className="Auth-form-redirect">
            Old User? <Link to={ROUTES.LOGIN}>Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(SignUp);
