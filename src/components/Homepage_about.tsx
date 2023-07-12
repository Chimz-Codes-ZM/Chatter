import React from "react";
import Image from "next/image";
import Conference from "../../public/conference.png";

const Homepage_about = () => {
  return (
    <div className="p-20 flex flex-col justify-between md:flex-row">
      <div className=" max-w-2xl flex flex-col gap-10">
        <h1 className="font-bold text-4xl">About Chatter</h1>
        <p className=" text-lg">
          Chatter is a multi-functional platform where authors and readers can
          have access to their own content. It aims to be a traditional
          bookworm’s heaven and a blog to get access to more text based content.
          Our vision is to foster an inclusive and vibrant community where
          diversity is celebrated. We encourage open-mindedness and respect for
          all individuals, regardless of their backgrounds or beliefs. By
          promoting dialogue and understanding, we strive
        </p>
      </div>
      <div>
        <Image src={Conference} alt="conference" objectFit="cover" />
      </div>
    </div>
  );
};

export default Homepage_about;
