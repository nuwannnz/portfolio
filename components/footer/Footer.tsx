import React, { useMemo } from "react";

const Footer = () => {
  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);
  return (
    <div className="w-full flex flex-row justify-center self-end p-4 pb-0 mt-9 border-t-2 border-slate-200 dark:border-slate-600 ">
      <span className="text-xs text-slate-500">
        &copy; {year} Nuwan Karunarathna. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
