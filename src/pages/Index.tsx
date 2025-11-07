import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import TechSpecs from "@/components/TechSpecs";
import WhatsIncluded from "@/components/WhatsIncluded";
import HowItWorks from "@/components/HowItWorks";
import PricingPlans from "@/components/PricingPlans";
import Differentials from "@/components/Differentials";
import FAQ from "@/components/FAQ";
import AboutMegabitz from "@/components/AboutMegabitz";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustSection />
      <TechSpecs />
      <WhatsIncluded />
      <HowItWorks />
      <PricingPlans />
      <Differentials />
      <FAQ />
      <AboutMegabitz />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
