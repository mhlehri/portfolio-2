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
        className={`lg:hidden ${
          open ? "fixed right-5 " : "block"
        } z-[10000] text-3xl cursor-pointer select-none`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-[#174074]"
            viewBox="0 0 24 24"
          >
            <path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z" />
          </svg>
        ) : (
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-[#174074]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m13 16.745c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm9-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-4-5c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75z"
              fillRule="nonzero"
            />
          </svg>
        )}
      </div>
      <div
        className={`${
          open
            ? "fixed overflow-y-hidden lg:hidden top-0 h-[100vh] delay-1000 duration-1000 ease-linear"
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
