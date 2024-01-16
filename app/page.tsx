import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDiv from "@/components/sectionDiv";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDiv />
      <About />
      <SectionDiv />
      <Projects />
      <SectionDiv />
      <Skills />
      <SectionDiv />
      <Experience />
      <SectionDiv />
      <Contact />
    </main>
  );
}
