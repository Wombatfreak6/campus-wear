import { ShoppingCart, Shirt, Heart, Zap, TrendingUp, Users, Phone, Mail, MapPin, ChevronRight, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Index() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(isDarkMode);
    updateTheme(isDarkMode);
  }, []);

  const updateTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    updateTheme(newIsDark);
  };
  const products = [
    {
      id: 1,
      name: "Classic College Hoodie",
      price: "$49.99",
      description: "Cozy premium hoodie with embroidered logo",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      badge: "Popular",
    },
    {
      id: 2,
      name: "Signature T-Shirt",
      price: "$24.99",
      description: "100% cotton, comfortable everyday wear",
      image: "bg-gradient-to-br from-slate-400 to-slate-600",
      badge: "New",
    },
    {
      id: 3,
      name: "Campus Cap",
      price: "$19.99",
      description: "Adjustable baseball cap with emblem",
      image: "bg-gradient-to-br from-amber-400 to-amber-600",
      badge: "Sale",
    },
    {
      id: 4,
      name: "Merchandise Bundle",
      price: "$79.99",
      description: "Hoodie + T-shirt + Cap combo pack",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Get your merch within 3-5 business days",
    },
    {
      icon: Heart,
      title: "Premium Quality",
      description: "High-quality materials and printing",
    },
    {
      icon: Users,
      title: "Student Pricing",
      description: "Special discounts for college students",
    },
  ];

  const offers = [
    {
      title: "Welcome Offer",
      discount: "15% OFF",
      description: "Your first purchase",
      price: "from $16.99",
    },
    {
      title: "Bulk Orders",
      discount: "20% OFF",
      description: "10+ items for groups",
      price: "from $39.99",
    },
    {
      title: "Student Verified",
      discount: "25% OFF",
      description: "With valid student ID",
      price: "from $18.74",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-md"></div>
              <span className="font-bold text-base">CampusWear</span>
            </div>
            <div className="hidden md:flex gap-10">
              <a href="#shop" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
                Shop
              </a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-secondary rounded-md transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="relative p-2 hover:bg-secondary rounded-md transition-colors">
                <ShoppingCart size={18} />
                <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-background pt-32 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center lg:items-start relative z-10">
            <div className="space-y-10 pt-8">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-none text-slate-900 dark:text-white">
                Express Your Campus Pride
              </h1>
              <p className="text-lg max-w-md leading-relaxed text-slate-700 dark:text-white/90">
                Premium college merchandise designed for students, by students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="px-8 py-4 bg-accent text-white font-bold rounded-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-base active:translate-y-0">
                  Shop Now
                </button>
                <button className="px-8 py-4 border-2 border-accent text-accent rounded-md font-bold hover:bg-accent hover:text-white transition-all duration-200 text-base">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-96 lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-xl"></div>
              <div className="absolute inset-0 rounded-xl flex items-center justify-center">
                <Shirt size={160} className="text-white opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-xl">Everything you need for authentic college apparel</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="space-y-4"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Listing Section */}
      <section id="shop" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">Featured Products</h2>
            <p className="text-lg text-muted-foreground">Curated collection of campus favorites</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="space-y-6 group"
              >
                <div className={`relative w-full aspect-square ${product.image} flex items-center justify-center overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300`}>
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider">
                      {product.badge}
                    </div>
                  )}
                  <Shirt size={100} className="text-white opacity-35" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-end pt-2">
                    <span className="text-2xl font-bold text-accent">{product.price}</span>
                    <button className="p-3 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors">
                      <ShoppingCart size={20} className="text-accent" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-20">
            <button className="px-8 py-4 border-2 border-accent text-accent rounded-md font-bold hover:bg-accent hover:text-white transition-all duration-200 text-base">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="relative w-full aspect-square">
              <div className="bg-gradient-to-br from-slate-500 to-slate-700 rounded-lg w-full h-full flex items-center justify-center shadow-lg border border-border/30 dark:border-border/50">
                <Shirt size={180} className="text-white opacity-40" />
              </div>
            </div>
            <div className="space-y-12 pt-8">
              <div className="space-y-4">
                <h2 className="text-5xl sm:text-6xl font-bold leading-none">Premium College Hoodie</h2>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <span className="text-foreground/70 text-base font-medium">(128 reviews)</span>
                </div>
              </div>

              <div className="space-y-10">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-5">Size</label>
                  <div className="flex gap-3 flex-wrap">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <button
                        key={size}
                        className="px-5 py-3 border-2 border-foreground/50 text-foreground rounded-md hover:border-accent hover:bg-accent/10 transition-all font-bold text-sm active:bg-foreground active:text-background"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-5">Color</label>
                  <div className="flex gap-4 flex-wrap">
                    {[
                      { name: "Navy", color: "bg-blue-900 border-2 border-blue-700 dark:border-blue-600" },
                      { name: "Gray", color: "bg-gray-600 border-2 border-gray-500" },
                      { name: "Black", color: "bg-black border-2 border-white/30" },
                      { name: "White", color: "bg-white border-3 border-foreground" },
                    ].map((col) => (
                      <button
                        key={col.name}
                        className={`w-14 h-14 rounded-lg hover:scale-110 hover:ring-2 hover:ring-accent transition-all shadow-md ring-offset-1 dark:ring-offset-background ${col.color}`}
                        title={col.name}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-7 pt-8 border-t border-border/50">
                <p className="text-foreground/80 leading-relaxed text-base">100% premium cotton with embroidered college logo. Perfect for campus and everyday wear.</p>
                <div className="space-y-3">
                  <div className="flex items-baseline gap-6">
                    <span className="text-6xl font-bold text-white">$49.99</span>
                    <span className="text-xl text-foreground/50 line-through">$69.99</span>
                    <span className="text-sm font-bold text-accent/80 uppercase tracking-wide">29% off</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="flex-1 px-8 py-4 bg-accent text-white font-bold rounded-md hover:shadow-lg hover:-translate-y-1 transition-all text-base active:translate-y-0">
                  Add to Cart
                </button>
                <button className="flex-1 px-8 py-4 border-2 border-accent text-accent rounded-md font-bold hover:bg-accent hover:text-white transition-all text-base">
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">Special Offers</h2>
            <p className="text-lg text-foreground/70">Limited time promotions for campus students</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, idx) => (
              <div
                key={idx}
                className="space-y-7 p-8 border-l-4 border-accent bg-secondary/50 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="text-accent font-bold text-xs uppercase tracking-widest">
                  {offer.title}
                </div>
                <div className="text-6xl font-bold text-white">{offer.discount}</div>
                <p className="text-foreground/80 text-base">{offer.description}</p>
                <div className="text-base font-bold text-accent/90">{offer.price}</div>
                <button className="w-full px-6 py-4 bg-accent text-white rounded-md font-bold hover:shadow-lg hover:-translate-y-1 transition-all text-base active:translate-y-0">
                  Claim Offer
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <h2 className="text-6xl sm:text-7xl font-bold leading-none">Ready to Show Your School Pride?</h2>
          <p className="text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
            Join thousands of students already wearing premium college merchandise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="px-8 py-4 bg-white text-primary rounded-md font-bold hover:shadow-lg hover:-translate-y-1 transition-all text-base active:translate-y-0">
              Start Shopping
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-md font-bold hover:bg-white hover:text-primary transition-all text-base">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-16">Get in Touch</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 pt-1">
                    <Phone size={26} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 pt-1">
                    <Mail size={26} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">hello@campuswear.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 pt-1">
                    <MapPin size={26} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Address</h3>
                    <p className="text-muted-foreground">123 College Ave, University Town, ST 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-lg p-10 border border-border">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-3">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-3">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 text-base"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-3">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 text-base resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button className="w-full px-6 py-4 bg-accent text-accent-foreground rounded-md font-bold hover:shadow-md transition-all text-base">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-md"></div>
                <span className="font-bold text-base">CampusWear</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">Premium college merchandise for students everywhere.</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xs uppercase tracking-widest">Shop</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hoodies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">T-Shirts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xs uppercase tracking-widest">Company</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xs uppercase tracking-widest">Legal</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-xs">© 2024 CampusWear. All rights reserved.</p>
              <div className="flex gap-8 text-xs">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
