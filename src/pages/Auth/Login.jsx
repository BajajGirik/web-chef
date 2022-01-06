import { connect } from "react-redux";
import { IconButton, TextField, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginViaEmailPass } from "../../state/user/userActions";
import { LOGO } from "../../constants";
import "./auth.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  const [passVisible, setPassVisible] = useState(false);
  const emailRef = useRef();
  const passRef = useRef();

  const { dispatch } = props;

  return (
    <div className="p-nav mh-auto">
      <div className="Auth-container flex al-center">
        <img className="Auth-img" src={LOGO} alt="_Logo" />

        <form className="flex-c al-center">
          <h1 className="Auth-form-heading">Login</h1>
          <TextField
            className="Auth-form-input-field"
            label="Email"
            variant="outlined"
            inputRef={emailRef}
          />
          <TextField
            className="Auth-form-input-field"
            label="Password"
            variant="outlined"
            inputRef={passRef}
            type={passVisible ? "text" : "password"}
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
          <Button
            className="Auth-form-btn"
            // onClick={() => dispatch(loginViaEmailPass())}
          >
            Log In
          </Button>
          <p className="Auth-form-redirect">
            New User? <Link to="auth/sign-up">Sign Up</Link>{" "}
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

export default connect(mapStateToProps)(Login);
