import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Droplet, Leaf, Zap, Package, Target, Gauge, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { getProductImage } from "@/lib/imageMap";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetailModal = ({
  product,
  isOpen,
  onClose,
}: ProductDetailModalProps) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
            className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header with Image */}
            <div className="relative h-96 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden group">
              <img
                src={getProductImage(product.id, product.category, product.name)}
                alt={product.name}
                className="w-full h-full object-contain object-center p-8 group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-6 right-6 bg-white/95 hover:bg-white p-2 rounded-full shadow-xl transition-all backdrop-blur-sm"
              >
                <X className="h-6 w-6 text-gray-900" />
              </motion.button>

              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-6 left-6"
              >
                <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm px-4 py-2 font-bold shadow-lg">
                  {product.category.charAt(0).toUpperCase() +
                    product.category.slice(1)}
                </Badge>
              </motion.div>

            </div>

            {/* Content */}
            <div className="p-8 lg:p-10">
              {/* Product Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mb-8"
              >
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                  {product.name}
                </h1>
                {product.inStock && (
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 font-semibold">In Stock - Ready to Order</span>
                  </div>
                )}
              </motion.div>

              {/* Main Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-10 border-l-4 border-green-600 shadow-md"
              >
                <h2 className="text-sm font-bold uppercase tracking-widest text-green-700 mb-3">Description</h2>
                <p className="text-xl text-gray-800 leading-relaxed font-medium">
                  {product.description}
                </p>
              </motion.div>

              {/* Key Specs Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                {/* Active Ingredient */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <Droplet className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Active Ingredient</h3>
                  </div>
                  <p className="text-sm text-gray-800 leading-relaxed font-semibold">
                    {product.activeIngredient || product.composition || "N/A"}
                  </p>
                </motion.div>

                {/* Mode of Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-l-4 border-purple-600 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-purple-600 rounded-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Mode of Action</h3>
                  </div>
                  <p className="text-sm text-gray-800 leading-relaxed font-semibold">
                    {product.modeOfAction || "N/A"}
                  </p>
                </motion.div>

                {/* Application Rate */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border-l-4 border-amber-600 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-amber-600 rounded-lg">
                      <Gauge className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Application Rate</h3>
                  </div>
                  <p className="text-sm text-gray-800 leading-relaxed font-semibold">
                    {product.applicationRate || product.usage || "N/A"}
                  </p>
                </motion.div>
              </div>

              {/* Usage Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border-l-4 border-cyan-600 shadow-md mb-10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-cyan-600 rounded-lg">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Usage Instructions</h3>
                </div>
                <p className="text-lg text-gray-800 leading-relaxed font-semibold bg-white/50 rounded-lg p-4 border-l-4 border-cyan-400">
                  {product.usage}
                </p>
              </motion.div>

              {/* Target Crops */}
              {product.targetCrops && product.targetCrops.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="mb-10"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    Target Crops
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.targetCrops.map((crop, idx) => (
                      <motion.div
                        key={crop}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.45 + idx * 0.05 }}
                      >
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm px-4 py-2 font-bold shadow-md hover:shadow-lg transition-shadow cursor-default">
                          <Leaf className="h-4 w-4 mr-2" />
                          {crop}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Available Packs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border-l-4 border-indigo-600 shadow-md mb-10"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Package className="h-6 w-6 text-indigo-600" />
                  </div>
                  Available Pack Sizes
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {product.packSizes.map((pack, idx) => (
                    <motion.div
                      key={pack}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + idx * 0.05 }}
                    >
                      <Badge className="w-full text-center border-2 border-indigo-600 bg-white text-indigo-600 text-sm px-3 py-3 font-bold hover:bg-indigo-50 transition-colors">
                        {pack}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="mb-10"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.55 + idx * 0.05 }}
                        className="flex items-center gap-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border-l-4 border-green-500"
                      >
                        <div className="p-2 bg-green-500 rounded-lg flex-shrink-0">
                          <ChevronRight className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-gray-800 font-semibold">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Action Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-between pt-8 border-t-2 border-gray-200"
              >
                <div>
                  {product.inStock ? (
                    <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-base px-6 py-3 font-bold shadow-lg">
                      ✓ Available for Purchase
                    </Badge>
                  ) : (
                    <Badge className="bg-gray-600 text-white text-base px-6 py-3 font-bold shadow-lg">
                      Out of Stock
                    </Badge>
                  )}
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={onClose}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-3 text-lg shadow-lg"
                  >
                    Close Details
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailModal;
