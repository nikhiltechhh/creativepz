import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Helper
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // WhatsApp Chat Handler
  const handleWhatsAppClick = () => {
    const phoneNumber = "919581195889"; // Replace with your WhatsApp number (with country code, no + or spaces)
    const message = encodeURIComponent("Hi! I'm interested in your personalized gifts.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Products", id: "products" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#b0a8a0] shadow-lg border-b border-gray-200 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-20 lg:h-20">

          {/* Logo + Name */}
          <div
            className="flex items-center gap-3 flex-shrink-0 cursor-pointer"
            onClick={() => scrollToId("home")}
          >
            <img
              src={logo}
              alt="Creative Print Zone"
              className="h-12 lg:h-16 w-auto transition-transform duration-300 hover:scale-105"
            />

            <div className="flex flex-col leading-tight">
              <span className="text-xl lg:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
                Creative Print Zone
              </span>

              <p className="text-[10px] font-semibold text-black-600 -mt-1 ml-1 tracking-wide">
                Personalised Gifts for Every Moment
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToId(item.id)}
                className="px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium text-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Button
              onClick={() => scrollToId("products")}
              className="bg-primary text-primary-foreground font-semibold hover:shadow-premium hover:scale-105 transition-all duration-300 rounded-none"
            >
              Shop Now
            </Button>
            
            {/* WhatsApp Button - Desktop */}
            <button
              onClick={handleWhatsAppClick}
              className="relative group bg-[#25D366] hover:bg-[#20BD5A] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Chat on WhatsApp"
            >
              <svg className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {/* <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span> */}
            </button>
          </div>

          {/* Mobile Controls - WhatsApp + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {/* WhatsApp Button - Mobile */}
            <button
              onClick={handleWhatsAppClick}
              className="relative bg-[#25D366] hover:bg-[#20BD5A] text-white p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Chat on WhatsApp"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {/* <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span> */}
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex flex-col items-center justify-center focus:outline-none group z-50"
            >
              <span
                className={`block w-7 h-0.5 bg-foreground transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-foreground my-1.5 transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              ></span>
              <span
                className={`block w-7 h-0.5 bg-foreground transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pt-4 pb-6 space-y-2 bg-white shadow-md border-t border-gray-200">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => {
                scrollToId(item.id);
                setIsOpen(false);
              }}
              className="block w-full text-left px-5 py-3.5 text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-100 rounded-lg transition-all duration-300"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isOpen ? "fade-in 0.4s ease-out forwards" : "none",
              }}
            >
              {item.name}
            </button>
          ))}

          {/* CTA Button - Mobile */}
          <div className="pt-4">
            <Button
              className="w-full bg-primary text-primary-foreground font-semibold"
              onClick={() => {
                scrollToId("products");
                setIsOpen(false);
              }}
            >
              Shop Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;