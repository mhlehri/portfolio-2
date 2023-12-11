import About from "@/components/About";
import Banner from "../components/Banner";
import Skills from "./../components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Banner />
      <Skills />
      <About />
      <Projects />
    </main>
  );
}
