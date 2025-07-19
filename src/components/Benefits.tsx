
import { CheckCircle, TrendingUp, DollarSign, Clock, Users, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a call or opportunity. Your AI agents work around the clock, handling inquiries even when your team is asleep."
    },
    {
      icon: DollarSign,
      title: "Reduce Costs",
      description: "Significantly lower your operational costs while improving service quality. One AI agent can handle the work of multiple employees."
    },
    {
      icon: TrendingUp,
      title: "Scale Instantly",
      description: "Handle unlimited simultaneous conversations without hiring additional staff. Scale your business without scaling your headcount."
    },
    {
      icon: Users,
      title: "Improve Customer Experience",
      description: "Provide instant, consistent, and accurate responses that delight customers and build lasting relationships."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant response times mean happier customers and higher conversion rates. No more waiting on hold or delayed callbacks."
    },
    {
      icon: CheckCircle,
      title: "100% Reliable",
      description: "AI agents never have bad days, never call in sick, and never forget important information. Consistent performance, every time."
    }
  ];

  const stats = [
    { number: "500%", label: "Increase in response speed" },
    { number: "90%", label: "Reduction in support costs" },
    { number: "24/7", label: "Hours of availability" },
    { number: "99.9%", label: "Uptime guarantee" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Vocalona Advantage
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their customer experience with AI voice agents
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-10 h-10 text-white" />
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

export default Benefits;
