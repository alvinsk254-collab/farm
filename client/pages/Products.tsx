import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Filter, ArrowRight, Zap, Shield, Leaf, Sprout, Package, CheckCircle, Heart, Eye, Truck, Phone, BookOpen, FileText, Info } from "lucide-react";
import { products, getProductsByCategory, searchProducts, Product } from "@/data/products";
import SearchComponent from "@/components/common/SearchComponent";
import { useSearchParams, Link } from "react-router-dom";
import { getProductImage, getCategoryImage } from "@/lib/imageMap";
import ProductDetailModal from "@/components/ProductDetailModal";
import { ProductCard } from "@/components/ProductCard";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);

  // Get search term and category from URL params
  const searchFromUrl = searchParams.get('search') || '';
  const categoryFromUrl = searchParams.get('category') || 'all';

  // Initialize category from URL on component mount
  useEffect(() => {
    if (categoryFromUrl && categoryFromUrl !== selectedCategory) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);


  useEffect(() => {
    let results = products;

    // Apply search if there's a search term from URL
    if (searchFromUrl) {
      results = searchProducts(searchFromUrl);
    }

    // Filter by category
    if (selectedCategory !== "all") {
      results = results.filter(product => product.category === selectedCategory);
    }

    // Sort products
    results.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return b.id - a.id;
        case "category":
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    setFilteredProducts(results);
    setCurrentPage(1); // Reset to first page when filtering
  }, [searchFromUrl, selectedCategory, sortBy]);

  // Calculate pagination
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductSelect = (product: Product) => {
    const productElement = document.getElementById(`product-${product.id}`);
    if (productElement) {
      productElement.scrollIntoView({ behavior: 'smooth' });
      productElement.classList.add('ring-2', 'ring-green-500');
      setTimeout(() => {
        productElement.classList.remove('ring-2', 'ring-green-500');
      }, 3000);
    }
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleConsultation = (product: Product) => {
    // Redirect to agronomists page with product context
    window.location.href = `/agronomists?product=${encodeURIComponent(product.name)}`;
  };

  const handleProductInfo = (product: Product) => {
    // Show detailed product information
    const info = `
Product: ${product.name}
Category: ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}
Active Ingredient: ${product.activeIngredient || product.composition}
Pack Sizes: ${product.packSizes.join(', ')}
Usage: ${product.usage}

For detailed specifications, dosage rates, and technical data sheets, please contact our technical team.
    `;
    alert(info);
  };

  const handleBookService = (product: Product) => {
    // Book consultation service for the product
    const message = `I would like to book a consultation service for ${product.name}. Please contact me to schedule an appointment.`;
    const phoneNumber = '+254705824633';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleProductDetails = (product: Product) => {
    setSelectedProductForDetail(product);
  };

  const categoryData = [
    {
      value: "all",
      label: "All Categories",
      count: products.length,
      color: "from-gray-500 to-gray-700",
      icon: <Package className="h-6 w-6" />,
      description: "Browse our complete agricultural product catalogue",
      image: getCategoryImage("all")
    },
    {
      value: "insecticides",
      label: "Insecticides",
      count: products.filter(p => p.category === "insecticides").length,
      color: "from-red-500 to-orange-500",
      icon: <Zap className="h-6 w-6" />,
      description: "Effective pest control solutions for crop protection",
      image: getCategoryImage("insecticides")
    },
    {
      value: "fungicides",
      label: "Fungicides",
      count: products.filter(p => p.category === "fungicides").length,
      color: "from-green-500 to-cyan-500",
      icon: <Shield className="h-6 w-6" />,
      description: "Advanced disease protection for healthier crops",
      image: getCategoryImage("fungicides")
    },
    {
      value: "herbicides",
      label: "Herbicides",
      count: products.filter(p => p.category === "herbicides").length,
      color: "from-green-500 to-emerald-500",
      icon: <Leaf className="h-6 w-6" />,
      description: "Comprehensive weed management solutions",
      image: getCategoryImage("herbicides")
    },
    {
      value: "fertilizers",
      label: "Foliar Fertilizers",
      count: products.filter(p => p.category === "fertilizers").length,
      color: "from-yellow-500 to-amber-500",
      icon: <Sprout className="h-6 w-6" />,
      description: "Premium plant nutrition for maximum yield",
      image: getCategoryImage("fertilizers")
    },
    {
      value: "veterinary",
      label: "Veterinary",
      count: products.filter(p => p.category === "veterinary").length,
      color: "from-purple-500 to-pink-500",
      icon: <Heart className="h-6 w-6" />,
      description: "Animal health and nutrition supplements",
      image: getCategoryImage("veterinary")
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap": return <Zap className="h-6 w-6" />;
      case "Shield": return <Shield className="h-6 w-6" />;
      case "Leaf": return <Leaf className="h-6 w-6" />;
      case "Sprout": return <Sprout className="h-6 w-6" />;
      default: return <Package className="h-6 w-6" />;
    }
  };

  return (
    <Layout>
      <ProductDetailModal
        product={selectedProductForDetail}
        isOpen={!!selectedProductForDetail}
        onClose={() => setSelectedProductForDetail(null)}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-8 sm:py-12 lg:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/2868982/pexels-photo-2868982.jpeg?auto=compress&cs=tinysrgb&w=1920')`
            }}
          ></div>
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-shadow-lg leading-tight">
                Product Catalogue
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-green-100 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
                Explore our comprehensive range of agricultural products. Quality solutions for every farming need,
                backed by expert knowledge and reliable distribution.
              </p>
              <div className="max-w-md mx-auto px-2">
                <SearchComponent
                  placeholder="Search products..."
                  onProductSelect={handleProductSelect}
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-3 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Browse by Category</h2>
              <p className="text-sm sm:text-base text-gray-600 px-2 sm:px-0">Select a category to explore our specialized agricultural solutions</p>
            </motion.div>

            <Tabs value={selectedCategory} onValueChange={(value) => {
              setSelectedCategory(value);
              setSearchParams(value === 'all' ? {} : { category: value });
            }} className="w-full">
              <TabsList className="grid w-full grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-6 sm:mb-8 h-auto bg-gradient-to-r from-green-50 to-emerald-50 p-2 rounded-2xl gap-2 sm:gap-1">
                {categoryData.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="flex-col h-16 xs:h-18 sm:h-20 lg:h-24 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105 border-0 data-[state=active]:text-green-600 text-center p-2"
                  >
                    <div className="text-green-600 mb-1 sm:mb-2 transform transition-transform duration-300 hover:scale-110 flex-shrink-0">
                      {category.icon}
                    </div>
                    <div className="text-xs sm:text-sm font-bold leading-tight">{category.label}</div>
                    <div className="text-xs text-gray-500 font-medium hidden xs:block">{category.count} products</div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {categoryData.map((category) => (
                <TabsContent key={category.value} value={category.value}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8"
                  >
                    <Card className="border-0 shadow-xl overflow-hidden rounded-3xl">
                      <div className="relative h-48 sm:h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                        <img
                          src={category.image}
                          alt={`${category.label} - ${category.description}`}
                          className="w-full h-full object-contain object-center p-6 transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                          decoding="async"
                          fetchPriority="high"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                          <div>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                              className="text-white mb-6 mx-auto w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                            >
                              {category.icon}
                            </motion.div>
                            <motion.h3
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              className="text-2xl sm:text-3xl font-bold mb-3 drop-shadow-lg"
                            >
                              {category.label}
                            </motion.h3>
                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              className="text-white/95 text-sm sm:text-base max-w-md leading-relaxed drop-shadow-md"
                            >
                              {category.description}
                            </motion.p>
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 }}
                              className="mt-6"
                            >
                              <Badge className="bg-green-600/90 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg">
                                {category.count} Products Available
                              </Badge>
                            </motion.div>
                          </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="text-white/80 text-2xl font-bold">{category.count}</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Filters and Sort Section */}
        <section className="py-4 sm:py-6 bg-white border-t border-b">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2 sm:gap-4 items-center w-full sm:w-auto justify-center sm:justify-start">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 sm:w-48 h-10">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="category">Category</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center gap-1 sm:gap-2 bg-gray-100 rounded-lg p-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="h-8 sm:h-10 w-16 sm:w-20 text-xs sm:text-sm"
                  >
                    Grid
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="h-8 sm:h-10 w-16 sm:w-20 text-xs sm:text-sm"
                  >
                    List
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-600 text-center sm:text-left">
                <span className="text-xs sm:text-sm">
                  Showing {filteredProducts.length} of {products.length} products
                  {searchFromUrl && (
                    <span className="ml-1 sm:ml-2 block sm:inline">
                      for "<span className="font-medium text-green-600">{searchFromUrl}</span>"
                    </span>
                  )}
                </span>
                {favorites.length > 0 && (
                  <Badge className="bg-red-500 text-white">
                    {favorites.length} favorites
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className={viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-6"
              }
            >
              {currentProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                  isFavorite={favorites.includes(product.id)}
                  onFavoriteToggle={toggleFavorite}
                  onDetailsClick={handleProductDetails}
                  index={index}
                />
              ))}
            </motion.div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-gray-400 mb-4">
                  <Package className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                <Button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchParams({});
                  }}
                  variant="outline"
                >
                  Clear filters
                </Button>
              </motion.div>
            )}
          </div>

          {/* Pagination */}
          {filteredProducts.length > itemsPerPage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row justify-center items-center mt-12 mb-8 space-y-4 sm:space-y-0"
            >
              <div className="flex items-center space-x-2">
                {/* Previous Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 text-xs sm:text-sm"
                >
                  <span className="hidden sm:inline">Previous</span>
                  <span className="sm:hidden">Prev</span>
                </Button>

                {/* Page Numbers */}
                <div className="flex space-x-1">
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    let pageNumber;
                    if (totalPages <= 5) {
                      pageNumber = i + 1;
                    } else if (currentPage <= 3) {
                      pageNumber = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNumber = totalPages - 4 + i;
                    } else {
                      pageNumber = currentPage - 2 + i;
                    }

                    return (
                      <Button
                        key={pageNumber}
                        variant={currentPage === pageNumber ? "default" : "outline"}
                        size="sm"
                        onClick={() => handlePageChange(pageNumber)}
                        className={`w-10 h-10 ${
                          currentPage === pageNumber
                            ? "bg-green-600 hover:bg-green-700"
                            : "hover:bg-green-50"
                        }`}
                      >
                        {pageNumber}
                      </Button>
                    );
                  })}
                </div>

                {/* Next Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 text-xs sm:text-sm"
                >
                  <span className="hidden sm:inline">Next</span>
                  <span className="sm:hidden">Next</span>
                </Button>
              </div>

              {/* Results Info */}
              <div className="sm:ml-8 text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems} products
              </div>
            </motion.div>
          )}
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/18051955/pexels-photo-18051955.jpeg?auto=compress&cs=tinysrgb&w=1920')`
            }}
          ></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Need Expert Product Recommendations?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Our experienced agronomists can help you select the right products for your specific crops, 
                soil conditions, and farming objectives. Get professional guidance today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  <Link to="/agronomists">
                    <Phone className="mr-2 h-5 w-5" />
                    Consult Expert
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <Link to="/services">
                    <Truck className="mr-2 h-5 w-5" />
                    Our Services
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;
