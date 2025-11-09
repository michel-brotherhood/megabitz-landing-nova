import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/40" />
      
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
        {/* Main Content */}
        <div className="max-w-4xl space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-wider">
            <span className="block text-white">TECHNOLOGY</span>
            <span className="block text-white">INNOVATION</span>
          </h1>
          
          <div className="w-full max-w-2xl mx-auto">
            <div className="h-px bg-white/50 mb-8" />
            <p className="text-lg text-white/90 leading-relaxed px-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
            </p>
          </div>
          
          <div className="pt-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-background px-12 py-6 text-lg font-semibold"
            >
              MORE INFO
            </Button>
          </div>
        </div>
        
        {/* Social Media Icons - Bottom Right */}
        <div className="absolute bottom-8 right-8 flex gap-4">
          <a href="https://www.facebook.com/megabitztecnologia" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-background transition-all duration-300">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-background transition-all duration-300">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/megabitztecnologia/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-background transition-all duration-300">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          <button className="w-3 h-3 rounded-full border-2 border-white bg-transparent hover:bg-white transition-all duration-300" />
          <button className="w-3 h-3 rounded-full border-2 border-white bg-white" />
          <button className="w-3 h-3 rounded-full border-2 border-white bg-transparent hover:bg-white transition-all duration-300" />
        </div>
        
        {/* Footer Credit */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/70 text-sm">
          designed by freepik
        </div>
      </div>
    </section>
  );
};

export default Hero;
