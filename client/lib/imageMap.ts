// Product image mapping with professional quality images
// Uses local product images where available and high-quality stock images as fallbacks

// Real local product images - only these exist
const realProductImages = {
  // Herbicides
  herbicides: "/images/products/herbicides/FIRE ALL.png",
  
  // Insecticides
  insecticides: {
    "PROJECTOR.png": "/images/products/insecticides/PROJECTOR.png",
    "CYPERTOX.png": "/images/products/insecticides/CYPERTOX.png",
    "METHOLING.png": "/images/products/insecticides/METHOLING.png",
  },

  // Fungicides
  fungicides: {
    "AZODIN TOP.png": "/images/products/fungicides/AZODIN TOP.png",
    "TYTHINE.png": "/images/products/fungicides/TYTHINE.png",
    "COPCHEM.png": "/images/products/fungicides/COPCHEM.png",
  },
  
  // Fertilizers
  fertilizers: {
    "HYRICH.png": "/images/products/fertilizers/HYRICH.png",
    "HYRICH Fruits.png": "/images/products/fertilizers/HYRICH Fruits.png",
    "HYRICH calcium.png": "/images/products/fertilizers/HYRICH calcium.png",
    "HYRICH ZINC.png": "/images/products/fertilizers/HYRICH ZINC.png",
    "BOOSTER.png": "/images/products/fertilizers/BOOSTER.png",
    "ZINBOR.png": "/images/products/fertilizers/ZINBOR.png",
    "ROOT ENTUBER.png": "/images/products/fertilizers/ROOT ENTUBER.png",
    "SUPERCROP.png": "/images/products/fertilizers/SUPERCROP.png",
    "WY-GROW STARTER.png": "/images/products/fertilizers/WY-GROW STARTER.png",
    "WY-GROW VEGETATIVE.png": "/images/products/fertilizers/WY-GROW VEGETATIVE.png",
    "WY-GROW FRUIT & FLOWER.png": "/images/products/fertilizers/WY-GROW FRUIT & FLOWER.png",
    "WY-GROW CALCIUM.png": "/images/products/fertilizers/WY-GROW CALCIUM.png",
    "BLACK - EAGLE.png": "/images/products/fertilizers/BLACK - EAGLE.png",
  },
  
  // Veterinary
  veterinary: {
    "HYLICK MAZIWA.png": "/images/products/veterinary/HYLICK MAZIWA.png",
    "DCP.png": "/images/products/veterinary/DCP.png",
    "KAOLIN.png": "/images/products/veterinary/KAOLIN.png",
  },
};

// Professional category colors and styling for placeholders
const placeholderColors: Record<string, { bg: string; gradientFrom: string; gradientTo: string; text: string; icon: string }> = {
  herbicides: {
    bg: "8fcd56",
    gradientFrom: "86efac",
    gradientTo: "4ade80",
    text: "ffffff",
    icon: "🌿"
  },
  fungicides: {
    bg: "0ea5e9",
    gradientFrom: "38bdf8",
    gradientTo: "0284c7",
    text: "ffffff",
    icon: "🛡️"
  },
  insecticides: {
    bg: "f97316",
    gradientFrom: "fb923c",
    gradientTo: "ea580c",
    text: "ffffff",
    icon: "⚡"
  },
  fertilizers: {
    bg: "eab308",
    gradientFrom: "facc15",
    gradientTo: "ca8a04",
    text: "1f2937",
    icon: "🌱"
  },
  veterinary: {
    bg: "ec4899",
    gradientFrom: "f472b6",
    gradientTo: "db2777",
    text: "ffffff",
    icon: "❤️"
  },
  all: {
    bg: "64748b",
    gradientFrom: "94a3b8",
    gradientTo: "475569",
    text: "ffffff",
    icon: "📦"
  },
};

// Generate a professional placeholder image with improved styling
const generateProPlaceholder = (productName: string, productId: number, category: string): string => {
  const colors = placeholderColors[category] || placeholderColors.all;
  const shortName = productName.substring(0, 15).toUpperCase();
  const encodedName = encodeURIComponent(shortName);
  
  // Using DiceBear API for more professional placeholders
  return `https://api.dicebear.com/7.x/shapes/svg?seed=${productId}&scale=80&backgroundColor=${colors.bg}&opacity=0.8`;
};

// Product image mapping - maps product IDs to their image paths
export const productImageMap: Record<number, string> = {
  // HERBICIDES
  1: realProductImages.herbicides,

  // INSECTICIDES
  7: realProductImages.insecticides["PROJECTOR.png"],
  8: realProductImages.insecticides["PROJECTOR.png"],
  9: realProductImages.insecticides["CYPERTOX.png"],
  10: realProductImages.insecticides["METHOLING.png"],
  12: realProductImages.insecticides["CYPERTOX.png"],
  13: realProductImages.insecticides["PROJECTOR.png"],
  15: realProductImages.insecticides["METHOLING.png"],
  16: realProductImages.insecticides["PROJECTOR.png"],

  // FUNGICIDES
  17: realProductImages.fungicides["AZODIN TOP.png"],
  20: realProductImages.fungicides["TYTHINE.png"],
  21: realProductImages.fungicides["COPCHEM.png"],

  // FOLIAR FERTILIZERS
  25: realProductImages.fertilizers["HYRICH.png"],
  26: realProductImages.fertilizers["HYRICH.png"],
  27: realProductImages.fertilizers["HYRICH.png"],
  28: realProductImages.fertilizers["HYRICH calcium.png"],
  29: realProductImages.fertilizers["HYRICH ZINC.png"],
  30: realProductImages.fertilizers["BOOSTER.png"],
  31: realProductImages.fertilizers["ZINBOR.png"],
  32: realProductImages.fertilizers["ROOT ENTUBER.png"],
  34: realProductImages.fertilizers["WY-GROW STARTER.png"],
  35: realProductImages.fertilizers["WY-GROW VEGETATIVE.png"],
  36: realProductImages.fertilizers["WY-GROW FRUIT & FLOWER.png"],
  37: realProductImages.fertilizers["WY-GROW CALCIUM.png"],
  38: realProductImages.fertilizers["BLACK - EAGLE.png"],

  // VETERINARY
  39: realProductImages.veterinary["HYLICK MAZIWA.png"],
  40: realProductImages.veterinary["HYLICK MAZIWA.png"],
  41: realProductImages.veterinary["DCP.png"],
  42: realProductImages.veterinary["KAOLIN.png"],
};

// Category representative images
export const categoryImageMap: Record<string, string> = {
  all: realProductImages.fertilizers["HYRICH.png"],
  insecticides: realProductImages.insecticides["PROJECTOR.png"],
  fungicides: realProductImages.fungicides["AZODIN TOP.png"],
  herbicides: realProductImages.herbicides,
  fertilizers: realProductImages.fertilizers["HYRICH.png"],
  veterinary: realProductImages.veterinary["HYLICK MAZIWA.png"],
};

// Get product image with fallback to professional placeholder
export const getProductImage = (productId: number, category: string, productName?: string): string => {
  const image = productImageMap[productId];
  
  if (image) {
    return image;
  }
  
  // Fallback to professional placeholder
  return generateProPlaceholder(productName || `Product ${productId}`, productId, category);
};

// Get category image with fallback
export const getCategoryImage = (category: string): string => {
  const image = categoryImageMap[category];
  
  if (image) {
    return image;
  }
  
  // Fallback to placeholder
  const colors = placeholderColors[category] || placeholderColors.all;
  const categoryName = category.replace(/([A-Z])/g, " $1").trim();
  return `https://api.dicebear.com/7.x/shapes/svg?seed=${category}&scale=80&backgroundColor=${colors.bg}&opacity=0.8`;
};

// Get a contrasting color for product cards
export const getCategoryColor = (category: string): { bg: string; text: string } => {
  const colors = placeholderColors[category] || placeholderColors.all;
  return {
    bg: colors.bg,
    text: colors.text,
  };
};
