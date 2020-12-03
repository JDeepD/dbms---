import React from "react";
import bdrop from "../../assets/img/bdrop.png";
import Search from "../bloodbank/Search";
import SearchPage from './SearchPage'

import "../../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/home">
        <img src={bdrop} alt="bdroplogo" />
       
      </a>
      <a href="/donate">DONATE</a>
      {/* <Search /> */}
      <SearchPage/>
    </nav>
  );
};

export default Navbar;
