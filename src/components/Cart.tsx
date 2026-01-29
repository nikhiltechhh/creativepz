import React, { useState, useMemo, useRef } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2, MessageCircle, Search, Filter, SlidersHorizontal, Package, ArrowUpDown, Eye, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Pic1 from "@/assets/Pic1.jpeg";
import Pic2 from "@/assets/Pic2.jpeg";
import Pic3 from "@/assets/Pic3.jpeg";
import Pic4 from "@/assets/Pic4.jpeg";
import Pic5 from "@/assets/Pic5.jpeg";
import Pic6 from "@/assets/Pic6.jpeg";
import Pic7 from "@/assets/Pic7.jpeg";
import Pic8 from "@/assets/Pic8.jpeg";
import Pic9 from "@/assets/Pic9.jpeg";
import Pic10 from "@/assets/Pic10.jpeg";
import Pic11 from "@/assets/Pic11.jpeg";
import Pic12 from "@/assets/Pic12.jpeg";
import Pic13 from "@/assets/Pic13.jpeg";
import Pic14 from "@/assets/Pic14.jpeg";
import Pic15 from "@/assets/Pic15.jpeg";
import Pic16 from "@/assets/Pic16.jpeg";
import Pic17 from "@/assets/Pic17.jpeg";
import Pic18 from "@/assets/Pic18.jpeg";
import Pic19 from "@/assets/Pic19.jpeg";
import Pic20 from "@/assets/Pic20.jpeg";
import Pic21 from "@/assets/Pic21.jpeg";
import Pic22 from "@/assets/Pic22.jpeg";
import Pic23 from "@/assets/Pic23.jpeg";
import Pic24 from "@/assets/Pic24.jpeg";
import Pic25 from "@/assets/Pic25.jpeg";
import Pic26 from "@/assets/Pic26.jpeg";
import Pic27 from "@/assets/Pic27.jpeg";
import Pic28 from "@/assets/Pic28.jpeg";
import Pic29 from "@/assets/Pic29.jpeg";
import Pic30 from "@/assets/Pic30.jpeg";
import Pic31 from "@/assets/Pic31.jpeg";
import Pic32 from "@/assets/Pic32.jpeg";
import Pic33 from "@/assets/Pic33.jpeg";
import Pic34 from "@/assets/Pic34.jpeg";
import Pic35 from "@/assets/Pic35.jpeg";
import Pic36 from "@/assets/Pic36.jpeg";
import Pic37 from "@/assets/Pic37.jpeg";
import Pic38 from "@/assets/Pic38.jpeg";
import Pic39 from "@/assets/Pic39.jpeg";
import Pic40 from "@/assets/Pic40.jpeg";
import Pic41 from "@/assets/Pic41.jpeg";
import Pic42 from "@/assets/Pic42.jpeg";
import Pic43 from "@/assets/Pic43.jpeg";
import Pic44 from "@/assets/Pic44.jpeg";
import Pic45 from "@/assets/Pic45.jpeg";
import Pic46 from "@/assets/Pic46.jpeg";
import Pic47 from "@/assets/Pic47.jpeg";
import Pic48 from "@/assets/Pic48.jpeg";
import Pic49 from "@/assets/Pic49.jpeg";
import Pic50 from "@/assets/Pic50.jpeg";
import Pic51 from "@/assets/Pic51.jpeg";
import Pic52 from "@/assets/Pic52.jpeg";
import Pic53 from "@/assets/Pic53.jpeg";
import Pic54 from "@/assets/Pic44.jpeg";
import Pic55 from "@/assets/Pic55.jpeg";
import Pic56 from "@/assets/Pic56.jpeg";
import Pic57 from "@/assets/Pic57.jpeg";
import Pic58 from "@/assets/Pic58.jpeg";
import Pic59 from "@/assets/Pic59.jpeg";
import Pic60 from "@/assets/Pic60.jpeg";
import Pic61 from "@/assets/Pic61.jpeg";
import Pic62 from "@/assets/Pic62.jpeg";
import Pic63 from "@/assets/Pic63.jpeg";
import Pic64 from "@/assets/Pic64.jpeg";
import Pic65 from "@/assets/Pic65.jpeg";
import Pic66 from "@/assets/Pic66.jpeg";
import Pic67 from "@/assets/Pic67.jpeg";
import Pic68 from "@/assets/Pic68.jpeg";
import Pic69 from "@/assets/Pic69.jpeg";
import Pic70 from "@/assets/Pic70.jpeg";
import Pic71 from "@/assets/Pic71.jpeg";
import Pic72 from "@/assets/Pic72.jpeg";
import Pic73 from "@/assets/Pic73.jpeg";
import Pic74 from "@/assets/Pic74.jpeg";
import Pic75 from "@/assets/Pic75.jpeg";
import Pic76 from "@/assets/Pic76.jpeg";
import Pic77 from "@/assets/Pic77.jpeg";
import Pic78 from "@/assets/Pic78.jpeg";
import Pic79 from "@/assets/Pic79.jpeg";
import Pic80 from "@/assets/Pic80.jpeg";
import Pic81 from "@/assets/Pic81.jpeg";
import Pic82 from "@/assets/Pic82.jpeg";
import Pic83 from "@/assets/Pic83.jpeg";
import Pic84 from "@/assets/Pic84.jpeg";
import Pic85 from "@/assets/Pic85.jpeg";
import Pic86 from "@/assets/Pic86.jpeg";
import Pic87 from "@/assets/Pic87.jpeg";
import Pic88 from "@/assets/Pic88.jpeg";
import Pic89 from "@/assets/Pic89.jpeg";
import Pic90 from "@/assets/Pic90.jpeg";
import Pic91 from "@/assets/Pic91.jpeg";
import Pic92 from "@/assets/Pic92.jpeg";
import Pic93 from "@/assets/Pic93.jpeg";
import Pic94 from "@/assets/Pic94.jpeg";
import Pic95 from "@/assets/Pic95.jpeg";
import Pic96 from "@/assets/Pic96.jpeg";
import Pic97 from "@/assets/Pic97.jpeg";
// import Pic98 from "@/assets/Pic98.jpeg";
// import Pic99 from "@/assets/Pic99.jpeg";
// import Pic100 from "@/assets/Pic100.jpeg";
// import Pic101 from "@/assets/Pic101.jpeg";
// import Pic102 from "@/assets/Pic102.jpeg";
// import Pic103 from "@/assets/Pic103.jpeg";
// import Pic104 from "@/assets/Pic104.jpeg";
// import Pic105 from "@/assets/Pic105.jpeg";
// import Pic106 from "@/assets/Pic106.jpeg";
// import Pic107 from "@/assets/Pic107.jpeg";
// import Pic108 from "@/assets/Pic108.jpeg";
// import Pic109 from "@/assets/Pic109.jpeg";
// import Pic110 from "@/assets/Pic110.jpeg";
// import Pic111 from "@/assets/Pic111.jpeg";
// import Pic112 from "@/assets/Pic112.jpeg";
// import Pic113 from "@/assets/Pic113.jpeg";
// import Pic114 from "@/assets/Pic114.jpeg";
// import Pic115 from "@/assets/Pic115.jpeg";
// import Pic116 from "@/assets/Pic116.jpeg";
// import Pic117 from "@/assets/Pic117.jpeg";
// import Pic118 from "@/assets/Pic118.jpeg";



interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  badge?: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
  id: 1,
  name: "Temperature Bottle",
  price: 350,
  originalPrice: 400,
  image: Pic1,
  images: [Pic1],
  category: "Bottle",
  badge: "Trending",
  description: "Stylish temperature bottle available in 5 vibrant colours. Keeps drinks hot or cold for hours."
},
{
  id: 2,
  name: "Sipper Bottles 600ml",
  price: 450,
  image: Pic2,
  images: [Pic2],
  category: "Bottle",
  description: "Durable 600ml sipper bottle perfect for workouts, travel, and office use."
},
{
  id: 3,
  name: "Sipper Bottle 750ml",
  price: 550,
  image: Pic2,
  images: [Pic2],
  category: "Bottle",
  badge: "Best",
  description: "Large 750ml sipper bottle, spill-proof and ideal for long outdoor trips."
},
{
  id: 4,
  name: "Heart Handle Mugs",
  price: 350,
  image: Pic3,
  images: [Pic3],
  category: "Mug",
  badge: "Best",
  description: "Cute mugs with heart-shaped handles available in 6 attractive colours."
},
{
  id: 5,
  name: "Regular Handle Mugs",
  price: 320,
  image: Pic4,
  images: [Pic4],
  category: "Mug",
  badge: "Trending",
  description: "Classic mugs with comfortable handles, available in 3 stylish tones."
},
{
  id: 6,
  name: "Vaccum Flasks Sets",
  price: 450,
  image: Pic5,
  images: [Pic5],
  category: "Flasks",
  description: "Set of high-quality vacuum flasks perfect for keeping beverages hot or cold."
},
{
  id: 7,
  name: "Desk Table Clock Organizer",
  price: 600,
  image: Pic6,
  images: [Pic6],
  category: "Clock",
  description: "Multi-functional desk organizer with clock, ideal for home or office use."
},
{
  id: 8,
  name: "Metal Pen",
  price: 100,
  image: Pic7,
  images: [Pic7],
  category: "Pen",
  description: "Premium metal pen with smooth writing experience. Quality depends on price."
},
{
  id: 9,
  name: "Gold Foil Pen",
  price: 300,
  image: Pic8,
  images: [Pic8],
  category: "Pen",
  description: "Elegant gold foil pen, comes with a stylish individual gift box."
},
{
  id: 10,
  name: "Colour Mugs",
  price: 320,
  image: Pic9,
  images: [Pic9],
  category: "Mug",
  description: "Vibrant coloured mugs, quantity depends on price. Perfect for gifting."
},
{
  id: 11,
  name: "Wallet Engraving",
  price: 550,
  image: Pic10,
  images: [Pic10],
  category: "Wallet",
  description: "Personalized wallet with engraving options. Ideal for gifting loved ones."
},
{
  id: 12,
  name: "2 in 1 Combo Set Doctor Special Gifts",
  price: 600,
  image: Pic11,
  images: [Pic11],
  category: "Combo",
  description: "Special 2-in-1 gift combo tailored for doctors and professionals."
},
{
  id: 13,
  name: "Wallet Naming",
  price: 350,
  image: Pic12,
  images: [Pic12],
  category: "Wallet",
  description: "Custom wallet with names engraved. Elegant and personal gift idea."
},
{
  id: 14,
  name: "Table Top Frame",
  price: 490,
  image: Pic13,
  images: [Pic13],
  category: "Frame",
  description: "Decorative table-top frame to showcase your favourite memories."
},
{
  id: 15,
  name: "White Mug",
  price: 250,
  image: Pic14,
  images: [Pic14],
  category: "Mug",
  description: "Simple and classic white mug, quantity depends on price."
},
{
  id: 16,
  name: "Design Mug",
  price: 250,
  image: Pic15,
  images: [Pic15],
  category: "Mug",
  description: "Creative design mugs, perfect for gifting or personal use."
},
{
  id: 17,
  name: "Sipper Bottle 750ml",
  price: 550,
  image: Pic16,
  images: [Pic16],
  category: "Bottle",
  description: "Large capacity 750ml sipper bottle, ideal for hydration on-the-go."
},
{
  id: 18,
  name: "Wallet Naming",
  price: 350,
  image: Pic17,
  images: [Pic17],
  category: "Wallet",
  description: "Customizable wallet with engraved names. Great for personal gifting."
},
{
  id: 19,
  name: "2 in 1 Combo",
  price: 550,
  image: Pic18,
  images: [Pic18],
  category: "Pen",
  description: "Practical 2-in-1 combo set with stylish design. Perfect for office use."
},
{
  id: 20,
  name: "Imported Cushions",
  price: 300,
  image: Pic19,
  images: [Pic19],
  category: "Cushion",
  description: "Imported cushions, size approximately 8x8 inches. Soft and comfy."
},
{
  id: 21,
  name: "MDF wall Hangling Frame Heart Edition",
  price: 990,
  image: Pic20,
  images: [Pic20],
  category: "Frame",
  description: "Decorative MDF wall frame in heart edition, perfect for gifting."
},
{
  id: 22,
  name: "Illusion LED Lamp",
  price: 950,
  image: Pic21,
  images: [Pic21],
  category: "Lamp",
  description: "Creative LED lamp with illusion effect. Brighten your room stylishly."
},
{
  id: 23,
  name: "MDF Exam Pad",
  price: 650,
  image: Pic22,
  images: [Pic22, Pic23, Pic24],
  category: "Pad",
  description: "Durable MDF exam pad with printed images, ideal for students and offices."
},
{
  id: 24,
  name: "Cutout Frame",
  price: 1100,
  image: Pic26,
  images: [Pic26, Pic25, Pic27],
  category: "Frame",
  description: "High-quality cutout frame for home or office decoration."
},
{
  id: 25,
  name: "Wood Engraving",
  price: 950,
  image: Pic28,
  images: [Pic28, Pic29, Pic30, Pic31],
  category: "Frame",
  description: "Artistic wood engraving frame to showcase pictures beautifully."
},
{
  id: 26,
  name: "Table Top Frames",
  price: 650,
  image: Pic32,
  images: [Pic32, Pic33, Pic34, Pic35, Pic36],
  category: "Frame",
  description: "Special Rakshabandhan table-top frames to gift your loved ones."
},
{
  id: 27,
  name: "Acrylic Clock",
  price: 1300,
  image: Pic37,
  images: [Pic37, Pic39, Pic38, Pic40],
  category: "Clock",
  description: "Stylish acrylic clock with butterfly cut design, enhances room decor."
},
{
  id: 28,
  name: "Square Cushions",
  price: 600,
  image: Pic41,
  images: [Pic41, Pic42, Pic43],
  category: "Cushion",
  description: "Soft square cushions with attractive images for home comfort."
},
{
  id: 29,
  name: "Panda Cushions",
  price: 750,
  image: Pic44,
  images: [Pic44],
  category: "Cushion",
  description: "Cute panda themed cushion for kids’ room or gifting purposes."
},
{
  id: 30,
  name: "Teddy Bear Cushions",
  price: 650,
  image: Pic45,
  images: [Pic45, Pic46, Pic47, Pic48, Pic49, Pic50],
  category: "Cushion",
  description: "Colourful cushions with multiple designs for living spaces."
},
{
  id: 31,
  name: "Rose Petal Cushions",
  price: 750,
  image: Pic51,
  images: [Pic51, Pic52, Pic53],
  category: "Cushion",
  description: "Elegant rose petal cushions, perfect for bedroom decor or gifting."
},
{
  id: 32,
  name: "Metal Keychains",
  price: 4500,
  image: Pic55,
  images: [Pic55, Pic56, Pic57, Pic58, Pic59],
  category: "Keychain",
  description: "Premium metal keychains, packed in boxes of 100 pieces, ideal for events or gifts."
},
{
  id: 33,
  name: "Collar T Shirts ",
  price: 650,
  image: Pic60,
  images: [Pic60],
  category: "Shirts",
  description: "Premium collar T-shirts with 8 colors and double-side printing."
},

{
  id: 34,
  name: "Acrylic Wall Frames",
  price: 2400,
  image: Pic62,
  images: [Pic62],
  category: "Combo",
  description: "High-quality acrylic wall frame with 18×24 size and free studs."
},
{
  id: 35,
  name: "Table Top Frames",
  price: 550,
  image: Pic63,
  images: [Pic63,Pic64,Pic65,Pic66],
  category: "Frame",
  description: "Custom-designed tabletop frames for your favorite memories."
},
{
  id: 36,
  name: "Money Kiddi Bank ",
  price: 850,
  image: Pic67,
  images: [Pic67,Pic68,Pic69,Pic70],
  category: "Kiddi Bank",
  description: "Personalized money kiddi bank for kids' savings."
},
{
  id: 37,
  name: "Digital Oilpaint Frames",
  price: 1450,
  image: Pic71,
  images: [Pic71,Pic72,Pic73,Pic74,Pic75,Pic76],
  category: "Frame",
  description: "Digital oil-painting style frames with size-based pricing."
},
{
  id: 38,
  name: "Mosaic Photo Frames",
  price: 950,
  image: Pic77,
  images: [Pic77,Pic78,Pic79],
  category: "Frame",
  description: "Mosaic-style photo frames available in different sizes."
},
{
  id: 39,
  name: "Thumb Print Acrylic Frames",
  price: 1450,
  image: Pic80,
  images: [Pic80,Pic81,Pic82,Pic83],
  category: "Frame",
  description: "Acrylic frames featuring thumbprint-style photo layouts."
},
{
  id: 40,
  name: "CutOut TableTop Frames",
  price: 1950,
  image: Pic84,
  images: [Pic84,Pic85,Pic86],
  category: "Frame",
  description: "Custom cut-out tabletop frames in 12×12 size."
},
{
  id: 41,
  name: "Heart Cutting Wood Engraving ",
  price: 950,
  image: Pic87,
  images: [Pic87,Pic88,Pic89,Pic90],
  category: "Frame",
  description: "Heart-shaped wooden engraving frame with custom designs."
},
{
  id: 42,
  name: "Customized Cutting Wall Clocks",
  price: 1600,
  image: Pic91,
  images: [Pic91,Pic92,Pic93,Pic94],
  category: "Clock",
  description: "16×16 customized cut-out wall clocks with photo design."
},
{
  id: 43,
  name: "Freedge Magnets",
  price: 200,
  image: Pic95,
  images: [Pic95,Pic96,Pic97],
  category: "Magnet",
  description: "Custom fridge magnets in various shapes and sizes."
},
{
  id: 44,
  name: "3in1 Engraving Combo",
  price: 650,
  image: Pic61,
  images: [Pic61],
  category: "Combo",
  description: "Personalized wallet, pen, and keychain engraving set."
},
];


export default function GiftStoreCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const imageRef = useRef<HTMLDivElement>(null);
  const [isCheckoutFormOpen, setIsCheckoutFormOpen] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
    return ['All', ...uniqueCategories];
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    const sorted = [...filtered];
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return sorted;
  }, [searchQuery, selectedCategory, sortBy]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, change: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const getItemInCart = (productId: number) => {
    return cart.find(item => item.id === productId);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    setIsCheckoutFormOpen(true);
  };

  const validateForm = () => {
    const errors = {
      name: '',
      phone: '',
      address: ''
    };
    let isValid = true;

    if (!customerDetails.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    } else if (customerDetails.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    if (!customerDetails.phone.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(customerDetails.phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    if (!customerDetails.address.trim()) {
      errors.address = 'Address is required';
      isValid = false;
    } else if (customerDetails.address.trim().length < 10) {
      errors.address = 'Please enter a complete address';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const orderDetails = cart
      .map(item => `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`)
      .join('%0A');

    const total = getTotalPrice();
    const message = `*New Order from Creative Print Zone*%0A%0A*Customer Details:*%0AName: ${customerDetails.name}%0APhone: ${customerDetails.phone}%0AAddress: ${customerDetails.address}%0A%0A*Order Details:*%0A${orderDetails}%0A%0A*Total Amount: ₹${total}*%0A%0APlease confirm my order. Thank you!`;

    const whatsappNumber = '919581195889';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');
    
    // Reset form and close modal
    setIsCheckoutFormOpen(false);
    setCustomerDetails({ name: '', phone: '', address: '' });
    setFormErrors({ name: '', phone: '', address: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSortBy('featured');
  };

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (searchQuery.trim()) count++;
    if (selectedCategory !== 'All') count++;
    if (sortBy !== 'featured') count++;
    return count;
  }, [searchQuery, selectedCategory, sortBy]);

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setCurrentImageIndex(0);
    setIsZoomed(false);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
    setCurrentImageIndex(0);
    setIsZoomed(false);
  };

  const nextImage = () => {
    if (quickViewProduct?.images) {
      setCurrentImageIndex((prev) =>
        prev === quickViewProduct.images!.length - 1 ? 0 : prev + 1
      );
      setIsZoomed(false);
    }
  };

  const prevImage = () => {
    if (quickViewProduct?.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? quickViewProduct.images!.length - 1 : prev - 1
      );
      setIsZoomed(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };


  return (
    <div id="products" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header with Brand */}
      <header className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            <div>
             <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
  Creative Print Zone
</h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Premium Gift Store</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-pink-50 to-purple-50 px-4 py-2 rounded-lg">
                <Package className="w-4 h-4 text-pink-600" />
                <span className="text-sm font-medium text-gray-700">{products.length} Products</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Search and Filter Section */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex gap-2 sm:gap-3 mb-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="text-gray-400 w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search by name, category, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:bg-white text-sm sm:text-base transition-all duration-200 placeholder:text-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden relative bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">Filters</span>
              {activeFiltersCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ring-2 ring-white">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-600">
                  <Filter className="w-4 h-4" />
                  <span>Category:</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-md scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-600">
                  <ArrowUpDown className="w-4 h-4" />
                  <span>Sort:</span>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-gray-100 border-0 rounded-lg text-sm font-medium text-gray-700 focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all duration-200 cursor-pointer hover:bg-gray-200"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>

              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-pink-600 hover:text-pink-700 font-semibold whitespace-nowrap flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-pink-50 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Mobile Filter Panel */}
          {isFilterOpen && (
            <div className="lg:hidden mt-4 p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-lg space-y-5 animate-fadeIn">
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-pink-600" />
                  Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-md'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <ArrowUpDown className="w-4 h-4 text-pink-600" />
                  Sort By
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white transition-all"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>

              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="w-full text-sm text-pink-600 hover:text-pink-700 font-semibold py-3 border-2 border-pink-300 rounded-xl hover:bg-pink-50 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Clear All Filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">
              Showing <span className="font-bold text-gray-900 text-base">{filteredProducts.length}</span> of <span className="font-semibold">{products.length}</span> products
            </p>
            {activeFiltersCount > 0 && (
              <span className="px-2.5 py-1 bg-pink-100 text-pink-700 text-xs font-semibold rounded-full">
                {activeFiltersCount} {activeFiltersCount === 1 ? 'filter' : 'filters'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mb-6">
              <Package className="w-10 h-10 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">We couldn't find any products matching your filters. Try adjusting your search criteria.</p>
            <button
              onClick={clearFilters}
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map(product => {
              const itemInCart = getItemInCart(product.id);
              const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

              return (
                <div
                  key={product.id}
                  className="group bg-white overflow-hidden transition-all duration-300 border border-gray-100 hover:border-pink-200 hover:-translate-y-1 cursor-pointer"
                  onClick={() => openQuickView(product)}
                >
                  <div className="relative overflow-hidden h-48 sm:h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openQuickView(product);
                        }}
                        className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
                      >
                        <Eye className="w-5 h-5" />
                        <span className="hidden sm:inline">Quick View</span>
                      </button>
                    </div>

                    {product.badge && (
                      <span
                        className={`absolute top-3 left-3 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-lg backdrop-blur-sm ${
                          product.badge === 'Trending'
                            ? 'bg-gradient-to-r from-pink-500 to-pink-600'
                            : 'bg-gradient-to-r from-green-500 to-green-600'
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}

                    {discount > 0 && (
                      <span className="absolute top-3 right-3 px-2.5 py-1.5 bg-red-500 text-white text-xs font-bold rounded-lg shadow-lg">
                        {discount}% OFF
                      </span>
                    )}
                  </div>

                  <div className="p-4 sm:p-5" onClick={(e) => e.stopPropagation()}>
                    <p className="text-xs font-bold text-pink-600 uppercase tracking-wider mb-2">
                      {product.category}
                    </p>

                    <h3 className="text-sm sm:text-base font-bold text-gray-900 min-h-[40px] sm:min-h-[48px] line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-2 hidden sm:block">
                      {product.description}
                    </p>

                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-xl sm:text-2xl font-bold bg-black to-purple-600 bg-clip-text text-transparent">
                        ₹{product.price.toLocaleString()}
                      </span>

                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {itemInCart ? (
                      <div className="flex items-center justify-center bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-300 rounded-xl overflow-hidden">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="p-3 hover:bg-pink-100 transition-colors flex-1"
                        >
                          <Minus className="w-5 h-5 text-pink-600 mx-auto" />
                        </button>

                        <span className="px-4 font-bold text-pink-600 text-lg min-w-[60px] text-center border-x-2 border-pink-300">
                          {itemInCart.quantity}
                        </span>

                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="p-3 hover:bg-pink-100 transition-colors flex-1"
                        >
                          <Plus className="w-5 h-5 text-pink-600 mx-auto" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-3 px-4 font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Enhanced Quick View Modal with Zoom */}
      {quickViewProduct && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity animate-fadeIn"
            onClick={closeQuickView}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none">
            <div
              className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden pointer-events-auto animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row h-full max-h-[95vh]">
                {/* Enhanced Image Gallery Section with Zoom */}
                <div className="lg:w-3/5 bg-gradient-to-br from-gray-50 to-gray-100 relative flex flex-col">
                  <button
                    onClick={closeQuickView}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                  </button>

                  {/* Main Image with Zoom */}
                  <div className="flex-1 relative flex items-center justify-center p-4 sm:p-8 overflow-hidden">
                    <div
                      ref={imageRef}
                      className="relative w-96 h-96 flex items-center justify-center cursor-crosshair"
                      onMouseMove={handleMouseMove}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        src={quickViewProduct.images?.[currentImageIndex] || quickViewProduct.image}
                        alt={quickViewProduct.name}
                        className="w-full h-full object-contain rounded-xl sm:rounded-2xl shadow-2xl transition-transform duration-200"
                        style={{
                          transform: isZoomed ? 'scale(2)' : 'scale(1)',
                          transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        }}
                      />

                      {/* Zoom Indicator */}
                      {!isZoomed && (
                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2">
                          <ZoomIn className="w-4 h-4" />
                          <span className="hidden sm:inline">Hover to zoom</span>
                        </div>
                      )}
                    </div>

                    {/* Navigation Arrows */}
                    {quickViewProduct.images && quickViewProduct.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110 z-10"
                        >
                          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110 z-10"
                        >
                          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    {quickViewProduct.images && quickViewProduct.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium z-10">
                        {currentImageIndex + 1} / {quickViewProduct.images.length}
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  {quickViewProduct.images && quickViewProduct.images.length > 1 && (
                    <div className="p-3 sm:p-4 bg-white border-t border-gray-200">
                      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {quickViewProduct.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setCurrentImageIndex(idx);
                              setIsZoomed(false);
                            }}
                            className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                              currentImageIndex === idx
                                ? 'border-pink-500 ring-2 ring-pink-200 scale-105'
                                : 'border-gray-200 hover:border-gray-300 opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={img}
                              alt={`${quickViewProduct.name} ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Details Section */}
                <div className="lg:w-2/5 p-5 sm:p-6 lg:p-8 overflow-y-auto">
                  <div className="space-y-4 sm:space-y-6">
                    {/* Badge and Category */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 sm:px-3 py-1 bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider rounded-full">
                        {quickViewProduct.category}
                      </span>
                      {quickViewProduct.badge && (
                        <span className="px-2.5 sm:px-3 py-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-xs font-bold rounded-full">
                          {quickViewProduct.badge}
                        </span>
                      )}
                    </div>

                    {/* Product Name */}
                    <div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {quickViewProduct.name}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600">{quickViewProduct.description}</p>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 sm:gap-3 py-3 sm:py-4 border-y border-gray-200">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        ₹{quickViewProduct.price.toLocaleString()}
                      </span>
                      {quickViewProduct.originalPrice && (
                        <>
                          <span className="text-lg sm:text-xl text-gray-400 line-through">
                            ₹{quickViewProduct.originalPrice.toLocaleString()}
                          </span>
                          <span className="px-2 sm:px-2.5 py-1 bg-red-100 text-red-600 text-xs sm:text-sm font-bold rounded-lg">
                            {Math.round(((quickViewProduct.originalPrice - quickViewProduct.price) / quickViewProduct.originalPrice) * 100)}% OFF
                          </span>
                        </>
                      )}
                    </div>

                    {/* Add to Cart Section */}
                    <div className="space-y-3">
                      {(() => {
                        const itemInCart = getItemInCart(quickViewProduct.id);
                        return itemInCart ? (
                          <div className="flex items-center justify-center bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-300 rounded-xl overflow-hidden">
                            <button
                              onClick={() => updateQuantity(quickViewProduct.id, -1)}
                              className="p-3 sm:p-4 hover:bg-pink-100 transition-colors flex-1"
                            >
                              <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 mx-auto" />
                            </button>
                            <span className="px-4 sm:px-6 font-bold text-pink-600 text-xl sm:text-2xl min-w-[60px] sm:min-w-[80px] text-center border-x-2 border-pink-300">
                              {itemInCart.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(quickViewProduct.id, 1)}
                              className="p-3 sm:p-4 hover:bg-pink-100 transition-colors flex-1"
                            >
                              <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 mx-auto" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              addToCart(quickViewProduct);
                            }}
                            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                          >
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                          </button>
                        );
                      })()}
                    </div>

                    {/* Additional Info */}
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 space-y-2">
                      <p className="text-xs sm:text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                        Premium quality product
                      </p>
                      <p className="text-xs sm:text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                        Fast delivery available
                      </p>
                      <p className="text-xs sm:text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                        Secure checkout via WhatsApp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Checkout Form Modal */}
      {isCheckoutFormOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity animate-fadeIn"
            onClick={() => setIsCheckoutFormOpen(false)}
          />
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 pointer-events-none overflow-y-auto">
            <div
              className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-lg pointer-events-auto animate-scaleIn overflow-hidden my-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
   <div className="bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 text-white p-3 sm:p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="relative">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold mb-0.5">Checkout Details</h2>
                      <p className="text-pink-100 text-xs">Complete your order information</p>
                    </div>
                    <button
                      onClick={() => setIsCheckoutFormOpen(false)}
                      className="hover:bg-white/20 rounded-full p-1.5 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="p-3 sm:p-4 space-y-3">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-900 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={customerDetails.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full px-3 py-2 text-sm border-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 ${
                      formErrors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-gray-900 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={customerDetails.phone}
                    onChange={handleInputChange}
                    placeholder="Enter 10-digit mobile number"
                    maxLength={10}
                    className={`w-full px-3 py-2 text-sm border-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 ${
                      formErrors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                    }`}
                  />
                  {formErrors.phone && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* Address Field */}
                <div>
                  <label htmlFor="address" className="block text-xs font-bold text-gray-900 mb-1">
                    Delivery Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={customerDetails.address}
                    onChange={handleInputChange}
                    placeholder="Enter your complete delivery address"
                    rows={2}
                    className={`w-full px-3 py-2 text-sm border-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 resize-none ${
                      formErrors.address ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                    }`}
                  />
                  {formErrors.address && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                      {formErrors.address}
                    </p>
                  )}
                </div>

                {/* Order Summary */}
                <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 rounded-lg p-3 border-2 border-pink-100">
                  <h3 className="text-xs font-bold text-gray-900 mb-2 flex items-center gap-1.5">
                    <ShoppingCart className="w-3.5 h-3.5 text-pink-600" />
                    Order Summary
                  </h3>
                  <div className="space-y-1.5 mb-2 max-h-28 overflow-y-auto">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between text-xs">
                        <span className="text-gray-700">{item.name} x {item.quantity}</span>
                        <span className="font-semibold text-gray-900">₹{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t-2 border-pink-200 flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-900">Total Amount</span>
                    <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      ₹{getTotalPrice().toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsCheckoutFormOpen(false)}
                    className="flex-1 px-3 py-2 text-sm border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 text-sm rounded-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Confirm Order
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Your order will be sent via WhatsApp
                </p>
              </form>
            </div>
          </div>
        </>
      )}

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 sm:bottom-8 right-2 sm:right-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-full p-4 shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 z-40 hover:scale-110"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center ring-4 ring-white animate-pulse">
            {getTotalItems()}
          </span>
        </button>
      )}

      {/* Cart Sidebar Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity animate-fadeIn"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[440px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-5 sm:p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-1">Shopping Cart</h2>
              <p className="text-pink-100 text-sm">{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart</p>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 sm:p-6 bg-gray-50">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mb-6">
                <ShoppingCart className="w-10 h-10 text-pink-600" />
              </div>
              <p className="text-gray-900 text-lg font-semibold mb-2">Your cart is empty</p>
              <p className="text-gray-500 text-sm">Add items to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1 text-sm line-clamp-2">{item.name}</h3>
                    <p className="text-pink-600 font-bold mb-3 text-base">₹{item.price.toLocaleString()}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 hover:bg-gray-200 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4 text-gray-700" />
                        </button>
                        <span className="px-4 font-bold text-gray-900 min-w-[40px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 hover:bg-gray-200 transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 transition-all p-2 rounded-lg"
                        title="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-gray-200 p-5 sm:p-6 bg-white">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4 mb-5">
              <div className="flex justify-between items-center">
                <span className="text-base sm:text-lg font-semibold text-gray-700">Subtotal</span>
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  ₹{getTotalPrice().toLocaleString()}
                </span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Proceed to Checkout
            </button>
            <p className="text-xs text-gray-500 text-center mt-3 flex items-center justify-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Secure checkout via WhatsApp
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
