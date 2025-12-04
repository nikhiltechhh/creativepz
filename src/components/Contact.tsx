import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "9581195889",
      subtext: "Mon-Sat, 9AM-7PM",
      color: "#EC4899",
      link: "tel:+919581195889"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "cprintzone@gmail.com",
      subtext: "Quick response within 24hrs",
      color: "#06B6D4",
      link: "mailto:cprintzone@gmail.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "29-1-22/a, 1st floor, Seshadrisastrivari Street, Governorpet, Vijayawada",
      subtext: "Pan India Delivery Available",
      color: "#22C55E",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 md:py-16">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-5 w-40 h-40 md:w-72 md:h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-40 h-40 md:w-72 md:h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 md:w-72 md:h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-50 rounded-full text-cyan-600 font-semibold text-xs md:text-sm border border-cyan-100 mb-3 md:mb-4">
            <MessageSquare className="w-3 h-3 md:w-4 md:h-4" />
            Get In Touch
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-3 md:mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500">Us</span>
          </h2>
          
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                className="group bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon 
                      className="w-6 h-6 md:w-8 md:h-8 transition-all duration-500" 
                      style={{ color: item.color }}
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p 
                      className="text-xs md:text-sm font-semibold mb-1 transition-colors"
                      style={{ color: item.color }}
                    >
                      {item.details}
                    </p>
                    <p className="text-[10px] md:text-xs text-gray-500">
                      {item.subtext}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
         
          {/* Additional Info */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {/* Business Hours */}
            {/* <div className="bg-white rounded-2xl shadow-lg p-5 md:p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-800">Business Hours</h3>
              </div>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Monday - Friday</span>
                  <span className="text-gray-800 font-semibold">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Saturday</span>
                  <span className="text-gray-800 font-semibold">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-gray-600 font-medium">Sunday</span>
                  <span className="text-red-500 font-semibold">Closed</span>
                </div>
              </div>
            </div> */}

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl shadow-lg p-5 md:p-6 text-white">
              <h3 className="text-base md:text-lg font-bold mb-2">Need Immediate Help?</h3>
              <p className="text-xs md:text-sm text-cyan-50 mb-4">
                Call us directly and we'll be happy to assist you with your queries.
              </p>
              <a 
                href="tel:+919581195889"
                className="inline-flex items-center gap-2 bg-white text-cyan-600 font-bold py-2 md:py-2.5 px-4 md:px-5 rounded-lg hover:bg-cyan-50 transition-all duration-300 text-sm md:text-base hover:scale-105 shadow-lg"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                9581195889
              </a>
            </div>

            {/* Map Placeholder */}
            {/* <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-40 md:h-48">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 md:w-12 md:h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-xs md:text-sm text-gray-500 font-medium">Map Location</p>
                </div>
              </div>
            </div> */}
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ContactUs;