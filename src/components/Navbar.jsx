import React from "react";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ShoppingCart,
  Phone,
  Sparkles,
  Leaf,
} from "lucide-react";
import logoImage from "../assets/logoSk.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-2xl border-b border-emerald-100/50"
          : "bg-gradient-to-r from-emerald-50/80 via-white/90 to-teal-50/80 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div> */}
              <div className="absolute -inset-1  blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              {/* <div className="relative bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 h-16 w-16"> */}
              <div className="relative bg-transparent rounded-xl transition-all duration-300 h-16 w-16 p-0">
                {/* <ShoppingCart className="h-6 w-6 text-white transform group-hover:scale-110 transition-transform duration-300" /> */}
                <img src={logoImage} className="h-full w-full" />

                <Sparkles className="absolute -top-1 -right-1 h-4 w-4  text-amber-300 animate-pulse" />
              </div>
            </div>
            <div className="group-hover:transform group-hover:scale-105 transition-transform duration-300">
              <h1 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Sahu Kirana
              </h1>
              <p className="text-xs text-emerald-600 font-medium hidden sm:block flex items-center space-x-1">
                {/* <Leaf className="h-3 w-3" /> */}
                <span>Quality Groceries, Anytime, Everytime</span>
              </p>
            </div>
          </div>

          {/* Enhanced Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 font-semibold transition-all duration-300 group"
              >
                <span className="relative z-10 group-hover:text-emerald-600 transition-colors duration-300">
                  {item.name}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-3/4 transition-all duration-300"></div>
              </a>
            ))}

            {/* Enhanced Products Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 font-semibold transition-all duration-300 group"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <span className="relative z-10 group-hover:text-emerald-600 transition-colors duration-300">
                  Products
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-all duration-300 group-hover:text-emerald-500 ${
                    isProductsOpen ? "rotate-180 text-emerald-600" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300"></div>
              </button>
              <div
                className={`absolute left-0 mt-2 w-72 transition-all duration-300 ${
                  isProductsOpen
                    ? "opacity-100 visible transform translate-y-0"
                    : "opacity-0 invisible transform -translate-y-4"
                }`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-100/50 overflow-hidden">
                  <div className="p-2">
                    {[
                      {
                        name: "Premium Spices",
                        emoji: "🌶️",
                        desc: "Authentic & aromatic spices",
                      },
                      {
                        name: "Beverages",
                        emoji: "🥤",
                        desc: "Refreshing drinks & juices",
                      },
                      {
                        name: "Event Supplies",
                        emoji: "🎉",
                        desc: "Party & celebration essentials",
                      },
                      {
                        name: "Organic Products",
                        emoji: "🌿",
                        desc: "Certified organic items",
                      },
                    ].map((item, index) => (
                      <a
                        key={item.name}
                        href={`#${item.name.toLowerCase().replace(" ", "-")}`}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 group/item"
                      >
                        <span className="text-2xl transform group-hover/item:scale-110 transition-transform duration-300">
                          {item.emoji}
                        </span>
                        <div>
                          <div className="font-semibold text-gray-800 group-hover/item:text-emerald-600 transition-colors duration-300">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500 group-hover/item:text-emerald-500 transition-colors duration-300">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 font-semibold transition-all duration-300 group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span className="relative z-10 group-hover:text-emerald-600 transition-colors duration-300">
                  Services
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-all duration-300 group-hover:text-emerald-500 ${
                    isServicesOpen ? "rotate-180 text-emerald-600" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300"></div>
              </button>
              <div
                className={`absolute left-0 mt-2 w-72 transition-all duration-300 ${
                  isServicesOpen
                    ? "opacity-100 visible transform translate-y-0"
                    : "opacity-0 invisible transform -translate-y-4"
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-100/50 overflow-hidden">
                  <div className="p-2">
                    {[
                      {
                        name: "Bulk Supply",
                        emoji: "📦",
                        desc: "Wholesale & bulk orders",
                      },
                      {
                        name: "Home Delivery",
                        emoji: "🚚",
                        desc: "Fast & reliable delivery",
                      },
                      {
                        name: "Event Catering",
                        emoji: "🍽️",
                        desc: "Complete event solutions",
                      },
                      {
                        name: "Restaurant Supply",
                        emoji: "👨‍🍳",
                        desc: "Professional kitchen needs",
                      },
                    ].map((item, index) => (
                      <a
                        key={item.name}
                        href={`#${item.name.toLowerCase().replace(" ", "-")}`}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 group/item"
                      >
                        <span className="text-2xl transform group-hover/item:scale-110 transition-transform duration-300">
                          {item.emoji}
                        </span>
                        <div>
                          <div className="font-semibold text-gray-800 group-hover/item:text-emerald-600 transition-colors duration-300">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500 group-hover/item:text-emerald-500 transition-colors duration-300">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {[
              { name: "Gallery", href: "#gallery" },
              { name: "Reviews", href: "#testimonials" },
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 font-semibold transition-all duration-300 group"
              >
                <span className="relative z-10 group-hover:text-emerald-600 transition-colors duration-300">
                  {item.name}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-3/4 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Enhanced CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/9926405552"
              className="hidden sm:inline-flex items-center space-x-2 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative px-6 py-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-bold rounded-2xl shadow-lg group-hover:shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 animate-pulse" />
                  <span>Get Quote</span>
                  <Sparkles className="h-3 w-3" />
                </div>
              </div>
            </a>

            {/* Enhanced Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-3 rounded-xl text-gray-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 transform hover:scale-110"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-out ${
            isMenuOpen
              ? "max-h-screen opacity-100 transform translate-y-0"
              : "max-h-0 opacity-0 transform -translate-y-4"
          } overflow-hidden`}
        >
          <div className="py-6 space-y-3 border-t border-emerald-100/50 bg-gradient-to-b from-emerald-50/50 to-teal-50/50 rounded-b-2xl backdrop-blur-sm">
            {[
              { name: "Home", href: "#home", icon: "🏠" },
              { name: "About Us", href: "#about", icon: "👥" },
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-6 py-3 text-gray-700 hover:text-emerald-600 hover:bg-white/70 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-semibold">{item.name}</span>
              </a>
            ))}

            {/* Mobile Products */}
            <div>
              <button
                onClick={toggleProducts}
                className="flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:text-emerald-600 hover:bg-white/70 rounded-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">🛒</span>
                  <span className="font-semibold">Products</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ${
                  isProductsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="pl-12 pr-6 space-y-2 pt-2">
                  {[
                    "Fresh Groceries",
                    "Premium Spices",
                    "Beverages",
                    "Event Supplies",
                    "Organic Products",
                  ].map((item, index) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="block py-2 text-gray-600 hover:text-emerald-600 transition-colors duration-300 transform hover:translate-x-2"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Services */}
            <div>
              <button
                onClick={toggleServices}
                className="flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:text-emerald-600 hover:bg-white/70 rounded-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">⚡</span>
                  <span className="font-semibold">Services</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ${
                  isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="pl-12 pr-6 space-y-2 pt-2">
                  {[
                    "Bulk Supply",
                    "Home Delivery",
                    "Event Catering",
                    "Restaurant Supply",
                  ].map((item, index) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="block py-2 text-gray-600 hover:text-emerald-600 transition-colors duration-300 transform hover:translate-x-2"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {[
              { name: "Gallery", href: "#gallery", icon: "🖼️" },
              { name: "Reviews", href: "#testimonials", icon: "⭐" },
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-6 py-3 text-gray-700 hover:text-emerald-600 hover:bg-white/70 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-semibold">{item.name}</span>
              </a>
            ))}

            {/* Enhanced Mobile CTA */}
            <div className="px-6 pt-4">
              <a
                href="#contact"
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="h-5 w-5 animate-pulse" />
                <span>Get Your Quote Now</span>
                <Sparkles className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
