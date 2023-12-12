import Link from "next/link";
const About = () => {
  return (
    <div
      className=" bg-[#174074]  text-white px-4 pb-16 pt-8 md:pb-32 md:pt-16 mt-16 md:mt-32 -z-50"
      id="about"
    >
      <h1 className="font-bold text-2xl lg:text-4xl text-center mb-12 border-b-4 w-2/5 md:w-1/5 pb-5 mx-auto">
        About me
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 z-40 justify-center items-start max-w-screen-xl mx-auto">
        <div className=" md:w-2/3 mx-auto">
          <p className="md:text-lg mb-8 opacity-90">
            Hi there, I&apos;m Mahmud Hassan Lehri, a meticulous Front-End
            Developer specializing in React.js, Next.js, Node.js, Express.js,
            and MongoDB. My expertise lies in crafting pixel-perfect user
            interfaces that seamlessly merge creativity with functionality. From
            conceptualization to deployment, I excel at transforming ideas into
            captivating digital experiences. Let&apos;s collaborate to shape the
            future!
          </p>
          <div>
            <Link
              href="https://www.linkedin.com/in/mahmud-hassan-lehri"
              target="_blank"
            >
              <button className="md:text-xl w-fit inline font-medium mx-auto lg:mx-0 px-6 py-3 rounded-lg hover:scale-90 duration-300 bg-[#fff]  text-[#174074]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 lg:w-6 inline lg:h-6 fill-[#174074]"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>{" "}
                LikedIn
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-2/3 sm:flex-row justify-between lg:flex-col gap-8 lg:w-1/3 mx-auto">
          <div>
            <h1 className="text-xl lg:text-2xl font-medium mb-2">Education</h1>
            <div className="opacity-90 mb-4">
              <p>
                <span className="font-medium">Institution:</span> Sristy Central
                School
              </p>
              <p>
                <span className="font-medium">Exam:</span> SSC (GPA 5 out of 5)
              </p>
              <p>
                <span className="font-medium">Group:</span> Science
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-xl lg:text-2xl mb-2 font-medium">Courses</h1>
            <div className="opacity-90 mb-2">
              <p>
                <span className="font-medium">Institution:</span> Programming
                Hero
              </p>
              <p>
                <span className="font-medium">Course:</span> Web development
              </p>
              <p>
                <span className="font-medium">Certificate:</span> on process
              </p>
            </div>
            <div className="opacity-90">
              <p>
                <span className="font-medium">Institution:</span> E-shikhon
              </p>
              <p>
                <span className="font-medium">Course:</span> Web development
              </p>
              <p>
                <span className="font-medium">Certificate:</span>{" "}
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1I8vKNRbm4Y3VK4M6zbKN4lUEFRnA08bT/view?usp=sharing"
                  className="underline font-bold"
                >
                  view
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
