import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  DollarSign,
  Shield,
  Clock,
  Users,
  Star,
  Award,
  Truck,
  CheckCircle,
  TrendingDown,
  Zap,
  Building,
  Coffee,
  Heart,
  Package,
  BadgeCheck,
  Timer,
  Sparkles,
} from "lucide-react";

function USPSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    customers: 0,
    orders: 0,
    satisfaction: 0,
    years: 0,
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const animateCounter = (key, target, duration = 2500) => {
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

          animateCounter("customers", 500);
          animateCounter("orders", 98);
          animateCounter("satisfaction", 99);
          animateCounter("years", 10);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const mainUSPs = [
    {
      icon: DollarSign,
      title: "Best Wholesale Prices",
      description:
        "Competitive pricing with bulk discounts for maximum savings on every order",
      highlight: "Up to 30% savings",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      badge: "LOWEST PRICE",
      badgeColor: "bg-green-100 text-green-700",
    },
    {
      icon: Shield,
      title: "Quality Assured Products",
      description:
        "100% genuine products with quality certifications and freshness guarantee",
      highlight: "ISO Certified",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      badge: "CERTIFIED",
      badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "Reliable delivery network ensuring your orders reach you exactly when promised",
      highlight: "99.5% on-time",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      badge: "GUARANTEED",
      badgeColor: "bg-purple-100 text-purple-700",
    },
    {
      icon: Users,
      title: "Serving Shops, Hotels & Events",
      description:
        "Specialized services for retail stores, restaurants, and large-scale events",
      highlight: "All business types",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      badge: "VERSATILE",
      badgeColor: "bg-orange-100 text-orange-700",
    },
    {
      icon: Star,
      title: "Trusted by 500+ Customers",
      description:
        "Growing family of satisfied customers who rely on us for their business needs",
      highlight: "4.9/5 rating",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      badge: "TRUSTED",
      badgeColor: "bg-pink-100 text-pink-700",
    },
  ];

  const trustBadges = [
    { icon: BadgeCheck, text: "ISO Certified", color: "text-blue-600" },
    { icon: Award, text: "Quality Assured", color: "text-emerald-600" },
    { icon: Timer, text: "24/7 Service", color: "text-purple-600" },
    { icon: Truck, text: "Same Day Delivery", color: "text-orange-600" },
  ];

  const businessTypes = [
    { icon: Building, title: "Retail Shops", count: "200+" },
    { icon: Coffee, title: "Restaurants", count: "150+" },
    { icon: Heart, title: "Event Planners", count: "100+" },
    { icon: Package, title: "Wholesalers", count: "50+" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-6 py-3 rounded-full font-semibold mb-6">
            <Sparkles className="w-5 h-5" />
            <span>Why Choose FreshHub</span>
            <Award className="w-4 h-4" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Your{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Trusted
            </span>{" "}
            Wholesale Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes us the preferred choice for businesses across
            the region
          </p>
        </div>

        {/* Trust Badges Bar */}
        <div
          className={`flex flex-wrap justify-center gap-6 mb-16 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
            >
              <badge.icon className={`w-5 h-5 ${badge.color}`} />
              <span className="font-semibold text-gray-700">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Main USPs Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {mainUSPs.map((usp, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden border border-gray-100 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } ${
                index === 4 ? "lg:col-span-2 xl:col-span-1 xl:col-start-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${usp.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              ></div>

              {/* Badge */}
              <div
                className={`absolute top-6 right-6 ${usp.badgeColor} px-3 py-1 rounded-full text-xs font-bold tracking-wide`}
              >
                {usp.badge}
              </div>

              <div className="relative p-8">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${usp.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <usp.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {usp.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {usp.description}
                  </p>
                  <div
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${usp.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>{usp.highlight}</span>
                  </div>
                </div>
              </div>

              {/* Hover Effect Line */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${usp.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              ></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`bg-gradient-to-r from-slate-900 via-gray-900 to-emerald-900 rounded-3xl p-12 mb-16 relative overflow-hidden transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                Our Track Record Speaks
              </h3>
              <p className="text-gray-300 text-xl">
                Numbers that reflect our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-emerald-400" />
                </div>
                <div className="text-4xl font-black text-white mb-2">
                  {counters.customers}+
                </div>
                <div className="text-gray-300">Happy Customers</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingDown className="w-10 h-10 text-blue-400" />
                </div>
                <div className="text-4xl font-black text-white mb-2">
                  {counters.orders}%
                </div>
                <div className="text-gray-300">Cost Savings</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-10 h-10 text-purple-400" />
                </div>
                <div className="text-4xl font-black text-white mb-2">
                  {counters.satisfaction}%
                </div>
                <div className="text-gray-300">Satisfaction Rate</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-orange-400" />
                </div>
                <div className="text-4xl font-black text-white mb-2">
                  {counters.years}+
                </div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Types We Serve */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              We Serve All Business Types
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From small retail shops to large-scale events, we cater to diverse
              business needs with customized solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessTypes.map((business, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <business.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {business.title}
                </h4>
                <div className="text-3xl font-black text-emerald-600 mb-2">
                  {business.count}
                </div>
                <div className="text-gray-600 text-sm">Active Clients</div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Join our family of satisfied customers and discover why we're
                the preferred wholesale partner
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Start Your Partnership</span>
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Schedule a Visit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default USPSection;
