import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Award, Truck, Package, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedProducts, Product } from "@/data/products";
import { getProductImage } from "@/lib/imageMap";
import ProductDetailModal from "@/components/ProductDetailModal";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-green-50 to-gray-50 relative overflow-hidden">
      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-green-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-green-400 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center bg-green-100 rounded-full px-4 py-2 mb-6">
            <Award className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-800">Premium Quality Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Product Catalogue
          </h2>
          <p className="text-base sm:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of agricultural solutions. From crop protection to plant nutrition, 
            we distribute only the highest quality products for farming success.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8"
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.05, rotateX: 3 }}
              transition={{ duration: 0.3 }}
              style={{ perspective: '1000px' }}
            >
              <Card
                className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-white relative"
                style={{
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12), 0 10px 20px rgba(0,0,0,0.08)',
                  backfaceVisibility: 'hidden',
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                {/* Quality Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-bold px-3 py-1.5">
                    QUALITY
                  </Badge>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="bg-white/95 text-gray-800 text-xs font-semibold px-3 py-1.5">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </Badge>
                </div>

                {/* Product Image Section - Larger */}
                <div
                  className="h-72 sm:h-80 lg:h-96 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-150 group-hover:to-gray-250 flex items-center justify-center transition-colors"
                  style={{
                    perspective: '1500px',
                    boxShadow: 'inset 0 10px 40px rgba(0,0,0,0.1), inset 0 -10px 40px rgba(255,255,255,0.5)'
                  }}
                >
                  <img
                    src={getProductImage(product.id, product.category, product.name)}
                    alt={`${product.name} - ${product.description}`}
                    className="w-full h-full object-contain object-center p-6 group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="high"
                    style={{
                      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
                      transformStyle: 'preserve-3d'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Stock Status Badge */}
                  {product.inStock && (
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-green-500 text-white text-xs font-semibold px-3 py-1.5">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Available
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <CardHeader className="pb-2 p-5 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-green-600 transition-colors line-height-tight mb-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 p-5 sm:p-6 pt-0">
                  {/* Active Ingredient/Composition */}
                  <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 sm:p-4">
                    <h5 className="text-xs font-semibold text-gray-700 mb-2">
                      {product.activeIngredient ? 'Active Ingredient:' : 'Composition:'}
                    </h5>
                    <p className="text-sm text-gray-700 font-medium">
                      {product.activeIngredient || product.composition}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h5 className="text-xs font-semibold text-gray-700 mb-2">Key Features:</h5>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Application Guide */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 sm:p-4">
                    <h5 className="text-xs font-semibold text-green-800 mb-2">Application Rate:</h5>
                    <p className="text-sm text-green-800 font-medium">{product.usage}</p>
                  </div>

                  {/* Pack Sizes */}
                  <div>
                    <h5 className="text-xs font-semibold text-gray-700 mb-2">Available Sizes:</h5>
                    <div className="flex flex-wrap gap-1">
                      {product.packSizes.slice(0, 4).map((size) => (
                        <Badge key={size} variant="outline" className="text-xs">
                          {size}
                        </Badge>
                      ))}
                      {product.packSizes.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{product.packSizes.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Details Button */}
                  <Button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full mt-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-2 h-auto"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    View Full Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-3xl mx-auto agriculture-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400"></div>
            
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-2">
                <Truck className="h-6 w-6 text-green-600" />
                <Package className="h-6 w-6 text-green-600" />
                <Award className="h-6 w-6 text-green-600" />
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Ready to Explore?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Browse our complete product catalogue with detailed specifications and expert recommendations.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link to="/products">
                View Full Catalogue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
