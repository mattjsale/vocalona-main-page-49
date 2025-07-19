
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToCalendly = () => {
    const calendarSection = document.querySelector('.google-calendar-widget');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Stop Letting Calls Slip Through the Cracks
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 font-semibold mb-6">
          AI Voice Agents That Handle Your Customers—Even While You Sleep
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
          Vocalona builds custom AI Voice Agents for small and medium businesses. We answer your calls, qualify leads, and book appointments—24/7. No missed calls. No wasted time. Just more conversions, happier customers, and a team that can finally breathe.
        </p>
        
        <Button 
          onClick={scrollToCalendly}
          size="lg" 
          className="bg-gradient-to-br from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover-scale"
        >
          Get Your AI Agent
        </Button>
      </div>
    </section>
  );
};

export default Hero;
