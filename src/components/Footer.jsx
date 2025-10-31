import React from "react";
import logoImage from "../assets/logoSk.png";

import { useState } from "react";
import {
  ShoppingCart,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Leaf,
  Clock,
  Truck,
  Award,
  Users,
  ArrowUp,
  ExternalLink,
  Heart,
  Sparkles,
} from "lucide-react";

function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const quickLinks = [
    { name: "Home", href: "#home", icon: ShoppingCart },
    { name: "Products", href: "#products", icon: Award },
    { name: "Services", href: "#services", icon: Truck },
    { name: "About Us", href: "#about", icon: Users },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/freshhub",
      icon: Facebook,
      color: "hover:bg-blue-600",
      bgColor: "bg-blue-500",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/freshhub",
      icon: Instagram,
      color: "hover:bg-pink-600",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919876543210",
      icon: MessageCircle,
      color: "hover:bg-green-600",
      bgColor: "bg-green-500",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info & Logo */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3 group">
                {/* <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-xl">
                    <ShoppingCart className="h-8 w-8 text-white" />
                    <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-yellow-300 animate-pulse" />
                  </div>
                </div> */}
                <div className="relative">
                  <div className="absolute -inset-1  blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="relative bg-transparent rounded-xl transition-all duration-300 h-16 w-16 p-0">
                    {/* <ShoppingCart className="h-6 w-6 text-white transform group-hover:scale-110 transition-transform duration-300" /> */}
                    <img src={logoImage} className="h-full w-full" />

                    <Sparkles className="absolute -top-1 -right-1 h-4 w-4  text-amber-300 animate-pulse" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Sahu Kirana
                  </h3>
                  <p className="text-emerald-300 text-sm flex items-center space-x-1">
                    {/* <Leaf className="h-3 w-3" /> */}
                    <span>Quality Groceries, Anytime, Everytime</span>
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Your trusted wholesale grocery partner for over 20+ years,
                serving shops, restaurants, and events with premium quality
                products at competitive prices.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 bg-emerald-500/20 px-3 py-1 rounded-full text-sm">
                  <Award className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-300">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-500/20 px-3 py-1 rounded-full text-sm">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span className="text-blue-300">500+ Clients</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Quick Links</span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-emerald-400 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                        <link.icon className="h-4 w-4" />
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Contact Info</span>
              </h4>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Call Us</div>
                    <a
                      href="tel:+919876543210"
                      className="text-white hover:text-green-400 transition-colors duration-300 font-semibold"
                    >
                      +91 9926405552
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email Us</div>
                    <a
                      href="mailto:info@freshhub.com"
                      className="text-white hover:text-blue-400 transition-colors duration-300 font-semibold"
                    >
                      info@sahukirana.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors duration-300">
                    <MessageCircle className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">WhatsApp</div>
                    <a
                      href="https://wa.me/9926405552"
                      className="text-white hover:text-emerald-400 transition-colors duration-300 font-semibold"
                    >
                      +91 9926405552, 9754771990
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50">
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="h-5 w-5 text-emerald-400" />
                  <h5 className="font-semibold text-white">Business Hours</h5>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="text-emerald-400">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Map */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Find Us</span>
              </h4>

              {/* Address */}
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Visit Our Store</div>
                  <address className="text-white not-italic leading-relaxed">
                    {/* Sahu kirana store
                    <br /> */}
                    Near Do Pipal Baba Mandir, Seoni Malwa - 461223
                    <br />
                    Madhya Pradesh, India
                  </address>
                  <a
                    href="https://maps.app.goo.gl/br5BmFu6gYHSp25T6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 text-sm mt-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50">
                <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center group cursor-pointer hover:from-emerald-500/30 hover:to-teal-500/30 transition-all duration-300">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-white font-semibold">
                      Interactive Map
                    </div>
                    <div className="text-gray-400 text-sm">
                      Click to view location
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h5 className="font-semibold text-white mb-4 flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-pink-400" />
                  <span>Follow Us</span>
                </h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      onMouseEnter={() => setHoveredSocial(index)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <div
                        className={`w-12 h-12 ${social.bgColor} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}
                      >
                        <social.icon className="h-6 w-6 text-white" />
                      </div>
                      {hoveredSocial === index && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                          {social.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p>
                  &copy; 2025{" "}
                  <span className="text-emerald-400 font-semibold">
                    Sahu Kirana Store
                  </span>
                  . All Rights Reserved.
                </p>
                <p className="text-sm mt-1">
                  Proudly serving Seoni Malwa and surrounding areas since 1997
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Always Available Online</span>
                </div>

                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center hover:from-emerald-400 hover:to-teal-400 transform hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
