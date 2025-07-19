import { Calendar, Users, MessageSquare, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
const HowItWorks = () => {
  const scrollToCalendly = () => {
    const calendarSection = document.querySelector('.google-calendar-widget');
    if (calendarSection) {
      calendarSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const capabilities = [{
    icon: Calendar,
    title: "Appointment Booking",
    benefit: "Streamlines scheduling to reduce no-shows and free up staff time.",
    description: "We configure the agent to handle your booking process efficiently, so your clients' customers experience seamless scheduling without manual intervention."
  }, {
    icon: Users,
    title: "Lead Qualification",
    benefit: "Filters prospects automatically so your sales team focuses on hot leads.",
    description: "This ensures your client's sales team spends time only on high-potential leads, improving conversion rates and saving effort."
  }, {
    icon: MessageSquare,
    title: "FAQs",
    benefit: "Delivers instant, consistent answers 24/7 to improve customer satisfaction.",
    description: "The agent provides immediate responses to common questions, allowing your client's customers to get answers 10x quicker without waiting on hold."
  }, {
    icon: Headphones,
    title: "Customer Support",
    benefit: "Handles routine inquiries and issues efficiently, reducing call volume.",
    description: "By automating basic support tasks, your client's team can focus on complex problems while customers receive timely assistance around the clock."
  }];
  return <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Our AI Voice Agents Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple setup, powerful results. Here's what your AI agent can do for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center hover-scale group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <capability.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{capability.title}</h3>
              <div className="text-sm font-semibold text-green-700 bg-green-50 rounded-full px-3 py-1 mb-4 inline-block">
                {capability.benefit}
              </div>
              <p className="text-gray-600 leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToCalendly}
            size="lg" 
            className="bg-gradient-to-br from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white px-4 py-4 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-normal text-center leading-tight max-w-full hover-scale"
          >
            Implement your custom agent today
          </Button>
        </div>
      </div>
    </section>;
};
export default HowItWorks;