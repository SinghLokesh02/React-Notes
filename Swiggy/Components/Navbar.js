import { useState } from "react";
import { LOGO } from "../utils/constant";
import { Link } from "react-router";
const Navbar = () =>{

  let [data,setData] = useState("Login")

  let changeState = ()=>{
    let ans = (data === "Logout"?"Login":"Logout");
    setData(ans)
  }
    return (
      <nav>
        <img src= {LOGO} alt="logo" />
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
            </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
            </li>
          <button onClick={changeState} className="btn-login">{data} </button>

        </ul>
      </nav>
    )
  }

export default Navbar;