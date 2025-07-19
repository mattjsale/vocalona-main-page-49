
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, Users, Headphones, MessageSquare, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: CalendarCheck,
      title: "Appointment Booking",
      description: "Seamlessly schedule appointments with intelligent calendar integration. Your AI agent handles availability checks, booking confirmations, and sends reminders automatically.",
      features: ["Calendar integration", "Automatic reminders", "Rescheduling support", "Time zone handling"]
    },
    {
      icon: Users,
      title: "Lead Qualification",
      description: "Intelligently qualify prospects by asking the right questions and scoring leads based on your criteria. Never miss a potential customer again.",
      features: ["Smart questioning", "Lead scoring", "CRM integration", "Follow-up automation"]
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Provide instant, 24/7 customer support that resolves issues quickly and escalates complex problems to human agents when needed.",
      features: ["Instant responses", "Issue resolution", "Escalation protocols", "Multi-language support"]
    },
    {
      icon: MessageSquare,
      title: "FAQ Automation",
      description: "Answer frequently asked questions instantly with accurate, consistent responses that improve customer satisfaction and reduce support load.",
      features: ["Knowledge base integration", "Consistent answers", "Learning capabilities", "Analytics tracking"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our AI Voice Agents Can Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful capabilities that work around the clock to grow your business and delight your customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
