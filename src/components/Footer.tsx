import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    "About Us",
    "Services",
    "Products",
    "Gallery",
    "Contact"
  ];

  const services = [
    "Custom Printing",
    "Bulk Orders",
    "Laser Engraving",
    "Gift Solutions",
    "Delivery"
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 md:w-64 md:h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-20 w-40 h-40 md:w-64 md:h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-64 md:h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 px-4 py-8 md:py-12 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          
          {/* Company Info */}
          <div className="space-y-3 md:space-y-4">
            {/* Logo */}
            <div className="mb-3">
              <img 
                src={logo}
                alt="CPZ Creative Print Zone" 
                className="h-16 md:h-20 w-auto"
              />
            </div>
            <p className="text-xs md:text-sm leading-relaxed text-gray-400">
              Creating memorable moments with premium customized gifts and printing solutions across India.
            </p>
            {/* Social Media */}
            <div className="flex gap-2 pt-2">
              <a href="https://www.facebook.com/share/1Bu5qRaVxn/" className="w-8 h-8 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="https://www.instagram.com/creativeprintzone1?igsh=MXZ6Zjk5NmtodjN0Zg==" className="w-8 h-8 bg-gray-800 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          {/* Quick Links */}
<div className="space-y-3 md:space-y-4">
  <h4 className="text-white font-bold text-sm md:text-base mb-3 md:mb-4">
    Quick Links
  </h4>

  <ul className="space-y-1.5 md:space-y-2">
    {[
      { name: "Home", id: "home" },
      { name: "About", id: "about" },
      { name: "Products", id: "products" },
      { name: "Contact", id: "contact" }
    ].map((item, index) => (
      <li key={index}>
        <button
          onClick={() => {
            const el = document.getElementById(item.id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-xs md:text-sm text-left text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group w-full"
        >
          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            {item.name}
          </span>
        </button>
      </li>
    ))}
  </ul>
</div>


          {/* Services */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-white font-bold text-sm md:text-base mb-3 md:mb-4">Our Services</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-white font-bold text-sm md:text-base mb-3 md:mb-4">Get in Touch</h4>
            <div className="space-y-2.5 md:space-y-3">
              <a href="tel:+919581195889 " className="flex items-start gap-2.5 text-xs md:text-sm text-gray-400 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-pink-600 transition-all duration-300">
                  <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
                <div>
                  <p className="font-semibold text-gray-300">Phone</p>
                  <p>+91 95811 95889 </p>
                </div>
              </a>
              <a href="mailto:cprintzone@gmail.com" className="flex items-start gap-2.5 text-xs md:text-sm text-gray-400 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-pink-600 transition-all duration-300">
                  <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
                <div>
                  <p className="font-semibold text-gray-300">Email</p>
                  <p>cprintzone@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-400 group">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-pink-600 transition-all duration-300">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
                <div>
                  <p className="font-semibold text-gray-300">Location</p>
                  <p>Creative Print Zone, 
29-1-22/a Ground floor &1st floor,SeshadrisastiVari  Street,Governorpet,
Vijayawada-520002 (A.P)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4 md:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-[10px] md:text-xs text-gray-400 text-center sm:text-left">
              © 2025 Creative Print Zone. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="text-[10px] md:text-xs text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-[10px] md:text-xs text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;