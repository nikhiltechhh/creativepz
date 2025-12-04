import { Store, MapPin, Package, Sparkles, Coffee, Hammer, Gift, Scissors, Key, Cog, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import Gift11 from "@/assets/Gift11.png";
import Gift22 from "@/assets/Gift22.png";


const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: Sparkles, text: "Customized Cushions", color: "#FF1493" },
    { icon: Coffee, text: "Bulk Printing Mugs", color: "#FF6B6B" },
    { icon: Hammer, text: "Wood Engraving", color: "#FFD700" },
    { icon: Gift, text: "Laser Marking Gifts", color: "#FF1493" },
    { icon: Scissors, text: "MDF & Acrylic CO2 Cutting", color: "#4ECDC4" },
    { icon: Package, text: "Sublimation Raw Materials", color: "#FFD700" },
    { icon: Key, text: "Customized Keychains", color: "#FF6B6B" },
    { icon: Cog, text: "Machines & Equipment", color: "#4ECDC4" },
    { icon: Truck, text: "Pan India Delivery", color: "#22C55E" },
  ];

  // Image placeholder URLs
  const images = {
    topRight: Gift11,
    leftItem: "https://i.ibb.co/sv4LbVFV/Pic26-removebg-preview.png",
    bottomRight: "https://via.placeholder.com/300x250?text=Keychain",
    
  };

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50 overflow-hidden">
      {/* Curved background lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FFE5E5', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#FFC0CB', stopOpacity: 0.2 }} />
          </linearGradient>
        </defs>
        <path
          d="M -200 200 Q 300 100 600 300 T 1400 200"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <path
          d="M -100 600 Q 400 500 800 650 T 1600 550"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '1s' }}
        />
        <ellipse
          cx="200"
          cy="150"
          rx="120"
          ry="80"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          className="animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        <ellipse
          cx="1200"
          cy="400"
          rx="150"
          ry="100"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          className="animate-pulse"
          style={{ animationDuration: '5.5s', animationDelay: '0.5s' }}
        />
      </svg>

      {/* Floating Product Images */}
      <div 
        className={`absolute -top-6 right-12 md:top-16 md:right-24 w-48 h-32 md:w-72 md:h-48 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
        style={{
          animation: 'float 6s ease-in-out infinite',
          animationDelay: '0s'
        }}
      >
        <img 
          src={Gift11} 
          alt="Gift Item" 
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>

      <div 
        className={`absolute left-8 top-36 md:left-20 w-48 h-52 md:w-64 md:h-72 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
        style={{
          animation: 'float 7s ease-in-out infinite',
          animationDelay: '1s'
        }}
      >
        <img 
          src={Gift22}
          alt="Custom Product" 
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-20">
        {/* Hero Text */}
        <div className={`transition-all duration-1000 delay-500 text-center mb-16 md:mb-24 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-red-600">
              Better gifts for
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-red-600">
              more people
            </span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
            For over a decade, we've enabled our customers to discover new gifts, delivered right to their doorstep
          </p>
        </div>

        {/* Services Badges - Very Small */}
      <div className={`mb-12 md:mb-24 transition-all duration-1000 delay-600 ${
  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
}`}>
  <div className="flex flex-wrap gap-1.5 md:gap-2.5 justify-center px-1 md:px-2">
    {services.map((service, index) => {
      const IconComponent = service.icon;
      return (
        <div
          key={index}
          style={{
            animation: `slideIn 0.5s ease-out ${index * 0.03}s both`
          }}
        >
          <div className="inline-flex items-center gap-1 px-2 py-1 md:gap-1.5 md:px-3 md:py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 cursor-pointer border border-gray-100 hover:border-gray-200 group">
            <div 
              className="p-0.5 md:p-1 rounded-full transition-all duration-300"
              style={{ backgroundColor: `${service.color}20` }}
            >
              <IconComponent 
                size={12} // smaller on mobile
                className="md:w-3.5 md:h-3.5"
                style={{ color: service.color }}
                strokeWidth={2.5}
              />
            </div>
            <span className="text-[10px] md:text-xs font-semibold text-gray-600 whitespace-nowrap">
              {service.text}
            </span>
          </div>
        </div>
      );
    })}
  </div>
</div>


        {/* Statistics Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Happy Customers */}
          <div className="flex flex-col items-center group">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 border-2 border-gray-100">
                <Store className="w-8 h-8 md:w-10 md:h-10 text-red-500" strokeWidth={2} />
              </div>
              <div className="text-left">
                <div className="text-4xl md:text-5xl font-black text-gray-700">
                  1000<span className="text-red-500">+</span>
                </div>
                <div className="text-gray-500 font-semibold text-base md:text-lg">
                  customers
                </div>
              </div>
            </div>
          </div>

          {/* Cities */}
          <div className="flex flex-col items-center group">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 border-2 border-gray-100">
  <MapPin 
    className="w-6 h-6 md:w-10 md:h-10 text-red-500" // smaller width/height on mobile
    strokeWidth={2} 
    fill="none" // remove fill to avoid solid red
  />
</div>

              <div className="text-left">
                <div className="text-4xl md:text-5xl font-black text-gray-700">
                  80<span className="text-red-500">+</span>
                </div>
                <div className="text-gray-500 font-semibold text-base md:text-lg">
                  cities
                </div>
              </div>
            </div>
          </div>

          {/* Orders Delivered */}
          <div className="flex flex-col items-center group">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 border-2 border-gray-100">
                <Package className="w-8 h-8 md:w-10 md:h-10 text-red-500" strokeWidth={2} />
              </div>
              <div className="text-left">
                <div className="text-4xl md:text-5xl font-black text-gray-700">
                  1000<span className="text-red-500">+</span>
                </div>
                <div className="text-gray-500 font-semibold text-base md:text-lg">
                  gifts delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;