import Link from "next/link";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="flex justify-between py-8 items-center max-w-screen-xl mx-auto">
      <h1 className="text-2xl lg:text-4xl font-bold">MH Lehri</h1>
      <div className="space-x-5 lg:text-xl">
        <Link href="#about" scroll>
          About
        </Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
