import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [user,setUser] = useState({email: '', password: ''});

   
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', user);
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="form">
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
        <button type="submit" className="btn">Sign In</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default SignIn;
