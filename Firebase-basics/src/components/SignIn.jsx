import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
const SignIn = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User signed in:", user);
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error creating user:", errorCode, errorMessage);
      });
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("User signed in:", user);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error("Error creating user:", errorCode, errorMessage);
      });
  }
  return (
    <div className="container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            autoComplete="true"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            autoComplete="true"
            required
          />
        </div>
        <button type="submit" className="btn">
          Sign In
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      {/* Sign In with Google Functionaly */}
      <button className="google" onClick={handleGoogleSignIn}>
        <img
          src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
          alt=""
          className="google-logo"
        />
        Sign In with google
      </button>
    </div>
  );
};

export default SignIn;
