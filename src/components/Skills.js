import Image from "next/image";
import Link from "next/link";

const Skills = () => {
  return (
    <div className="mx-auto px-5">
      <h1 className="text-4xl font-bold text-center mb-2">My Tech Stack</h1>
      <h1 className="text-4xl opacity-70 text-center mb-12">
        Technologies I've been working with recently
      </h1>
      <Image
        alt="skills"
        width="300"
        height="300"
        className="lg:w-[300px] mx-auto drop-shadow-2xl mb-5"
        type="image/svg+xml"
        src="https://skillicons.dev/icons?i=html,css,js"
      />
      <Image
        alt="skills"
        width="300"
        height="300"
        className="lg:w-[800px] mx-auto drop-shadow-2xl"
        type="image/svg+xml"
        src="https://skillicons.dev/icons?i=tailwind,bootstrap,firebase,mui,react,express,mongodb,next"
      />
    </div>
  );
};

export default Skills;
