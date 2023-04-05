import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Barlow } from "next/font/google";
import { navLinks } from "@/data";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const Navbar = () => {
  return (
    <nav
      role="navbar"
      className={`${barlow.className} flex absolute w-full justify-between z-10 items-center py-8 px-8`}
    >
      <div>
        <Image src="/logo.svg" alt="logo" height={95} width={95}></Image>
      </div>
      <ul className="flex text-White font-extralight text-sm gap-10">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.route}>
            <button className="hover:text-darkBlue py-2 px-4 hover:bg-sky-300 active:bg-White rounded-full">{link.name}
            </button>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
