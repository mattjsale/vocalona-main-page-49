import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
const Pricing = () => {
  const scrollToCalendly = () => {
    const calendarSection = document.querySelector('.google-calendar-widget');
    if (calendarSection) {
      calendarSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="pricing" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Straightforward Pricing That Pays for Itself
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden charges. Just reliable results that save you time and boost your profits.
          </p>
          
          {/* Pricing transparency highlight */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6 max-w-2xl mx-auto">
            <p className="text-green-800 font-semibold">
              ✅ All-inclusive pricing • No per-call charges • No contracts
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Complete AI Voice Solution Tailored to Your Needs
              </h3>
            </div>

            <div className="space-y-8 mb-8">
              {/* Setup & Custom Training */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Setup & Custom Training
                </h4>
                <div className="text-2xl font-bold text-gray-900 mb-2">£500</div>
                <div className="text-gray-600">(£250 upfront, £250 on delivery)</div>
              </div>

              {/* Monthly Maintenance */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Monthly Maintenance
                </h4>
                <div className="text-2xl font-bold text-gray-900 mb-6">£150</div>
                
                <div className="space-y-5 text-left max-w-3xl mx-auto">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-base font-semibold text-gray-900">Custom Voice Agent Training - </span>
                      <span className="text-sm text-gray-600">Your agent is trained specifically for your business scripted around your services, tone, and goals to ensure every customer interaction feels personal and aligned with your brand.</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-base font-semibold text-gray-900">24/7 Call Handling - </span>
                      <span className="text-sm text-gray-600">Never miss a call again. Your AI agent is always available to handle inquiries, take bookings, and provide support. It even works outside of business hours to help your business run while you sleep</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-base font-semibold text-gray-900">Integrations Relevant to Chosen Services - </span>
                      <span className="text-sm text-gray-600">Whether it's your calendar, CRM, or booking system, we connect your agent to the tools you already use to create a seamless experience for you and your customers.</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-base font-semibold text-gray-900">Ongoing Optimization - </span>
                      <span className="text-sm text-gray-600">We don't just set it and forget it. Your voice agent is monitored and refined over time to improve performance, adapt to changes, and keep delivering consistent results. We work to help make it an efficient part of your business</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button onClick={scrollToCalendly} size="lg" className="bg-gradient-to-br from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white py-4 text-lg font-semibold rounded-lg px-[19px] hover-scale">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Pricing;