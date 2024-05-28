import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}
const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="mt-28">
      <div className="w-32 flex flex-row items-center gap-1">
        <h3>{title}</h3>
        <div className="border-t-slate-300 border-t-2 w-full"></div>
      </div>
      <div className="ml-6 sm:ml-32 mt-4">{children}</div>
    </div>
  );
};

export default Section;
