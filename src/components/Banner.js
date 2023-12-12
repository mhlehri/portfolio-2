import Image from "next/image";
import me from "/public/assets/me45.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse gap-5 md:flex-row justify-between items-center md:h-[700px] max-w-screen-xl mx-auto px-5 ">
      <div className="md:text-left text-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl mb-2 md:mb-4">
          Hi{" "}
          <Image
            src="https://gifdb.com/images/high/cute-wave-emoji-hand-59s88kk0zj3xho40.webp"
            alt="hi emoji"
            width="50"
            height="50"
            className="inline"
          />
          , I&apos;m a<br />
          <span className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Frontend Developer
          </span>
        </h1>
        <p className="md:text-xl lg:text-2xl mb-6 opacity-70">
          I&apos;m Lehri, a dedicated and passionate <br /> frontend developer.
        </p>
        <Link
          alt="lehri"
          target="_blank"
          rel="noopener noreferrer"
          href="/MH Lehri.pdf"
          locale={false}
          download="Lehri's Resume"
        >
          <button className="md:text-xl lg:text-2xl space-x-2 font-semibold px-6 py-3 rounded-lg hover:scale-95 duration-300 bg-[#174074]  text-[#ffffff]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 lg:w-6 lg:h-6 fill-white inline"
              viewBox="0 0 24 24"
            >
              <path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z" />
            </svg>
            <span>Resume</span>
          </button>
        </Link>
      </div>
      <div className="bg-[#174074] hover:scale-105 duration-300 rounded-lg md:rounded-full p-3 text-center w-[170px] md:w-[320px]">
        <Image
          src={me}
          alt="me"
          width="300"
          height="300"
          className="rounded-lg md:rounded-full w-[150px] h-[150px] md:w-[300px] md:h-[300px] object-cover object-top z-50"
        />
      </div>
    </div>
  );
};

export default Banner;
