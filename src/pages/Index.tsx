import Navbar from "@/components/plrvault/Navbar";
import HeroSection from "@/components/plrvault/HeroSection";
import TrustBar from "@/components/plrvault/TrustBar";
import AboutSection from "@/components/plrvault/AboutSection";
import PluginsAndSteps from "@/components/plrvault/PluginsAndSteps";
import GrowthSections from "@/components/plrvault/GrowthSections";
import ConversionSections from "@/components/plrvault/ConversionSections";
import VaultFooter from "@/components/plrvault/VaultFooter";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <PluginsAndSteps />
      <GrowthSections />
      <ConversionSections />
      <VaultFooter />
    </main>
  );
};

export default Index;
