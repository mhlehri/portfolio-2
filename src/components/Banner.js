import Image from "next/image";
import me from "/public/assets/me45.jpg";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="flex justify-between items-center lg:h-[700px] max-w-screen-xl mx-auto px-5">
      <div>
        <h1 className="text-4xl mb-4">
          Hi👋, I'm a<br />
          <span className="text-5xl font-bold">Frontend Developer</span>
        </h1>
        <p className="text-2xl mb-6 opacity-70">
          I'm Lehri, a dedicated and passionate <br /> frontend developer.
        </p>
        <Link
          alt="lehri"
          target="_blank"
          rel="noopener noreferrer"
          href="/MH Lehri.pdf"
          locale={false}
          download="lehri"
        >
          <button className="text-2xl font-semibold px-12 py-3 rounded-lg hover:scale-95 duration-300 bg-[#174074]  text-[#ffffff]">
            Resume
          </button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
