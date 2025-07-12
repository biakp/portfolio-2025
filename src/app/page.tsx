import { Navigation } from "@/components/ui/Navigation";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <ScrollToTop />
      
      <HeroSection />
      <SectionDivider variant="circuit" />
      
      <AboutSection />
      <SectionDivider variant="neural" />
      
      <ProjectsSection />
      <SectionDivider variant="data-stream" />
      
      <ContactSection />
      <SectionDivider variant="quantum" />
      
      <Footer />
    </main>
  );
}
