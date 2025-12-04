import { Star, Quote } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "Absolutely stunning customized cushions! The quality exceeded my expectations. Perfect gift for my sister's wedding.",
      service: "Customized Cushions",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      rating: 5,
      text: "Ordered 200 mugs for our corporate event. Amazing print quality and delivered on time. Highly professional service!",
      service: "Bulk Printing Mugs",
    },
    {
      id: 3,
      name: "Sneha Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "The wood engraving work is exceptional! Got a beautiful nameplate done. The craftsmanship is top-notch.",
      service: "Wood Engraving",
    },
    {
      id: 4,
      name: "Arjun Reddy",
      location: "Hyderabad, Telangana",
      rating: 5,
      text: "Laser marking on gifts looks premium! Ordered personalized keychains for my team. Everyone loved them!",
      service: "Laser Marking Gifts",
    },
    {
      id: 5,
      name: "Meera Iyer",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "Quick delivery across India! The packaging was excellent and products arrived in perfect condition.",
      service: "Pan India Delivery",
    },
    {
      id: 6,
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      rating: 5,
      text: "Best place for sublimation materials! Great prices and authentic products. Been a customer for 2 years now.",
      service: "Sublimation Raw Materials",
    },
    {
      id: 7,
      name: "Anjali Desai",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "The MDF cutting precision is amazing! They understood exactly what I needed for my project.",
      service: "MDF & Acrylic CO2 Cutting",
    },
    {
      id: 8,
      name: "Karthik Menon",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      text: "Bought a sublimation machine from them. Great after-sales support and training provided!",
      service: "Machines & Equipment",
    },
    {
      id: 9,
      name: "Divya Nair",
      location: "Kochi, Kerala",
      rating: 5,
      text: "Beautiful customized keychains for my wedding favors. Guests absolutely loved them!",
      service: "Customized Keychains",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame: number;
    let isPaused = false;

    const smoothScroll = () => {
      if (!isPaused && scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth / 2; // Half because we duplicate reviews
        
        if (scrollContainer.scrollLeft >= maxScroll) {
          // Reset to start seamlessly
          scrollContainer.scrollLeft = 0;
        } else {
          // Smooth continuous scroll
          scrollContainer.scrollLeft += 0.5;
        }
      }
      animationFrame = requestAnimationFrame(smoothScroll);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    
    animationFrame = requestAnimationFrame(smoothScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-rose-50 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-1/2 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 rounded-full border border-pink-100 mb-4">
            <Star className="w-4 h-4 text-pink-600 fill-pink-600" />
            <span className="text-xs sm:text-sm font-bold text-pink-700 tracking-wide">
              CUSTOMER REVIEWS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
              What our{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
              customers say
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Join thousands of happy customers who trust us for their gifting needs
          </p>
        </div>

        {/* Scrolling Reviews Container */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-80 sm:w-96 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute top-3 right-3 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-16 h-16 sm:w-20 sm:h-20 text-pink-600" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 italic">
                    "{review.text}"
                  </p>

                  {/* Service Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-pink-50 to-rose-50 rounded-full border border-pink-100 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                    <span className="text-xs font-semibold text-pink-700">
                      {review.service}
                    </span>
                  </div>

                  {/* User Info */}
                  <div className="pt-3 border-t border-gray-100">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">
                      {review.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {review.location}
                    </p>
                  </div>
                </div>

                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
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

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Reviews;