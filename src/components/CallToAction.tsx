
import { Calendar, Clock, Users } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Book a free discovery call to see how AI voice agents can revolutionize your customer experience and boost your revenue
        </p>
        
        {/* Google Calendar Integration Box */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-pink-500 rounded-lg flex items-center justify-center mr-3">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Schedule Your Free Call</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-pink-500 rounded-lg flex items-center justify-center mr-2">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-600">45 Minutes</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-pink-500 rounded-lg flex items-center justify-center mr-2">
                <Users className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-600">1-on-1 Consultation</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-pink-500 rounded-lg flex items-center justify-center mr-2">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-600">Choose Your Time</span>
            </div>
          </div>
          
          {/* Google Calendar Embed */}
          <div className="google-calendar-widget" style={{ minWidth: '320px', height: '600px' }}>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1oISWVlGRLDsISMwa-yO_TUO9Rj_eVVQ3cMqmqQNOmEeHV4u8n6ORBL3C7JD8MdJ-Igtj2covx?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              title="Schedule a meeting"
              className="rounded-lg"
            />
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            No commitment required • Get personalized recommendations • See live demo
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
