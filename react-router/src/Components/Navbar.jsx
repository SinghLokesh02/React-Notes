// Navigation Component
import { NavLink } from "react-router-dom";
const Navbar = () => (
  <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4">
    <ul className="flex justify-center space-x-8">
      <li>
        <NavLink to="/" className={(e)=>(e.isActive?"bg-red-600 p-3":"")}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({isActive})=>(isActive?"bg-red-600 p-3":"")}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className={(e)=>(e.isActive?"bg-red-600 p-3":"")}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={(e)=>(e.isActive?"bg-red-600 p-3":"")}>
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;