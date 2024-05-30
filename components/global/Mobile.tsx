"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineX } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";

import { GiNinjaHead } from "react-icons/gi";
import { LiaBattleNet } from "react-icons/lia";
import { GrTechnology } from "react-icons/gr";
import { DiCodeigniter } from "react-icons/di";


export default function MobileMenu() {
  const [navShow, setNavShow] = useState(false);
  const data = [
    {
      title: "Home",
      href: "/",
      icon: HiHome,
    },
    {
      title: "About",
      href: "/about",
      icon: GiNinjaHead,
    },
    {
      title: "Projects",
      href: "/projects",
      icon: LiaBattleNet,
    },
    {
      title: "Contact Me",
      href: "/contact",
      icon: GrTechnology,
    },
  ];

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="md:hidden bg-primary-bg  border border-zinc-800  rounded-md p-2"
      >
        <RxHamburgerMenu className="text-xl" />
      </button>
      <div
        className={`md:hidden fixed left-0 top-0 z-10 h-full w-full transform duration-600ms ease-cubic-bezier(0.7,0,0,1) bg-zinc-900 ${
          navShow ? "translate-x-0 rounded-none" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mt-6 px-8">
          <Link href="/" onClick={onToggleNav} className="flex flex-row gap-x-4">
            <Image src="/logo-dark.png" width={35} height={35} alt="logo" />
            <div className="py-1">
            <h1 className="font-incognito font-semibold text-xl">Portfolio</h1>
            </div>
          </Link>

          <button
            aria-label="Toggle Menu"
            onClick={onToggleNav}
            className={`sm:hidden bg-primary-bg  border border-zinc-800  rounded-full p-2 duration-500 ${
              !navShow ? "-rotate-[360deg]" : null
            }`}
          >
            <HiOutlineX className="text-xl" />
          </button>
        </div>
        <nav className="flex flex-col mt-6">
          {data.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="flex items-center gap-x-2 font-incognito font-semibold text-lg shadow-line-dark p-6 group hover:text-cyan-600"
              onClick={onToggleNav}
            >
              <link.icon
                className="text-zinc-500 group-hover:text-cyan-600 duration-300 text-xl"
                aria-hidden="true"
              />
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
