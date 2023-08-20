import { useState } from "react";
import { IMG_HEAD } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
        const [login, setLogin] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img src={IMG_HEAD} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button style={{cursor: "pointer", padding: "5px"}} className="login" onClick={()=> setLogin(!login)}>{login ? "Logout" : "Login"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
