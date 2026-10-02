import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import WorkflowDemo from "@/components/WorkflowDemo";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#090e17] text-slate-100 selection:bg-[#2dd4bf] selection:text-[#090e17]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <WorkflowDemo />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
