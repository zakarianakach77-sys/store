/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, 
  Search, 
  ShoppingCart, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Cloud, 
  Wind, 
  Layers, 
  Zap,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const FlashSaleBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-1">
      <div className="bg-primary text-white font-bold w-10 h-10 flex items-center justify-center rounded-lg text-lg shadow-sm">
        {value.toString().padStart(2, '0')}
      </div>
      <span className="text-[10px] uppercase font-semibold mt-1 text-primary">{label}</span>
    </div>
  );

  return (
    <div className="bg-secondary py-3 px-4 flex flex-col sm:flex-row items-center justify-center gap-3 border-b border-primary/10">
      <span className="font-bold text-primary tracking-wider text-sm sm:text-base animate-pulse">
        🔥 FLASH SALE ENDS SOON!
      </span>
      <div className="flex items-center">
        <TimeUnit value={timeLeft.hours} label="Hrs" />
        <span className="text-primary font-bold text-xl mb-4">:</span>
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <span className="text-primary font-bold text-xl mb-4">:</span>
        <TimeUnit value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button className="p-2 hover:bg-accent rounded-full transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Cloud className="text-white w-5 h-5 fill-current" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-text">SKYEASE</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-accent rounded-full transition-colors hidden sm:block">
            <Search className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-accent rounded-full transition-colors relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="py-8 sm:py-16 bg-gradient-to-b from-white to-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
          <img 
            src="https://picsum.photos/seed/cushion/800/800" 
            alt="Orthopedic Seat Cushion" 
            className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 z-20 bg-primary text-white font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
            SAVE 50%
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center lg:text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-1 rounded-full text-primary font-bold text-sm">
            <Star className="w-4 h-4 fill-current" />
            <span>4.9/5 Rating (12,400+ Reviews)</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-text leading-tight">
            The World’s #1 <br />
            <span className="text-primary">Orthopedic</span> Seat Cushion
          </h1>
          
          <p className="text-lg text-muted max-w-lg mx-auto lg:mx-0">
            Engineered for maximum support and lasting comfort. Sit longer, stand up without stiffness, and reclaim your posture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-primary">$49.99</span>
                <span className="text-xl text-muted line-through">$99.99</span>
              </div>
              <p className="text-sm font-medium text-muted">Pay in 4 installments of $12.50</p>
            </div>
          </div>

          <div className="space-y-4">
            <button className="btn-primary w-full sm:w-auto px-12 text-xl group">
              ADD TO CART
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-red-500 font-bold flex items-center justify-center lg:justify-start gap-2 animate-pulse">
              <Zap className="w-4 h-4 fill-current" />
              Only 7 items left in stock!
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              <span className="text-sm font-semibold">60-Day Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              <span className="text-sm font-semibold">Free Shipping</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Offers = () => {
  const [selected, setSelected] = useState(1);

  const options = [
    { id: 0, title: "Buy 1", price: "$49.99", discount: "50% OFF", tag: "" },
    { id: 1, title: "Buy 2", price: "$84.99", discount: "Extra 15% OFF", tag: "Best Pair Offer", popular: true },
    { id: 2, title: "Buy 4", price: "$159.99", discount: "Extra 20% OFF", tag: "Top Value Deal" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-black text-center mb-12">Choose Your Bundle & Save</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt) => (
            <div 
              key={opt.id}
              onClick={() => setSelected(opt.id)}
              className={`relative cursor-pointer transition-all duration-300 rounded-3xl p-6 border-2 ${
                selected === opt.id ? 'border-primary bg-secondary/20 shadow-xl scale-105' : 'border-accent bg-white hover:border-primary/50'
              }`}
            >
              {opt.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold">{opt.title}</h3>
                <div className="text-3xl font-black text-primary">{opt.price}</div>
                <div className="bg-primary/10 text-primary text-xs font-bold py-1 px-2 rounded-lg inline-block">
                  {opt.discount}
                </div>
                {opt.tag && <p className="text-sm font-semibold text-muted">{opt.tag}</p>}
                <div className={`w-6 h-6 rounded-full border-2 mx-auto flex items-center justify-center ${selected === opt.id ? 'border-primary bg-primary' : 'border-accent'}`}>
                  {selected === opt.id && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Layers className="w-8 h-8" />, title: "Ergonomic Design", desc: "Contoured to fit your body perfectly." },
    { icon: <Cloud className="w-8 h-8" />, title: "Memory Foam", desc: "Premium high-density foam for lasting support." },
    { icon: <Wind className="w-8 h-8" />, title: "Breathable Cover", desc: "Stay cool and dry all day long." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Pain Relief", desc: "Reduces pressure on tailbone and spine." },
  ];

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto text-primary">
                {f.icon}
              </div>
              <h4 className="font-bold text-lg">{f.title}</h4>
              <p className="text-sm text-muted">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductDetails = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sections = [
    { title: "Product Specifications", content: "Dimensions: 18 x 14 x 3 inches. Material: 100% Premium Memory Foam. Cover: Removable & Washable Mesh. Non-slip rubber bottom." },
    { title: "What Makes It Special?", content: "Unlike standard cushions, SkyEase uses a proprietary U-shaped ergonomic cutout that suspends your tailbone, preventing pressure and pain. Our foam never goes flat even after years of use." },
    { title: "Return & Refund Policy", content: "We offer a 60-day money-back guarantee. If you're not 100% satisfied, return it for a full refund, no questions asked. We even pay for the return shipping!" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-black text-center mb-12">Product Details</h2>
        <div className="space-y-4">
          {sections.map((s, i) => (
            <div key={i} className="border-b border-accent">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between font-bold text-lg text-left"
              >
                {s.title}
                {openIndex === i ? <ChevronUp /> : <ChevronDown />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-muted leading-relaxed">{s.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-center mb-16">Comfort Everywhere You Go</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: "https://picsum.photos/seed/office/600/400", title: "Office Work", desc: "Perfect for long hours at the desk." },
            { img: "https://picsum.photos/seed/car/600/400", title: "Driving", desc: "Make long commutes pain-free." },
            { img: "https://picsum.photos/seed/home/600/400", title: "Home Relaxation", desc: "Upgrade any chair in your house." },
          ].map((item, i) => (
            <div key={i} className="card overflow-hidden p-0 group">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const reviews = [
    { name: "Sarah J.", text: "I've tried 5 different cushions and this is the only one that actually works. My lower back pain is gone!", rating: 5, date: "2 days ago" },
    { name: "Michael R.", text: "Game changer for my office chair. I can sit for 8 hours without feeling like my tailbone is bruised.", rating: 5, date: "1 week ago" },
    { name: "Emma W.", text: "The quality of the foam is amazing. It's soft but firm enough to provide real support.", rating: 5, date: "3 days ago" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
            <span className="ml-2 font-bold text-text">4.9/5 Average</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="card space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-xs text-muted">{r.date}</span>
              </div>
              <p className="italic text-text">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold text-primary">
                  {r.name[0]}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">{r.name}</span>
                  <span className="text-xs text-green-500 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified Buyer
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-text text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Cloud className="text-white w-5 h-5 fill-current" />
              </div>
              <span className="text-2xl font-black tracking-tighter">SKYEASE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are dedicated to providing the highest quality orthopedic solutions for a pain-free life.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-lg mb-6">Quick Links</h5>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Shop All</li>
              <li className="hover:text-white cursor-pointer transition-colors">Our Story</li>
              <li className="hover:text-white cursor-pointer transition-colors">Track Order</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">Policies</h5>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Shipping Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Return Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">Newsletter</h5>
            <p className="text-gray-400 text-sm mb-4">Get 10% off your first order!</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border border-white/20 rounded-full px-4 py-2 flex-1 text-sm focus:outline-none focus:border-primary"
              />
              <button className="bg-primary p-2 rounded-full hover:bg-opacity-90 transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-xs">© 2026 SKYEASE. All rights reserved.</p>
          <div className="flex gap-4 grayscale opacity-50">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="h-4 invert" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/80 backdrop-blur-lg border-t border-accent sm:hidden"
        >
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-xs text-muted line-through">$99.99</span>
              <span className="text-xl font-black text-primary">$49.99</span>
            </div>
            <button className="btn-primary flex-1 py-3 text-lg">
              ADD TO CART
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/30">
      <FlashSaleBanner />
      <Header />
      
      <main>
        <Hero />
        
        <div className="bg-white py-8 border-y border-accent">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" />
              <span className="font-bold text-sm uppercase tracking-widest">Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-6 h-6" />
              <span className="font-bold text-sm uppercase tracking-widest">60-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-6 h-6" />
              <span className="font-bold text-sm uppercase tracking-widest">Free Shipping</span>
            </div>
          </div>
        </div>

        <Offers />
        <Features />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-black">Say Goodbye to Back Pain</h2>
              <p className="text-lg text-muted">
                Our orthopedic cushion is designed by physical therapists to provide immediate relief from sciatica, herniated discs, and general lower back fatigue.
              </p>
              <ul className="space-y-4">
                {[
                  "Suspends your tailbone in mid-air",
                  "Promotes healthy spinal alignment",
                  "Increases blood flow to the lower body",
                  "Fits any chair, sofa, or car seat"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/relief/800/600" 
                alt="Pain relief" 
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                <p className="text-sm font-bold text-primary mb-2">"It feels like sitting on a cloud!"</p>
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Benefits />
        <ProductDetails />
        <SocialProof />
        
        <section className="py-20 bg-primary text-white text-center">
          <div className="container mx-auto px-4 max-w-2xl space-y-8">
            <h2 className="text-4xl sm:text-5xl font-black">Ready for a Pain-Free Life?</h2>
            <p className="text-xl opacity-90">
              Join 50,000+ happy customers who have upgraded their sitting experience.
            </p>
            <button className="bg-white text-primary font-black py-5 px-12 rounded-full text-xl shadow-2xl hover:scale-105 transition-transform active:scale-95">
              GET YOURS NOW - 50% OFF
            </button>
            <div className="flex items-center justify-center gap-4 pt-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6 invert" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 invert" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 invert" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
