import About from "@/components/About";
import Banner from "@/components/Banner";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Button from "@/components/Button";
import ContactUs from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Button />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <ContactUs />
      <Footer />
    </main>
  );
}
