import HeroSection from "@/components/pages/HeroSection";
import TickerBanner from "@/components/pages/TickerBanner";
import StatsBar from "@/components/pages/StatsBar";
import Skills from "@/components/pages/Skills";
import Project from "@/components/pages/projects";
import BlogSection from "@/components/pages/BlogSection";
import InteractiveTerminal from "@/components/pages/InteractiveTerminal";
import ContactForm from "@/components/pages/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TickerBanner />
      <StatsBar />
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
      <InteractiveTerminal />
      <div id="contact">
        <ContactForm />
      </div>
    </>
  );
}
