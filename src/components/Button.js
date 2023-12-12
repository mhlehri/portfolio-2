"use client";

import { useEffect, useState } from "react";

const Button = () => {
  const [show, setShow] = useState(false);
  const handler = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) setShow(true);
      else {
        setShow(false);
      }
    });
  }, []);

  return (
    <button
      onClick={() => handler()}
      className={`items-center ${
        show ? "block" : "hidden"
      } gap-3 fixed bottom-5 z-50 right-5  text-2xl font-semibold px-2 lg:px-6 drop-shadow-xl py-1 lg:py-3 rounded-lg hover:scale-90 duration-300 bg-[#fff]  text-[#174074]`}
    >
      &#10138;
    </button>
  );
};

export default Button;
