import React from "react";
import { navLinks } from "@/data";
import { Barlow } from "next/font/google";
import { Fraunces } from "next/font/google";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import {
  BsFacebook,
  BsPinterest,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Logo from "./Logo";

type Props = {};
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["600"],
});
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
});
const Footer = (props: Props) => {
  return (
    <footer
      id="footer"
      className="bg-darkModerateCyan flex flex-col items-center gap-10 p-20"
    >
      {/* <Image src="/logo.svg" alt="logo" height={95} width={95}></Image> */}
      <Logo fill="hsl(167, 40%, 24%)"/>
      <ul className="flex text-darkDesaturatedCyan font-extralight text-sm gap-4 md:gap-10">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.route} className="hover:text-White">
            <li role="navbar-item" className="font-semibold">
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex gap-6">
        <BsFacebook color="hsl(167,40%,24%)" className="hover:fill-White cursor-pointer "/>
        <BsInstagram color="hsl(167,40%,24%)" className="hover:fill-White cursor-pointer "/>
        <BsTwitter color="hsl(167,40%,24%)" className="hover:fill-White cursor-pointer "/>
        <BsPinterest color="hsl(167,40%,24%)" className="hover:fill-White cursor-pointer "/>
      </div>
    </footer>
  );
};

export default Footer;
