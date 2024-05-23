import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="flex flex-row items-center gap-5">
      <div className="w-20 lg:w-32 rounded-lg bg-slate-500 overflow-hidden">
        <Image
          src="/avatar.png"
          alt="A photo of Nuwan Karunarathna"
          width={128}
          height={128}
        />
      </div>
      <h1 className="text-xl lg:text-4xl font-medium">
        Nuwan <br />
        Karunarathna
      </h1>
    </div>
  );
};

export default Avatar;
