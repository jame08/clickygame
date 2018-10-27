import React from "react";
import "./NavBar.css";

const NavBar = props => (


<nav class="navbar">
<ul>
<li class="brand"><a href = "/">Clicky Game</a></li>
<li class="">Click an image to begin!</li>
<li>Score:{props.score}</li>
</ul>
</nav>

);

export default NavBar;


