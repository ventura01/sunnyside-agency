"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Barlow } from "next/font/google";
import { navLinks } from "@/data";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav role="navbar" className={`${barlow.className} relative`}>
      <div className="flex absolute md:w-full md:justify-between z-10 items-center py-8 px-8">
        <Image src="/logo.svg" alt="logo" height={95} width={95}></Image>
        <div
          className={`md:text-White font-extralight text-sm md:gap-x-10 ${
            menuOpen
              ? "text-veryDarkGrayishBlue absolute top-20 left-20 py-10 px-16 gap-y-12 bg-white"
              : "hidden md:flex"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.route}
              onClick={() => setMenuOpen(false)}
            >
              <button
                className={` ${
                  menuOpen
                    ? "hover:bg-yellow hover:text-veryDarkDesaturatedBlue rounded-full py-2 px-3"
                    : "md:hover:text-darkBlue py-2 px-4 md:hover:bg-sky-300 md:active:bg-White rounded-full"
                }`}
              >
                {link.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className="relative w-full">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden right-8 top-8 absolute "
        >
          {menuOpen ? (
            <MdOutlineClose size={"1.25rem"} color="#fff" />
          ) : (
            <MdOutlineMenu size={"1.25rem"} color="#fff" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
