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
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md shadow-md"></div>
              <span className="font-bold text-lg">CampusWear</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#shop" className="text-muted-foreground hover:text-foreground transition-colors">
                Shop
              </a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="relative p-2 hover:bg-secondary rounded-lg transition-colors">
                <ShoppingCart size={20} />
                <span className="absolute top-1 right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-40">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full opacity-5 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center">
                <span className="px-4 py-2 bg-blue-500/10 text-accent rounded-full text-sm font-medium border border-accent/20">
                  Welcome to College Merch Hub
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Express Your Campus Pride
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Premium college merchandise designed for students, by students. Get exclusive hoodies, t-shirts, and accessories that represent your school spirit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-3.5 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
                  Shop Now
                  <ChevronRight size={18} />
                </button>
                <button className="px-8 py-3.5 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-96 lg:h-full min-h-[500px] lg:min-h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg"></div>
              <div className="absolute inset-0 rounded-2xl flex items-center justify-center">
                <Shirt size={140} className="text-white opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Everything you need for authentic college apparel</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-card rounded-lg border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center mb-4">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Listing Section */}
      <section id="shop" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Curated collection of campus favorites</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`relative h-48 ${product.image} flex items-center justify-center overflow-hidden`}>
                  {product.badge && (
                    <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-md text-xs font-semibold">
                      {product.badge}
                    </div>
                  )}
                  <Shirt size={80} className="text-white opacity-40" />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-base mb-1">{product.name}</h3>
                    <p className="text-muted-foreground text-xs line-clamp-2">{product.description}</p>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="text-lg font-semibold text-accent">{product.price}</span>
                    <button className="p-2.5 bg-accent/10 hover:bg-accent/20 rounded-md transition-colors">
                      <ShoppingCart size={18} className="text-accent" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <button className="px-8 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-all duration-200">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative h-96 lg:h-full min-h-[500px]">
              <div className="bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg h-full w-full flex items-center justify-center shadow-lg">
                <Shirt size={120} className="text-white opacity-40" />
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-3">Premium College Hoodie</h2>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <span className="text-muted-foreground font-medium">(128 reviews)</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-4">Size</label>
                  <div className="flex gap-3 flex-wrap">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <button
                        key={size}
                        className="px-4 py-2.5 border-2 border-border rounded-md hover:border-accent hover:bg-accent/5 transition-all font-medium text-sm"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-4">Color</label>
                  <div className="flex gap-3 flex-wrap">
                    {[
                      { name: "Navy", color: "bg-blue-900" },
                      { name: "Gray", color: "bg-gray-600" },
                      { name: "Black", color: "bg-black" },
                      { name: "White", color: "bg-white border-2 border-border" },
                    ].map((col) => (
                      <button
                        key={col.name}
                        className={`w-11 h-11 rounded-md hover:scale-110 transition-transform shadow-sm ${col.color}`}
                        title={col.name}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <p className="text-muted-foreground leading-relaxed">100% premium cotton with embroidered college logo. Perfect for campus and everyday wear. Available in multiple sizes and colors.</p>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl font-bold">$49.99</span>
                    <span className="text-lg text-muted-foreground line-through">$69.99</span>
                  </div>
                  <div className="text-sm font-medium text-accent">Save 29%</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex-1 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="flex-1 px-8 py-4 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-all flex items-center justify-center gap-2">
                  <Heart size={20} />
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Special Offers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Limited time promotions for campus students</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg p-8 border-l-4 border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-accent font-semibold text-xs mb-3 uppercase tracking-widest">
                  {offer.title}
                </div>
                <div className="text-5xl font-bold mb-3">{offer.discount}</div>
                <p className="text-muted-foreground mb-4 text-sm">{offer.description}</p>
                <div className="text-sm font-semibold text-accent mb-6">{offer.price}</div>
                <button className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-md transition-all">
                  Claim Offer
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Ready to Show Your School Pride?</h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students already wearing premium college merchandise. Limited stock available on popular items.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
              Start Shopping
              <ChevronRight size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-gray-600">hello@campuswear.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Address</h3>
                    <p className="text-gray-600">123 College Ave, University Town, ST 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button className="w-full px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                <span className="font-bold text-lg">CampusWear</span>
              </div>
              <p className="text-blue-100 text-sm">Premium college merchandise for students everywhere.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li><a href="#" className="hover:text-white transition">All Products</a></li>
                <li><a href="#" className="hover:text-white transition">Hoodies</a></li>
                <li><a href="#" className="hover:text-white transition">T-Shirts</a></li>
                <li><a href="#" className="hover:text-white transition">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-blue-100 text-sm">© 2024 CampusWear. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-100 hover:text-white transition">
                  Facebook
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition">
                  Instagram
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition">
                  Twitter
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition">
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
