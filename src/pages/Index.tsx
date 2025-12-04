import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Cart from "@/components/Cart";
// import WhatsApp from "@/components/WhatsApp";
import Contact from "@/components/Contact";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Cart />
      {/* <WhatsApp /> */}
      <Contact />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
