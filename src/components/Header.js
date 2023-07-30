import { useState } from "react";
import { IMG_HEAD } from "../utils/constants";

const Header = () => {
        const [login, setLogin] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img src={IMG_HEAD} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button style={{cursor: "pointer", padding: "5px"}} className="login" onClick={()=> setLogin(!login)}>{login ? "Logout" : "Login"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
