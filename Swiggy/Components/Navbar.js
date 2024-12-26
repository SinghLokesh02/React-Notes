import { LOGO } from "../utils/constant";
const Navbar = () =>{
    return (
      <nav>
        <img src= {LOGO} alt="logo" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    )
  }

export default Navbar;