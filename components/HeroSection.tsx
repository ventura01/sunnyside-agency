import Image from "next/image";
import React from "react";
import { Fraunces } from "next/font/google";
import { BsArrowDown } from "react-icons/bs";

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["700", "900"],
  });

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <header id="header" className="">
      <div>
        <Image
          src="/desktop/image-header.jpg"
          alt="header-img"
          width={600}
          height={600}
          className="md:block hidden w-full object-cover object-center"
        />
        <Image
          src="/mobile/image-header.jpg"
          alt="header-img"
          width={600}
          height={600}
          className="md:hidden block w-full object-cover object-center"
        />
      </div>
      <div className="flex justify-center">
        <h1 className={`${fraunces.className} text-lg md:text-4xl tracking-widest text-White top-40 absolute uppercase font-extrabold`}>We are creatives</h1>
        <BsArrowDown size={"3rem"} color="#fff" className="absolute top-52 md:top-[22rem]"/>
      </div>
    </header>
  );
};

export default HeroSection;
