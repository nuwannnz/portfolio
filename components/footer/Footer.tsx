import React, { useMemo } from "react";

const Footer = () => {
  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);
  return (
    <div className="w-full fixed bottom-0 right-0 left-0 flex flex-row justify-center p-4 border-t-2 border-slate-200">
      <span className="text-xs text-slate-500">
        &copy; {year} Nuwan Karunarathna. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
