import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Configurator } from "@/components/Configurator";
import { FullSystemOffer } from "@/components/FullSystemOffer";
import { WhiteLabel } from "@/components/WhiteLabel";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Configurator />
      <FullSystemOffer />
      <WhiteLabel />
      <Footer />
    </div>
  );
};

export default Index;
