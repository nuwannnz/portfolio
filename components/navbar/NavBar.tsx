"use client";

import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hidden md:flex lg:flex lg:visible flex-row gap-12">
        <Link href="#home">home</Link>
        <Link href="#portfolio">portfolio</Link>
        <Link href="#blog">blog</Link>
        <Link href="#contact">contact</Link>
        <ThemeToggle />
      </div>

      <div className="flex flex-row md:hidden lg:hidden relative gap-2">
        <ThemeToggle size={24} />
        <button className="w-9 h-9 " onClick={toggleMenu}>
          {isOpen ? <CgClose size={32} /> : <CgMenuRightAlt size={32} />}
        </button>

        {isOpen && (
          <div className="flex flex-col absolute top-12 right-0 bg-slate-100 p-2 dark:bg-slate-700 rounded-lg gap-3 shadow-sm">
            <Link href="#home">home</Link>
            <Link href="#portfolio">portfolio</Link>
            <Link href="#blog">blog</Link>
            <Link href="#contact">contact</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
