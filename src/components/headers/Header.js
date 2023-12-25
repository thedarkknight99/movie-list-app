import React from "react";
import "./Header.css";
import { movieTypes } from "../../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="headerName">MOVIEFIX</div>

      <div className="menuContainer">
        <div className="menu">
          {movieTypes.map((item) => (
            <span key={item.id} className="subHeader">
              {item.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
