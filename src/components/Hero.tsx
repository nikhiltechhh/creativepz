import { useState, useEffect } from "react";
import { Sparkles, Package, Palette } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Replace these placeholder URLs with your actual image URLs
  const slides = [
    {
      image: "https://i.ibb.co/r8LCd4W/0092.jpg",
      title: "Create Unique Personalized Gifts",
      subtitle: "Transform Your Ideas Into Beautiful Custom Products",
      icon: Sparkles,
      gradient: "from-pink-600/95 via-rose-600/85",
    },
    {
      image: "https://i.ibb.co/WWQn1tmk/0091.jpg",
      title: "Professional Printing Services",
      subtitle: "High-Quality Prints For Every Occasion",
      icon: Package,
      gradient: "from-red-600/95 via-orange-600/85",
    },
    {
      image: "https://i.ibb.co/tp3gm234/0093.jpg",
      title: "Express Your Creativity",
      subtitle: "Make Every Gift Special & Memorable",
      icon: Palette,
      gradient: "from-rose-600/95 via-pink-600/85",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const handleSlideChange = (index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-rose-50">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full h-screen">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105 pointer-events-none"
              }`}
            >
             {/* Background Image with Professional Overlay */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative h-full flex items-center pt-16 sm:pt-20 lg:pt-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-7xl">
                  <div className="max-w-xl md:max-w-2xl xl:max-w-3xl space-y-4 sm:space-y-6 lg:space-y-8">
                    {/* Premium Badge with Icon */}
                    <div className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/95 backdrop-blur-md shadow-xl border border-gray-200 ${isTransitioning ? 'animate-scale-in' : ''}`}>
                      <div className="p-1.5 rounded-md bg-gradient-to-br from-pink-600 to-rose-600">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-800 tracking-wide">PREMIUM QUALITY</span>
                    </div>

                    {/* Title with Gradient */}
                    <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight drop-shadow-2xl ${isTransitioning ? 'animate-fade-in' : ''}`}>
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-semibold leading-relaxed drop-shadow-lg ${isTransitioning ? 'animate-fade-in' : ''}`}
                      style={{ animationDelay: '100ms' }}
                    >
                      {slide.subtitle}
                    </p>

                    {/* CTA Buttons - Professional Rectangular */}
                    <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 lg:pt-6 ${isTransitioning ? 'animate-fade-in' : ''}`}
                      style={{ animationDelay: '200ms' }}
                    >
                      <button 
                        onClick={() => {
                          document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="group relative px-6 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-sm sm:text-base  shadow-xl hover:shadow-2xl hover:from-pink-700 hover:to-rose-700 hover:scale-105 transition-all duration-300"
                      >
                        <span className="relative z-10">Shop Now</span>
                      </button>

                      <button 
                        onClick={() => {
                          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-6 sm:px-7 py-2.5 sm:py-3 bg-white/10 backdrop-blur-md text-white font-bold text-sm sm:text-base  border-2 border-white/80 hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        Learn More
                      </button>
                    </div>

                    {/* Features List */}
                    <div className={`flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 ${isTransitioning ? 'animate-fade-in' : ''}`}
                      style={{ animationDelay: '300ms' }}
                    >
                      {[
                        "Premium Quality",
                        "Fast Delivery",
                        "Custom Designs"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/15 backdrop-blur-sm rounded-md border border-white/40">
                          <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                          <span className="text-xs sm:text-sm font-semibold text-white">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Dots - Clean Professional Design */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3 bg-black/30 backdrop-blur-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-white/20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`transition-all duration-500 rounded-sm ${
              index === currentSlide
                ? "w-8 sm:w-10 h-1.5 sm:h-2 bg-white shadow-lg"
                : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 right-4 sm:right-8 lg:right-12 z-20 hidden md:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-semibold text-white/80 tracking-widest">SCROLL</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-white/80 to-transparent"></div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
          }
          33% { 
            transform: translate(30px, -50px) scale(1.1); 
          }
          66% { 
            transform: translate(-20px, 20px) scale(0.9); 
          }
        }

        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;