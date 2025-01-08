import React,{useState} from 'react'
import './App.css'

const App = () => {
  const [signup, setSignUp] = useState(false)
  function ToggleSignUp(){
    setSignUp(!signup)
  }
  return (
    <div className='main'>
      <h1>Login Form</h1>
      <form action="">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        {signup === true && <> <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required /> <br /> </> }
        <input type="submit" ></input>
        <br />
      </form>
      <p>Don't Have Account? <span onClick={ToggleSignUp}>Sign Up</span></p>
    </div>
  )
}

export default App
