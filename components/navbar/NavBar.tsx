import Link from "next/link";
import React from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";

const NavBar = () => {
  return (
    <div className="flex flex-row gap-12">
      <Link href="#home">home</Link>
      <Link href="#portfolio">portfolio</Link>
      <Link href="#blog">blog</Link>
      <Link href="#contact">contact</Link>
      <ThemeToggle />
    </div>
  );
};

export default NavBar;
