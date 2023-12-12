import Image from "next/image";
const Skills = () => {
  return (
    <div className="mx-auto px-5 py-14 lg:py-28" id="skills">
      <h1 className="text-2xl lg:text-4xl font-bold text-center mb-2 border-b-4 mx-auto border-[#174074] w-2/5 md:w-1/5 sm:pb-5">
        My Skills
      </h1>
      <h1 className="lg:text-2xl opacity-70 text-center mb-6 lg:mb-12">
        Technologies I&apos;ve been working with recently
      </h1>
      <Image
        alt="skills"
        width="300"
        height="300"
        className="w-32 md:w-[150px] lg:w-[300px] mx-auto drop-shadow-2xl mb-5"
        type="image/svg+xml"
        src="https://skillicons.dev/icons?i=html,css,js"
      />
      <Image
        alt="skills"
        width="300"
        height="300"
        className="w-80 md:w-[400px] lg:w-[800px] mx-auto drop-shadow-2xl"
        type="image/svg+xml"
        src="https://skillicons.dev/icons?i=tailwind,bootstrap,firebase,mui,react,express,mongodb,next"
      />
    </div>
  );
};

export default Skills;
