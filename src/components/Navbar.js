"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between py-8 items-center px-5 max-w-screen-xl mx-auto">
      <h1 className="text-2xl lg:text-4xl font-bold">MH Lehr;</h1>

      <div className="hidden lg:block space-x-5 lg:text-xl">
        <Link href="/#about">About</Link>
        <Link href="/#skills">Skills</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#contact">Contact</Link>
      </div>
      <div
        className="lg:hidden block z-[10000] text-3xl cursor-pointer select-none"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "✖️" : "🟰"}
      </div>
      <div
        className={`${
          open
            ? "fixed lg:hidden top-0 h-[100vh] delay-1000 duration-1000 ease-linear"
            : "hidden h-0 -top-96"
        }   right-0 bottom-0 left-0 w-screen bg-[#eafaff] flex flex-col justify-center text-3xl gap-6 lg:text-xl items-center z-[100]`}
      >
        <Link
          href="/#about"
          onClick={() => {
            setOpen(!open);
          }}
        >
          About
        </Link>
        <Link
          href="/#skills"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Skills
        </Link>
        <Link
          href="/#projects"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
