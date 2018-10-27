import React from "react";
import "./NavBar.css";

const NavBar = props => (


<nav className="navbar">
<ul>
<li className="brand"><a href = "/">Clicky Game</a></li>
<li className="">Click an image to begin!</li>
<li>Score:{props.score}</li>
</ul>
</nav>

);

export default NavBar;


