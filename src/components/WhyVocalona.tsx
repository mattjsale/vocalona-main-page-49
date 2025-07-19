
import { Clock, Zap, PoundSterling, TrendingUp } from "lucide-react";

const WhyVocalona = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Never Miss a Call",
      description: "24/7 availability ensures every opportunity is answered—even outside hours.",
      metric: "100% call coverage"
    },
    {
      icon: Zap,
      title: "Reduce Response Time by 95%", 
      description: "Instant responses mean happier customers and 40% higher conversion rates.",
      metric: "< 2 second response"
    },
    {
      icon: PoundSterling,
      title: "Reduce Overhead",
      description: "No need to scale a team just to answer phones. We do it better—and cheaper.",
      metric: "Save £££"
    },
    {
      icon: TrendingUp,
      title: "Boost Conversions",
      description: "Scripted, branded voice agents that keep your customer experience consistent and professional.",
      metric: "Increase Bookings"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Vocalona? Because Your Phone Shouldn't Be a Bottleneck
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring AI that actually works—and we'll show up in person if needed.
          </p>
        </div>

        <div id="benefits" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group hover-scale">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 mb-4">
                <span className="text-2xl font-bold text-green-700">{benefit.metric}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVocalona;
