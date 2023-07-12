import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=' w-screen overflow-hidden bg-[url("/hero-image.png")] bg-cover p-40 relative flex flex-col gap-16 text-white'>
      <div className="absolute inset-0 bg-slate-900 opacity-[0.4] z-10"></div>

      {/* <div className="absolute w-full h-full bg-slate-800 bg-opacity-50 z-10"></div> */}
      <div className="z-20 max-w-4xl">
        <h1 className="font-bold text-5xl">
          Welcome to Chatter: A Haven for Text-Based Content
        </h1>
      </div>

      <div className="z-30">
        <p className="font-semibold text-3xl max-w-3xl z-30">
          Unleash the Power of Words, Connect with Like-minded Readers and
          Writers
        </p>
      </div>
      <Link href="" className="z-30">
        <div className="rounded-md bg-[#543EE0] z-30 px-5 py-2.5 text-sm font-medium text-white w-32 text-center">
          <p>Get Started</p>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
