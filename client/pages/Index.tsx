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
      <section className="relative bg-background pt-32 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center lg:items-start">
            <div className="space-y-10 pt-8">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-none">
                Express Your Campus Pride
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Premium college merchandise designed for students, by students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="px-8 py-4 bg-accent text-accent-foreground rounded-md font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-base">
                  Shop Now
                </button>
                <button className="px-8 py-4 border-2 border-foreground text-foreground rounded-md font-bold hover:bg-secondary transition-all duration-200 text-base">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-96 lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-xl"></div>
              <div className="absolute inset-0 rounded-xl flex items-center justify-center">
                <Shirt size={160} className="text-white opacity-35" />
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
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-12">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@campuswear.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Address</h3>
                    <p className="text-muted-foreground">123 College Ave, University Town, ST 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-lg p-8 border border-border">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-md transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-md"></div>
                <span className="font-bold text-lg">CampusWear</span>
              </div>
              <p className="text-white/70 text-sm">Premium college merchandise for students everywhere.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Shop</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hoodies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">T-Shirts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Company</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Legal</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">© 2024 CampusWear. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
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
