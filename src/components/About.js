import Image from "next/image";
import me from "/public/assets/me45.jpg";
import Link from "next/link";
const About = () => {
  return (
    <div className=" bg-[#174074] text-white px-4 pb-32 pt-16 my-32" id="about">
      <h1 className="font-medium text-4xl text-center mb-12 border-b-4 w-1/5 pb-5 mx-auto">
        About me
      </h1>
      <div className="flex flex-row-reverse lg:gap-20 justify-center items-center max-w-screen-xl mx-auto">
        {" "}
        <div className="w-1/2">
          <p className="text-xl mb-8 opacity-80">
            Hi there, I'm Mahmud Hassan Lehri, a meticulous Front-End Developer
            specializing in React.js, Next.js, Node.js, Express.js, and MongoDB.
            My expertise lies in crafting pixel-perfect user interfaces that
            seamlessly merge creativity with functionality. From
            conceptualization to deployment, I excel at transforming ideas into
            captivating digital experiences. Let's collaborate to shape the
            future!
          </p>
          <div>
            <Link
              href="https://www.linkedin.com/in/mahmud-hassan-lehri"
              target="_blank"
            >
              <button className="items-center gap-3  text-2xl font-semibold px-12 py-3 rounded-lg hover:scale-90 duration-300 bg-[#fff]  text-[#174074]">
                LikedIn
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-lg p-3 text-center w-[320px]">
          <Image
            src={me}
            alt="me"
            width="300"
            height="300"
            className="rounded-lg w-[300px] h-[300px] object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
