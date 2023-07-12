import React from "react";
import Image from "next/image";
import Login_image from "../../public/unsplash_9pjBx5uVBlg.png";

const figma_login = () => {
  return (
    <div className="w-[1440px] h-256 relative bg-white">
      <Image
        alt="Welcome"
        src={Login_image}
        className="absolute inset-0 h-full w-full object-cover"
      />{" "}
      <div className="w-[622px] h-256 left-[0px] top-[0px] absolute bg-black bg-opacity-50" />
      <div className="p-[0px] left-[36px] top-[385px] absolute flex-col justify-center items-center gap-6 inline-flex">
        <div className="text-white text-[48px] font-bold leading-10">
          CHATTER
        </div>
        <div className="w-[550px] text-white text-[24px] font-medium leading-9">
          Unleash the Power of Words, Connect with Like-minded Readers and
          Writers
        </div>
      </div>
      <div className="p-[0px] left-[805px] top-[96px] absolute flex-col justify-start items-start gap-[76px] inline-flex">
        <div className="p-[0px] flex-col justify-center items-center gap-[76px] flex">
          <div className="p-[0px] flex-col justify-start items-start gap-[12px] flex">
            <div className="w-[440px] p-[0px] justify-start items-start gap-[280px] inline-flex">
              <div className="text-neutral-900 text-[16px] font-bold leading-normal">
                REGISTER
              </div>
              <div className="text-neutral-900 text-[16px] font-bold leading-normal">
                LOG IN
              </div>
            </div>
            <div className="w-[440px] h-[6px] relative">
              <div className="w-[220px] h-[6px] left-[220px] top-[0px] absolute bg-indigo-600" />
              <div className="w-[220px] h-[6px] left-[0px] top-[0px] absolute bg-stone-300" />
            </div>
          </div>
          <div className="text-black text-[32px] font-medium leading-10">
            Welcome back
          </div>
        </div>
      </div>
      <form className="p-[0px] left-[805px] top-[310px] absolute flex-col justify-start items-end gap-6 inline-flex">
        <div className="p-[0px] flex-col justify-start items-start gap-[12px] flex">
          <div className="text-neutral-700 text-[16px] font-normal leading-normal">
            Email address
          </div>
          <div className="w-[520px] h-14 px-4 py-[10px] bg-white rounded-lg shadow border border border border border-gray-300 justify-center items-center inline-flex">
            <div className="grow shrink basis-0 text-neutral-800 text-[16px] font-normal leading-normal">
              Johndoe@gmail.com
            </div>
          </div>
        </div>
        <div className="p-[0px] flex-col justify-start items-start gap-[12px] flex">
          <div className="text-neutral-700 text-[16px] font-normal leading-normal">
            Password
          </div>
          <div className="w-[520px] h-14 pl-4 pr-[12px] py-[10px] bg-white rounded-lg shadow border border border border border-gray-300 justify-center items-center inline-flex">
            <div className="grow shrink basis-0 h-6 p-[0px] justify-start items-start gap-[4px] flex">
              <div className="grow shrink basis-0 text-neutral-800 text-[16px] font-normal leading-normal">
                **********
              </div>
              <div className="w-6 h-6 relative">
                <div className="w-[4px] h-[4px] left-[10px] top-[10px] absolute rounded-full border border-neutral-800" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[520px] h-14 px-4 py-2 bg-indigo-600 rounded-lg justify-center items-center gap-2 inline-flex">
          <button className="text-white text-[18px] font-bold leading-relaxed">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default figma_login;
