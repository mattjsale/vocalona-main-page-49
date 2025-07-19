
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Vocalona
            </h3>
            <p className="text-gray-700 mb-4">
              AI Voice Agents That Work 24/7 to Support Your Business
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-black">Contact Us</h4>
            <div className="space-y-2">
              <a href="tel:07385763583" className="flex items-center justify-center md:justify-start text-gray-700 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                07385763583
              </a>
              <a href="mailto:info@vocalona.ai" className="flex items-center justify-center md:justify-start text-gray-700 hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                info@vocalona.ai
              </a>
              <div className="flex items-center justify-center md:justify-start text-gray-700">
                <MapPin className="w-4 h-4 mr-2" />
                Southampton, UK
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-black">Business Hours</h4>
            <div className="space-y-1 text-gray-700">
              <p>Tue-Thu-Sat-Sun: 9:00 AM - 5:00 PM</p>
              <p className="text-sm text-blue-600 font-semibold mt-2">
                AI agents work 24/7!
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-gray-600">
            © 2025 Vocalona. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
