import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Grid,
  List,
  ShoppingCart,
  Star,
  Leaf,
  Award,
  Package,
  Sparkles,
  ArrowLeft,
  ChevronDown,
  Check,
  X,
} from "lucide-react";

const ProductsListingPage = () => {
  // Simulate useParams - replace with actual useParams from react-router-dom
  const categoryParam = "all"; // This would come from useParams()

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam || "all"
  );
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Update category when param changes
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const categories = [
    { id: "all", name: "All Products", icon: Package, count: 47 },
    { id: "staples", name: "Staples & Essentials", icon: Package, count: 15 },
    { id: "spices", name: "Spices & Masala", icon: Sparkles, count: 12 },
    { id: "snacks", name: "Snacks & Beverages", icon: ShoppingCart, count: 8 },
    { id: "household", name: "Household Essentials", icon: Award, count: 7 },
    { id: "events", name: "Event & Wedding Supplies", icon: Star, count: 5 },
  ];

  const brands = ["Premium", "Organic", "Local", "Imported", "House Brand"];

  const allProducts = [
    // Staples
    {
      id: 1,
      name: "Basmati Rice Premium",
      category: "staples",
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
      description: "Long grain aromatic rice",
      rating: 4.8,
      reviews: 234,
      inStock: true,
      organic: true,
      brand: "Premium",
    },
    {
      id: 2,
      name: "Whole Wheat Flour",
      category: "staples",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500",
      description: "Stone ground whole wheat",
      rating: 4.7,
      reviews: 189,
      inStock: true,
      organic: false,
      brand: "Local",
    },
    {
      id: 3,
      name: "Toor Dal Premium",
      category: "staples",
      image:
        "https://images.unsplash.com/photo-1596097635339-3e6bdbb92cff?w=500",
      description: "Pure yellow split peas",
      rating: 4.6,
      reviews: 156,
      inStock: true,
      organic: false,
      brand: "Premium",
    },
    {
      id: 4,
      name: "Sunflower Oil",
      category: "staples",
      image:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500",
      description: "Refined cooking oil",
      rating: 4.5,
      reviews: 201,
      inStock: true,
      organic: false,
      brand: "House Brand",
    },
    {
      id: 5,
      name: "Semolina (Rava)",
      category: "staples",
      image:
        "https://images.unsplash.com/photo-1587241321921-91ik4f7b52d?w=500",
      description: "Fine quality semolina",
      rating: 4.7,
      reviews: 143,
      inStock: true,
      organic: false,
      brand: "Local",
    },

    // Spices
    {
      id: 6,
      name: "Garam Masala",
      category: "spices",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500",
      description: "Authentic blend of spices",
      rating: 4.9,
      reviews: 312,
      inStock: true,
      organic: true,
      brand: "Premium",
    },
    {
      id: 7,
      name: "Turmeric Powder",
      category: "spices",
      image:
        "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=500",
      description: "Pure ground turmeric",
      rating: 4.8,
      reviews: 267,
      inStock: true,
      organic: true,
      brand: "Organic",
    },
    {
      id: 8,
      name: "Red Chili Powder",
      category: "spices",
      image:
        "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500",
      description: "Spicy and flavorful",
      rating: 4.7,
      reviews: 198,
      inStock: true,
      organic: false,
      brand: "Premium",
    },
    {
      id: 9,
      name: "Cumin Seeds",
      category: "spices",
      image:
        "https://images.unsplash.com/photo-1599909533568-c4f523aba546?w=500",
      description: "Aromatic whole cumin",
      rating: 4.6,
      reviews: 176,
      inStock: true,
      organic: true,
      brand: "Organic",
    },
    {
      id: 10,
      name: "Coriander Powder",
      category: "spices",
      image:
        "https://images.unsplash.com/photo-1599273565488-cf8c12e7bfc0?w=500",
      description: "Fresh ground coriander",
      rating: 4.7,
      reviews: 154,
      inStock: true,
      organic: false,
      brand: "Local",
    },

    // Snacks & Beverages
    {
      id: 11,
      name: "Premium Cola",
      category: "snacks",
      image:
        "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500",
      description: "Refreshing soft drink",
      rating: 4.4,
      reviews: 423,
      inStock: true,
      organic: false,
      brand: "Imported",
    },
    {
      id: 12,
      name: "Fruit Juice Pack",
      category: "snacks",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500",
      description: "Mixed fruit juice",
      rating: 4.6,
      reviews: 298,
      inStock: true,
      organic: true,
      brand: "Premium",
    },
    {
      id: 13,
      name: "Cream Biscuits",
      category: "snacks",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500",
      description: "Crunchy cream filled",
      rating: 4.5,
      reviews: 356,
      inStock: true,
      organic: false,
      brand: "House Brand",
    },
    {
      id: 14,
      name: "Namkeen Mix",
      category: "snacks",
      image:
        "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500",
      description: "Spicy Indian snack",
      rating: 4.7,
      reviews: 289,
      inStock: true,
      organic: false,
      brand: "Local",
    },
    {
      id: 15,
      name: "Energy Drink",
      category: "snacks",
      image:
        "https://images.unsplash.com/photo-1622543925917-763c34228255?w=500",
      description: "Instant energy boost",
      rating: 4.3,
      reviews: 198,
      inStock: true,
      organic: false,
      brand: "Imported",
    },

    // Household
    {
      id: 16,
      name: "Detergent Powder",
      category: "household",
      image:
        "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=500",
      description: "Superior cleaning power",
      rating: 4.6,
      reviews: 412,
      inStock: true,
      organic: false,
      brand: "Premium",
    },
    {
      id: 17,
      name: "Toilet Paper Roll",
      category: "household",
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500",
      description: "Soft and strong",
      rating: 4.5,
      reviews: 276,
      inStock: true,
      organic: false,
      brand: "House Brand",
    },
    {
      id: 18,
      name: "Hand Soap",
      category: "household",
      image:
        "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=500",
      description: "Antibacterial formula",
      rating: 4.7,
      reviews: 345,
      inStock: true,
      organic: false,
      brand: "Premium",
    },
    {
      id: 19,
      name: "Dishwash Liquid",
      category: "household",
      image:
        "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500",
      description: "Lemon fresh scent",
      rating: 4.6,
      reviews: 298,
      inStock: true,
      organic: false,
      brand: "Local",
    },

    // Events
    {
      id: 20,
      name: "Premium Dry Fruits",
      category: "events",
      image:
        "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=500",
      description: "Assorted dry fruits pack",
      rating: 4.9,
      reviews: 456,
      inStock: true,
      organic: true,
      brand: "Premium",
    },
    {
      id: 21,
      name: "Sweets Gift Box",
      category: "events",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500",
      description: "Traditional Indian sweets",
      rating: 4.8,
      reviews: 389,
      inStock: true,
      organic: false,
      brand: "Local",
    },
    {
      id: 22,
      name: "Party Drinks Pack",
      category: "events",
      image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=500",
      description: "Assorted beverages",
      rating: 4.5,
      reviews: 234,
      inStock: true,
      organic: false,
      brand: "Imported",
    },
    {
      id: 23,
      name: "Bulk Snacks Pack",
      category: "events",
      image:
        "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500",
      description: "Party size snacks",
      rating: 4.6,
      reviews: 312,
      inStock: true,
      organic: false,
      brand: "House Brand",
    },
  ];

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return matchesCategory && matchesSearch && matchesBrand;
  });

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedCategory("all");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-emerald-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 mb-6 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black">
                {categories.find((c) => c.id === selectedCategory)?.name ||
                  "All Products"}
              </h1>
            </div>
            <p className="text-emerald-200 text-lg">
              Browse our premium selection of {filteredProducts.length} quality
              products
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`lg:w-80 transform transition-all duration-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="sticky top-24">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden w-full bg-white rounded-2xl shadow-lg p-4 mb-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold">Filters</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    showFilters ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`space-y-6 ${
                  showFilters ? "block" : "hidden lg:block"
                }`}
              >
                {/* Categories Filter */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900 flex items-center space-x-2">
                      <Filter className="w-5 h-5 text-emerald-600" />
                      <span>Categories</span>
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                          selectedCategory === category.id
                            ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                            : "bg-gray-50 text-gray-700 hover:bg-emerald-50"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <category.icon className="w-5 h-5" />
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            selectedCategory === category.id
                              ? "bg-white/20"
                              : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    <span>Brands</span>
                  </h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label
                        key={brand}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-emerald-50 cursor-pointer transition-colors duration-200"
                      >
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                            selectedBrands.includes(brand)
                              ? "bg-emerald-500 border-emerald-500"
                              : "border-gray-300"
                          }`}
                        >
                          {selectedBrands.includes(brand) && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="sr-only"
                        />
                        <span className="text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedBrands.length > 0 || selectedCategory !== "all") && (
                  <button
                    onClick={clearFilters}
                    className="w-full bg-red-50 text-red-600 py-3 px-4 rounded-xl font-semibold hover:bg-red-100 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <X className="w-5 h-5" />
                    <span>Clear All Filters</span>
                  </button>
                )}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Search and View Controls */}
            <div
              className={`bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100 transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Search Bar */}
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 outline-none"
                  />
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === "grid"
                        ? "bg-white text-emerald-600 shadow-md"
                        : "text-gray-600"
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === "list"
                        ? "bg-white text-emerald-600 shadow-md"
                        : "text-gray-600"
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div
              className={`${
                viewMode === "grid"
                  ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-6"
              }`}
            >
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:scale-105 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  } ${viewMode === "list" ? "flex flex-col sm:flex-row" : ""}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Product Image */}
                  <div
                    className={`relative overflow-hidden ${
                      viewMode === "list" ? "sm:w-64" : "h-64"
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.organic && (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                          <Leaf className="w-3 h-3" />
                          <span>Organic</span>
                        </span>
                      )}
                      {!product.inStock && (
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Out of Stock
                        </span>
                      )}
                    </div>

                    {/* Quick View Button */}
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white">
                      <ShoppingCart className="w-5 h-5 text-emerald-600" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-emerald-600 text-sm font-semibold">
                          {product.brand}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-gray-700 font-semibold ml-2">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                      <ShoppingCart className="w-5 h-5" />
                      <span>Add to Inquiry</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <div className="w-32 h-32 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="w-16 h-16 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No Products Found
                </h3>
                <p className="text-gray-600 mb-8">
                  Try adjusting your filters or search query
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsListingPage;
