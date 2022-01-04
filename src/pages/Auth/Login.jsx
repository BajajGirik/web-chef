import { connect } from "react-redux";
import { signInViaGoogle } from "../../state/user/userActions";
import { LOGO } from "../../constants";
import GoogleIcon from "@mui/icons-material/Google";
import "./auth.css";

function Login(props) {
  const { dispatch } = props;

  return (
    <div className="m-nav plr-1 flex-c al-center">
      <img className="Login-img" src={LOGO} alt="_Logo" />

      <button
        className="Login-btn flex al-center"
        onClick={() => dispatch(signInViaGoogle())}
      >
        <GoogleIcon className="icon bg-google" />
        &nbsp; Sign In With Google
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state,
  };
}

export default connect(mapStateToProps)(Login);
