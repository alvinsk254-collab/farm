import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, CheckCircle } from "lucide-react";
import { Product } from "@/data/products";
import { getProductImage } from "@/lib/imageMap";

interface ProductCardProps {
  product: Product;
  viewMode: "grid" | "list";
  isFavorite: boolean;
  onFavoriteToggle: (productId: number) => void;
  onDetailsClick: (product: Product) => void;
  index: number;
}

export const ProductCard = ({
  product,
  viewMode,
  isFavorite,
  onFavoriteToggle,
  onDetailsClick,
  index,
}: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <motion.div
      id={`product-${product.id}`}
      initial={{ opacity: 0, y: 40, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, delay: index * 0.05, type: "spring", stiffness: 100 }}
      whileHover={{ y: -12, scale: viewMode === "grid" ? 1.08 : 1.03, rotateX: 5 }}
      style={{ perspective: 1000 }}
      className="group h-full"
    >
      <Card
        className={`h-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 group-hover:shadow-emerald-500/20 ${
          viewMode === "list" ? "flex flex-row" : "flex flex-col"
        }`}
        style={{
          boxShadow: '0 20px 50px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.1)',
          transform: 'translateZ(20px)',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased'
        }}
      >
        {/* Product Image Container */}
        <div
          className={`relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-150 group-hover:from-gray-100 group-hover:via-gray-120 group-hover:to-gray-200 transition-colors ${
            viewMode === "list" ? "w-56 flex-shrink-0" : "h-72 sm:h-80 w-full"
          }`}
          style={{
            boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.05), inset 0 -10px 30px rgba(255,255,255,0.8), 0 10px 30px rgba(0,0,0,0.1)',
            perspective: '1200px'
          }}
        >
          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
          )}

          {/* Product Image */}
          <img
            src={getProductImage(product.id, product.category, product.name)}
            alt={`${product.name} - Agricultural product`}
            className={`w-full h-full object-contain object-center p-4 group-hover:scale-110 transition-transform duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            decoding="async"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />

          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          {/* Quick Actions Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-emerald-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onFavoriteToggle(product.id)}
              className={`p-4 rounded-full transition-all shadow-xl ${
                isFavorite
                  ? "bg-red-500 text-white scale-110"
                  : "bg-white/30 text-white hover:bg-white/50 backdrop-blur-sm"
              }`}
            >
              <Heart
                className={`h-6 w-6 ${isFavorite ? "fill-current" : ""}`}
              />
            </motion.button>
          </motion.div>

          {/* Top Left Badge - Category */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="absolute top-3 left-3 z-10"
          >
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold shadow-lg backdrop-blur-sm px-3 py-1.5">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Badge>
          </motion.div>


          {/* Bottom Left Badge - Stock Status */}
          {product.inStock && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-4 left-4 z-10"
            >
              <Badge className="bg-green-500/95 text-white text-xs font-semibold shadow-md backdrop-blur-sm">
                <CheckCircle className="h-3 w-3 mr-1" />
                In Stock
              </Badge>
            </motion.div>
          )}
        </div>

        {/* Product Content */}
        <div className={`flex flex-col flex-1 bg-gradient-to-b from-white to-gray-50 ${viewMode === "list" ? "p-4 sm:p-5" : "p-3 sm:p-4"}`}>
          {/* Header */}
          <CardHeader className="pb-2 p-0 mb-2">
            <CardTitle
              className={`group-hover:text-green-600 transition-colors line-clamp-2 font-bold text-shadow ${
                viewMode === "list" ? "text-base sm:text-lg" : "text-sm sm:text-base"
              }`}
            >
              {product.name}
            </CardTitle>
            <CardDescription className={`text-gray-600 mt-0.5 leading-snug ${
              viewMode === "list" ? "text-xs sm:text-sm" : "text-xs"
            }`}>
              {product.description}
            </CardDescription>
          </CardHeader>

          {/* Content */}
          <CardContent className="space-y-2 p-0 flex-1">
            {/* Active Ingredient */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-gradient-to-r from-green-100/50 to-emerald-100/50 rounded-xl p-1.5 sm:p-2 border border-green-200/50"
            >
              <h5 className="text-xs font-semibold text-green-800 mb-0.5">
                {product.activeIngredient ? "Active:" : "Composition:"}
              </h5>
              <p className="text-xs text-green-700 leading-snug line-clamp-2">
                {product.activeIngredient || product.composition || "N/A"}
              </p>
            </motion.div>

            {/* Features - Only show key ones */}
            <div className="flex flex-wrap gap-0.5">
              {product.features.slice(0, 2).map((feature) => (
                <Badge
                  key={feature}
                  variant="secondary"
                  className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 border-0 font-semibold"
                >
                  {feature.substring(0, 20)}
                </Badge>
              ))}
            </div>

            {/* Application Guide */}
            <div className="bg-gradient-to-r from-blue-100/50 to-cyan-100/50 rounded-xl p-1.5 sm:p-2 border border-blue-200/50">
              <h5 className="text-xs font-semibold text-blue-800 mb-0.5">
                Use:
              </h5>
              <p className="text-xs text-blue-700 leading-snug line-clamp-2">
                {product.usage}
              </p>
            </div>
          </CardContent>

          {/* Footer Action */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-200"
          >
            <div className="text-xs text-gray-500 font-medium">
              ID: {product.id}
            </div>
            <Button
              size="sm"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-md w-full sm:w-auto"
              onClick={() => onDetailsClick(product)}
            >
              <BookOpen className="mr-1 h-4 w-4" />
              Details
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};
