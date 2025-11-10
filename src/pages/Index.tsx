import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechSpecs from "@/components/TechSpecs";
import WhatsIncluded from "@/components/WhatsIncluded";
import HowItWorks from "@/components/HowItWorks";
import Differentials from "@/components/Differentials";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import AboutMegabitz from "@/components/AboutMegabitz";
import Stats from "@/components/Stats";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutMegabitz />
      <TechSpecs />
      <Stats />
      <Differentials />
      <WhatsIncluded />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
