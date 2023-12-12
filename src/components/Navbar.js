"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between py-8 items-center px-5 max-w-screen-xl mx-auto">
      <h1 className="text-2xl lg:text-4xl font-bold">MH Lehr;</h1>
      {open == false ? (
        <div className="space-x-5 lg:text-xl">
          <Link href="/#about">About</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      ) : (
        <div className="lg:hidden flex flex-col justify-center lg:text-xl">
          <Link href="/#about">About</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
