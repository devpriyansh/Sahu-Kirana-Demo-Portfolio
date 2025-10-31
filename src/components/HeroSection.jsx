import React from "react";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ShoppingCart,
  Truck,
  Store,
  Users,
  Star,
  Play,
  Sparkles,
  Leaf,
  Package,
} from "lucide-react";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80", // Fresh groceries
    "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Delivery truck
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Warehouse/stock
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Event/wedding supplies
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Store, number: "500+", label: "Retail Partners" },
    { icon: Users, number: "50+", label: "Restaurant Clients" },
    { icon: Package, number: "1000+", label: "Products Available" },
    { icon: Star, number: "4.9", label: "Customer Rating" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-900">
      {/* Dynamic Background Images with Parallax Effect */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              currentSlide === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <img
              src={image}
              alt="Grocery Business"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-gray-900/60 to-emerald-900/70"></div>
          </div>
        ))}
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <Sparkles className="w-2 h-2 text-emerald-400/30" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center mt-4 space-x-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-4 py-2 text-emerald-300">
                <Leaf className="w-4 h-4" />
                <span className="text-sm font-medium">Trusted Since 1997</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
                  <span className="block bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">
                    Your Trusted
                  </span>
                  <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                    Wholesale Grocery
                  </span>
                  <span className="block bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">
                    Partner
                  </span>
                </h1>
              </div>

              {/* Sub-heading */}
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                Supplying{" "}
                <span className="text-emerald-400 font-semibold">
                  quality groceries
                </span>{" "}
                for shops, restaurants, and events at{" "}
                <span className="text-teal-400 font-semibold">bulk prices</span>
                .
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: ShoppingCart, text: "Premium Quality" },
                  { icon: Truck, text: "Fast Delivery" },
                  { icon: Store, text: "Bulk Pricing" },
                  { icon: Users, text: "24/7 Support" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                      <feature.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300 group-hover:text-emerald-300 transition-colors duration-300">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-3">
                    <ShoppingCart className="w-6 h-6" />
                    <span>View Products</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>

                <button className="group relative overflow-hidden border-2 border-emerald-400/50 text-emerald-400 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-400/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <Truck className="w-6 h-6" />
                    <span>Contact for Bulk Orders</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-6">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full border-2 border-white/20"
                      ></div>
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm">
                    500+ Happy Clients
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="text-gray-300 text-sm ml-2">
                    4.9/5 Rating
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Visual Elements */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {/* Floating Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transform hover:scale-105 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-black text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Video Preview Card */}
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">
                    Watch Our Story
                  </h3>
                  <p className="text-gray-300 text-center text-sm">
                    See how we're revolutionizing wholesale grocery supply
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-emerald-400 scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center space-y-2 text-white/60 hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
          <span className="text-sm font-medium transform -rotate-90 origin-center">
            Scroll
          </span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
