import { auth } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  const signInViaGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="Login-container m-nav plr-1">
      <button onClick={signInViaGoogle}>Sign In With Google</button>
    </div>
  );
}

export default Login;
