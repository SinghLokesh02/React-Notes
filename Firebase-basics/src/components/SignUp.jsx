import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { validateEmailAndPassword } from '../firebase/validate';
const SignUp = () => {
    const [user,setUser] = useState({email: '', password: '',name: ''});
    const [error, setError] = useState(null);

   
  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = validateEmailAndPassword(user.email,user.password,user.name);
    if(validate != null) {
      setError(validate);
      return;
    }
    createUserWithEmailAndPassword(auth,user.email,user.password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("User Created Successfully");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            autoComplete='true'
            value={user.name}
            onChange={(e) => setUser({...user,name: e.target.value})}
            required
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            autoComplete='true'
            value={user.email}
            onChange={(e) => setUser({...user,email: e.target.value})}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({...user,password: e.target.value})}
            autoComplete='true'
            required
          />
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default SignUp;
