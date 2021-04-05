import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink activeStyle={activeStyle} exact to="/" key={1}>
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/submitters" key={2}>
        Submitters
      </NavLink>
     
    </nav>
  );
}

export default Navigation;