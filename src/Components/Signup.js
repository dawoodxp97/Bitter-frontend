import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Styles/Signup.css";
import TwitterIcon from "@material-ui/icons/Twitter";
function Signup() {
  const History = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User Created
        if (userCredential) {
          console.log("This is User Credential>>>", userCredential);
          alert(
            "Successfully Created your Bitter account. Enjoy your Bitter App"
          );
          History.push("/homepage");
        }
      })
      .then(() => {
        const currUser = auth.currentUser;
        currUser.updateProfile({
          displayName: name,
        });
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  };
  return (
    <div className="signup">
      <div className="logo">
        <TwitterIcon />
      </div>
      <div className="form_grp">
        <form className="s_form">
          <h4>Username</h4>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form_input"
          />
          <h4>E-mail</h4>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form_input"
          />

          <h4>Password</h4>
          <input
            type="password"
            className="form_input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signUp} className="login_signupButton">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
