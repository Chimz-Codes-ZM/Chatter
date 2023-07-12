import React from "react";
import Image from "next/image";
import testimonial from "../../public/testimonial.png";

const Testimonial = () => {
  return (
    <div className="bg-[#FFEDCC] flex p-10 px-20 gap-8">
      <div className="rounded-full overflow-hidden">
        <Image src={testimonial} alt="testimonial image" />
      </div>
      <div className="flex flex-col gap-6">
        <p>
          "Chatter has become an integral part of my online experience. As a
          user of this incredible blogging platform, I have discovered a vibrant
          community of individuals who are passionate about sharing their ideas
          and engaging in thoughtful discussions.”
        </p>
        <p>
          <span className="font-semibold">Adebobola Muhydeen</span> , Software
          developer at Apple{" "}
        </p>
        <div className="rounded-md bg-[#543EE0] z-30 px-5 py-2.5 text-sm font-medium text-white w-32 text-center cursor-pointer">
          <p>Join Chatter</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
