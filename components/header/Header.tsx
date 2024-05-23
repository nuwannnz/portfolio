import Link from "next/link";
import React from "react";
import Avatar from "../avatar/Avatar";
import NavBar from "../navbar/NavBar";

const Header = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center">
      {/* avatar */}
      <Avatar />

      {/* nav */}
      <NavBar />
    </div>
  );
};

export default Header;
