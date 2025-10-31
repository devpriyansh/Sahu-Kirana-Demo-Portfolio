import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Clock,
  Award,
  Truck,
  Users,
  Heart,
  MapPin,
  Calendar,
  CheckCircle,
  Star,
  Building,
  ShoppingCart,
  Coffee,
} from "lucide-react";

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    deliveries: 0,
    rating: 0,
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const animateCounter = (key, target, duration = 2000) => {
            const start = Date.now();
            const animate = () => {
              const elapsed = Date.now() - start;
              const progress = Math.min(elapsed / duration, 1);
              const value = Math.floor(target * progress);
              setCounters((prev) => ({ ...prev, [key]: value }));
              if (progress < 1) requestAnimationFrame(animate);
            };
            animate();
          };

          animateCounter("years", 20);
          animateCounter("clients", 500);
          animateCounter("deliveries", 10000);
          animateCounter("rating", 49);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: Calendar,
      title: "20+ Years of Excellence",
      description: "Serving the community with dedication since 2013",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      title: "Premium Quality Assured",
      description: "Carefully sourced products from trusted suppliers",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "99.5% delivery success rate across all orders",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Heart,
      title: "Community Trust",
      description: "Built lasting relationships with local businesses",
      color: "from-rose-500 to-rose-600",
    },
  ];

  const services = [
    {
      icon: Building,
      title: "Local Shops",
      description: "Daily supplies for neighborhood stores",
    },
    {
      icon: Coffee,
      title: "Restaurants",
      description: "Bulk ingredients for food businesses",
    },
    {
      icon: Users,
      title: "Event Catering",
      description: "Weddings, functions & celebrations",
    },
    {
      icon: ShoppingCart,
      title: "Wholesale Orders",
      description: "Competitive rates for bulk purchases",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Our Story</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Sahu Kirana
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A decade of trust, quality, and service in the heart of our
            community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story & Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Main Story */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-emerald-100/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Journey
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We have been serving local shops, restaurants, and families for
                weddings & functions for over
                <span className="font-bold text-emerald-600"> 10 years</span>,
                providing the
                <span className="font-bold text-emerald-600">
                  {" "}
                  best quality groceries
                </span>{" "}
                at
                <span className="font-bold text-emerald-600">
                  {" "}
                  wholesale rates
                </span>
                .
              </p>
              <p className="text-gray-600 leading-relaxed">
                What started as a small family Kirana shop has grown into a
                trusted wholesale partner for businesses across the region. Our
                commitment to quality, reliability, and customer satisfaction
                has made us the go-to choice for bulk grocery needs.
              </p>
            </div>

            {/* Service Areas */}
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Location Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-4">
              <MapPin className="w-6 h-6 text-emerald-600" />
              <div>
                <div className="font-bold text-gray-900">
                  Serving Seoni Malwa & Surrounding Areas
                </div>
                <div className="text-gray-600 text-sm">
                  Local delivery within 24 hours
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Images & Stats */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Main Image */}
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Our Store and Team"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="absolute inset-4 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-lg font-bold">Our Warehouse & Team</div>
                  <div className="text-sm opacity-90">Quality starts here</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black">{counters.years}+</div>
                <div className="text-blue-100 text-sm">Years of Service</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black">{counters.clients}+</div>
                <div className="text-emerald-100 text-sm">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black">
                  {Math.floor(counters.deliveries / 100)}K+
                </div>
                <div className="text-purple-100 text-sm">
                  Successful Deliveries
                </div>
              </div>
              <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black">
                  {(counters.rating / 10).toFixed(1)}
                </div>
                <div className="text-rose-100 text-sm">Star Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Sahu Kirana?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has made us the preferred wholesale
              partner for businesses across the region
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Partner with Us?
              </h3>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied customers who trust us for their
                wholesale grocery needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Start Your Order Today
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
