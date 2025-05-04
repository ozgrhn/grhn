import React from "react";
import "./logo.css";
import { Link } from "@tanstack/react-router";

const Logo = () => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link
      className="logo"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      to="/"
    >
      {hovered ? "GURHAN OZTURK" : "GRHN"}
    </Link>
  );
};

export default Logo;
