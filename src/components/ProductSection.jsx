import React from "react";

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ShoppingCart,
  Package,
  Coffee,
  Sparkles,
  Home,
  Heart,
  Star,
  Eye,
  Plus,
} from "lucide-react";

function ProductSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const productCategories = [
    {
      id: 1,
      title: "Staples & Essentials",
      subtitle: "Daily Kitchen Fundamentals",
      description:
        "Premium quality rice, wheat, pulses, flour, and cooking oils sourced from trusted suppliers",
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: Package,
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50",
      items: [
        "Basmati Rice",
        "Wheat Flour",
        "Toor Dal",
        "Sunflower Oil",
        "Semolina",
      ],
      badge: "Best Sellers",
      badgeColor: "bg-amber-100 text-amber-700",
    },
    {
      id: 2,
      title: "Spices & Masala",
      subtitle: "Authentic Indian Flavors",
      description:
        "Hand-picked aromatic spices and premium masala blends to enhance every dish",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: Sparkles,
      gradient: "from-red-500 to-rose-600",
      bgGradient: "from-red-50 to-rose-50",
      items: [
        "Garam Masala",
        "Turmeric Powder",
        "Red Chili",
        "Cumin Seeds",
        "Coriander",
      ],
      badge: "Premium Quality",
      badgeColor: "bg-red-100 text-red-700",
    },
    {
      id: 3,
      title: "Snacks & Beverages",
      subtitle: "Refreshing & Delicious",
      description:
        "Wide variety of snacks, soft drinks, juices, and refreshing beverages for all occasions",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: Coffee,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      items: [
        "Soft Drinks",
        "Fruit Juices",
        "Biscuits",
        "Namkeen",
        "Energy Drinks",
      ],
      badge: "Popular Choice",
      badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 4,
      title: "Household Essentials",
      subtitle: "Daily Care Products",
      description:
        "Complete range of cleaning supplies, personal care items, and household necessities",
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1994&q=80",
      icon: Home,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      items: [
        "Detergent",
        "Toilet Paper",
        "Hand Soap",
        "Dishwash",
        "Air Freshener",
      ],
      badge: "Bulk Available",
      badgeColor: "bg-green-100 text-green-700",
    },
    {
      id: 5,
      title: "Event & Wedding Supplies",
      subtitle: "Celebration Specialists",
      description:
        "Bulk packs, premium drinks, dry fruits, sweets, and party essentials for memorable events",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      icon: Heart,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      items: [
        "Dry Fruits",
        "Sweets Box",
        "Party Drinks",
        "Bulk Snacks",
        "Gift Hampers",
      ],
      badge: "Event Special",
      badgeColor: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-6 py-3 rounded-full font-semibold mb-6">
            <ShoppingCart className="w-5 h-5" />
            <span>Our Product Range</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Premium{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Product
            </span>{" "}
            Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of high-quality products, carefully
            curated for your business needs
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden border border-gray-100 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                minHeight: "500px",
              }}
              onMouseEnter={() => setActiveCategory(index)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}
                ></div>

                {/* Badge */}
                <div
                  className={`absolute top-4 left-4 ${category.badgeColor} px-3 py-1 rounded-full text-sm font-semibold`}
                >
                  {category.badge}
                </div>

                {/* Icon */}
                <div
                  className={`absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>

                {/* Quick View Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-3">
                    {category.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Product Items */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-emerald-100 hover:text-emerald-700 transition-colors duration-200 cursor-pointer"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View More Button */}
                <button
                  className={`group/btn w-full bg-gradient-to-r ${category.gradient} text-white py-4 px-6 rounded-2xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3`}
                >
                  <span>View All Products</span>
                  <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* Featured Highlights */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <div className="relative">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4">
                  Why Our Products Stand Out?
                </h3>
                <p className="text-emerald-100 text-xl max-w-3xl mx-auto">
                  We ensure every product meets our high standards of quality,
                  freshness, and value
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Star,
                    title: "Premium Quality",
                    description:
                      "Sourced from trusted suppliers with quality certifications",
                  },
                  {
                    icon: Package,
                    title: "Bulk Pricing",
                    description:
                      "Competitive wholesale rates for all quantity requirements",
                  },
                  {
                    icon: ShoppingCart,
                    title: "Wide Selection",
                    description:
                      "Over 1000+ products across all major categories",
                  },
                ].map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                    <p className="text-emerald-100 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Browse All Categories</span>
                  </button>
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                    <Plus className="w-5 h-5" />
                    <span>Request Custom Quote</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
