import React, { useState } from "react";
import "./Header.css";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import Navbar from "./Navbar";

function Header() {
  const [openMinu, setOpenMinu] = useState(false);

  return (
    <header className="header">
      <TopHeader setOpenMinu={setOpenMinu} />
      <MiddleHeader />
      <Navbar openMinu={openMinu} setOpenMinu={setOpenMinu} />
    </header>
  );
}

export default Header;
