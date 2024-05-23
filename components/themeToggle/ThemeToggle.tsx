"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { LuSunMedium, LuMoon } from "react-icons/lu";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-8 h-8 bg-slate-100 rounded-lg"></div>;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <LuSunMedium /> : <LuMoon />}
    </button>
  );
};

export default ThemeToggle;
