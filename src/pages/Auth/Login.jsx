import { connect } from "react-redux";
import { IconButton, TextField, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginViaEmailPass } from "../../state/user/userActions";
import { LOGO } from "../../constants";
import "./auth.css";
import { useRef, useState } from "react";

function Login(props) {
  const [passVisible, setPassVisible] = useState(false);
  const emailRef = useRef();
  const passRef = useRef();

  const { dispatch } = props;

  return (
    <div className="p-nav mh-auto">
      <div className="Auth-container flex-c al-center">
        <img className="Auth-img" src={LOGO} alt="_Logo" />

        <form className="flex-c al-center">
          <h1>Login</h1>
          <TextField
            className="Auth-input-field"
            label="Email"
            variant="outlined"
            inputRef={emailRef}
          />
          <TextField
            className="Auth-input-field"
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

          <Button
            className="Auth-btn "
            // onClick={() => dispatch(loginViaEmailPass())}
          >
            Sign In
          </Button>
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
