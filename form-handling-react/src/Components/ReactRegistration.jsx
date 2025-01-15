import React from "react";
import { useState } from "react";
const ReactRegistration = () => {

    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        phone:""
    })
   const [errorName,setErrorName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if(user.name.length <3 || user.name.length > 20){
        setErrorName("*Name should be between 3 to 20 characters")
    }
    
  };
  return (
    <>
      <h1>React Registration Form </h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
          
            value={user.name}
            placeholder="Enter Name"
            onChange={(e) => setUser({...user,name:e.target.value})}
          />
          <p className="error">{errorName}</p>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter Email"
            value={user.email}
            onChange={(e) => setUser({...user,email:e.target.value})}
             
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            autoComplete="off"
            placeholder="Enter Password"
            value={user.password}
            onChange={(e) => setUser({...user,password:e.target.value})}
             
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Phone : </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            required
            autoComplete="off"
            placeholder="Enter Phone"
            value={user.phone}
            onChange={(e) => setUser({...user,phone:e.target.value})}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default ReactRegistration;
