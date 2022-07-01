import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles ={
    display: "inline-block",
    width: "80px",
    padding: "12px",
    margin: "0 8px 8px",
    background: "crimson",
    textDecoration: "none",
    color: "gold",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    borderRadius: "0.25rem",

}

function NavBar(){
    return (
    <div>
      <NavLink to ="/" exact style={linkStyles} activeStyle={{background: "firebrick",}} >Home </NavLink>
      <NavLink to ="/orderfood" exact style={linkStyles} activeStyle={{background: "firebrick",}} >OrderFood</NavLink>
      <NavLink to ="/cart" exact style={linkStyles} activeStyle={{background: "firebrick",}} > Cart </NavLink>

    </div>
    )


}

export default NavBar