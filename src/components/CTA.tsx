
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar } from "lucide-react";

const CTA = () => {
  const openCalendly = () => {
    // Replace with your actual Calendly link
    window.open("https://calendly.com/your-calendly-link", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Book a free discovery call and see how AI voice agents can revolutionize your customer experience
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">What You'll Get:</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Free Consultation</h4>
                <p className="text-sm text-gray-300">30-minute strategy session</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Custom Demo</h4>
                <p className="text-sm text-gray-300">See AI agents in action for your industry</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">ROI Analysis</h4>
                <p className="text-sm text-gray-300">Calculate your potential savings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={openCalendly}
            size="lg" 
            className="bg-gradient-to-br from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Schedule Discovery Call
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm"
          >
            <Phone className="mr-2 w-5 h-5" />
            Call Now
          </Button>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          No obligation • Free consultation • Quick setup
        </p>
      </div>
    </section>
  );
};

export default CTA;
