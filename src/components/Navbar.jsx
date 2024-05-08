import React, { useState } from "react";
import Logo from "../assets/ChimTechBg.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="nav">
        <img src={Logo} alt="" />
        </div>
        <div className="hiddenLinks">
          <Link className={"linksC"} to="/" > Home </Link>
          <Link className={"linksC"} to="/about"> About </Link>
          <Link className={"linksC"} to="/projects"> Projects </Link>
          <Link className={"linksC"} to="/contact"> Contact </Link>
        </div>
        
      </div>

      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/contact"> Contact </Link>

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
