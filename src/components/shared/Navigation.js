import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink activeStyle={activeStyle} exact to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/submitters">
        Submitters
      </NavLink>
     
    </nav>
  );
}

export default Navigation;