import React from "react";
import Image from "next/image";
import Frame from "../../public/Frame 39.png";

const Write_section = () => {
  return (
    <div className="flex justify-center items-center p-20 gap-8 max-w-7xl ml-20">
      <div className="overflow-hidden">
        <Image src={Frame} alt="testimonial image" />
      </div>
      <div className="flex flex-col gap-6">
        <p className="font-semibold text-4xl">Write, read and connect with great minds on chatter</p>
        <p>
          Share people your great ideas, and also read write-ups based on your
          interests. connect with people of same interests and goals
        </p>
        <div className="rounded-md bg-[#543EE0] z-30 px-5 py-2.5 text-sm font-medium text-white w-32 text-center cursor-pointer">
          <p>Get started</p>
        </div>
      </div>
    </div>
  );
};

export default Write_section;
