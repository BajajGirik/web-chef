import { connect } from "react-redux";
import { IconButton, TextField, Button, Alert } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginViaEmailPass } from "../../state/user/userActions";
import { LOGO } from "../../constants";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import {
  loginErrors,
  getEmailError,
  getPasswordError,
} from "../../helpers/utils";

function Login(props) {
  const [passVisible, setPassVisible] = useState(false);
  const [errors, setErrors] = useState({
    emailError: "",
    passError: "",
  });
  const [activeFields, setActiveFields] = useState({
    emailActive: false,
    passActive: false,
  });

  const emailRef = useRef();
  const passRef = useRef();

  const navigate = useNavigate();
  const { user, dispatch } = props;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      loginErrors(emailRef.current.value, passRef.current.value) ||
      user.loading
    )
      return;

    dispatch(
      loginViaEmailPass(emailRef.current.value, passRef.current.value, navigate)
    );
  };

  return (
    <div className="p-nav mh-auto">
      <div className="Auth-container flex al-center">
        <img className="Auth-img" src={LOGO} alt="_Logo" />

        <form onSubmit={handleFormSubmit} className="flex-c al-center">
          <h1 className="Auth-form-heading">Login</h1>
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

          <Link
            className="Auth-form-forgot-pass-redirect link red"
            to="auth/forgot-password"
          >
            Forgot Password?
          </Link>

          <Button className="Auth-form-btn" type="submit">
            Log In
          </Button>

          <p className="Auth-form-redirect">
            New User? <Link to="/auth/sign-up">Sign Up</Link>
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

export default connect(mapStateToProps)(Login);
