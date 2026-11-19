import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { CredentialsSection } from "./components/CredentialsSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { WorkSection } from "./components/WorkSection";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f4f0e8] text-[#171714]">
      <Header />

      <main id="top">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <CredentialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
