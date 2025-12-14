export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  rating: number;
  features: string[];
  icon: string;
  color: string;
  activeIngredient?: string;
  composition?: string;
  targetPests?: string[];
  targetDiseases?: string[];
  targetWeeds?: string[];
  targetCrops?: string[];
  benefits?: string[];
  usage: string;
  packSizes: string[];
  inStock: boolean;
  imageUrl?: string;
  applicationRate?: string;
  modeOfAction?: string;
}

export const products: Product[] = [
  // HERBICIDES
{
  id: 1,
  name: "FIRE ALL 480 SL",
  category: "herbicides",
  description: "Non-selective, post-emergence herbicide for control of all grasses and broad-leaved weeds.",
  price: "",
  rating: 4.8,
  features: ["Non-selective", "Post-emergence", "Broad spectrum", "Systemic"],
  icon: "Leaf",
  color: "from-green-500 to-emerald-500",
  activeIngredient: "Isopropylamine salt 480 g/L",
  targetWeeds: ["All grasses", "Broad-leaved weeds", "Annual weeds", "Perennial weeds"],
  targetCrops: ["Maize", "Wheat", "Sugarcane", "Tea", "Coffee", "Industrial areas", "Forest areas"],
  usage: "200-300ml/20L of water",
  applicationRate: "200-300ml/20L of water",
  packSizes: ["200 mls", "500 mls", "1 Ltr", "5 Ltrs", "20 Ltrs"],
  modeOfAction: "Systemic inhibitor of amino acid synthesis.",
  inStock: true,
  imageUrl: "/images/products/herbicides/FIRE ALL.png"
},

 // INSECTICIDES
{
  id: 8,
  name: "PROJECTOR 320 SC",
  category: "insecticides",
  description: "Insecticide for control of aphids, thrips, whiteflies and caterpillars.",
  price: "",
  rating: 4.9,
  features: ["Systemic", "Translaminar", "Contact action", "Stomach action"],
  icon: "Zap",
  color: "from-red-500 to-orange-500",
  activeIngredient: "Thiamethoxam 150 g/L + Bifenthrin 170g/L",
  targetPests: ["Aphids", "Thrips", "Whiteflies", "Caterpillars", "Leaf miners"],
  targetCrops: ["Maize", "Tomatoes", "Roses"],
  usage: "6ml/20L of water",
  applicationRate: "6ml/20L of water",
  packSizes: ["30 mls", "50 mls", "100 mls", "200 mls", "500 mls", "1Ltr"],
  modeOfAction: "Systemic insecticide with translaminar activity, contact and stomach action.",
  inStock: true,
  imageUrl: "/images/products/insecticides/PROJECTOR.png"
},
{
  id: 10,
  name: "METHOLING 90 SP",
  category: "insecticides",
  description: "Fast-acting, broad-spectrum carbamate insecticide used to control a wide range of pests.",
  price: "",
  rating: 4.6,
  features: ["Fast-acting", "Broad-spectrum", "Carbamate", "Cholinesterase inhibitor"],
  icon: "Zap",
  color: "from-red-500 to-orange-500",
  activeIngredient: "Methomyl 900 g/Kg",
  targetPests: ["Caterpillars", "Aphids", "Thrips", "Beetles", "Leaf hoppers"],
  targetCrops: ["Cotton", "Ornamentals", "Pigeon peas"],
  usage: "10g/20L of water",
  applicationRate: "10g/20L of water",
  packSizes: ["100 gms"],
  modeOfAction: "Inhibits cholinesterase activity in insects, leading to rapid paralysis and death upon contact or ingestion.",
  inStock: true,
  imageUrl: "/images/products/insecticides/METHOLING.png"
},
{
  id: 11,
  name: "CARNON 700 WDG",
  category: "insecticides",
  description: "Insecticide for the control of thrips, aphids and white flies.",
  price: "",
  rating: 4.8,
  features: ["Nervous system destroyer", "Acetylcholine antagonist", "Water dispersible", "Systemic"],
  icon: "Zap",
  color: "from-red-500 to-orange-500",
  activeIngredient: "Acetamiprid 700g/L",
  targetPests: ["Thrips", "Aphids", "White flies", "Jassids", "Plant hoppers"],
  targetCrops: ["Tomatoes", "Pigeon peas", "Vegetables", "Cereals"],
  usage: "2.5g/20L of water",
  applicationRate: "2.5g/20L of water",
  packSizes: ["5 g", "25g", "100g"],
  modeOfAction: "Destroys insects' nervous system by antagonising Acetylcholine receptor.",
  inStock: true,
  imageUrl: "/images/products/insecticides/CARNON.png"
},
{
  id: 14,
  name: "CABINO 150 SC",
  category: "insecticides",
  description: "Insecticide for control of diamondback moth and Tuta absoluta.",
  price: "",
  rating: 4.9,
  features: ["Sodium channel blocker", "Specialist for moths", "Paralysis inducer", "Selective action"],
  icon: "Zap",
  color: "from-red-500 to-orange-500",
  activeIngredient: "Indoxacarb 150g/L",
  targetPests: ["Diamondback moth", "Tuta absoluta", "Caterpillars", "Bollworms", "Army worms"],
  targetCrops: ["Cabbage", "Tomatoes", "French beans"],
  usage: "12.5ml/20L of water",
  applicationRate: "12.5ml/20L of water",
  packSizes: ["50 mls", "100 mls", "250 mls", "500 mls", "1Ltr"],
  modeOfAction: "Blocks neuronal sodium channels in insects leading to paralysis and death.",
  inStock: true,
  imageUrl: "/images/products/insecticides/CARNON.png"
},

  // FUNGICIDES
{
  id: 17,
  name: "AZODIN TOP 325 SC",
  category: "fungicides",
  description: "Fungicide for the control of powdery mildew.",
  price: "",
  rating: 4.8,
  features: ["Dual action", "Spore germination inhibitor", "Mycelia growth disruptor", "Protective and curative"],
  icon: "Shield",
  color: "from-blue-500 to-cyan-500",
  activeIngredient: "Azoxystrobin 200 g/L + Difenoconazole 125 g/L",
  targetDiseases: ["Powdery mildew", "Rust", "Leaf spots", "Anthracnose", "Scab"],
  targetCrops: ["Roses", "Rice", "Wheat", "Green peas"],
  usage: "15ml/20L of water",
  applicationRate: "15ml/20L of water",
  packSizes: ["50 mls", "100 mls", "250 mls", "500 mls", "1Ltr"],
  modeOfAction: "Disrupts normal fungal cell functions and inhibits spore germination and mycelia growth.",
  inStock: true,
  imageUrl: "/images/products/fungicides/AZODIN TOP.png"
},
{
  id: 18,
  name: "TROOP 100 EC",
  category: "fungicides",
  description: "Systemic, broad-spectrum fungicide for control of powdery mildew, rust, and scab.",
  price: "",
  rating: 4.7,
  features: ["Systemic", "Broad-spectrum", "Ergosterol inhibitor", "Membrane disruptor"],
  icon: "Shield",
  color: "from-blue-500 to-cyan-500",
  activeIngredient: "Penconazole 100 g/L",
  targetDiseases: ["Powdery mildew", "Rust", "Scab", "Leaf spots", "Anthracnose"],
  targetCrops: ["Rice", "Wheat", "Green peas", "Fruits", "Vegetables", "Ornamentals"],
  usage: "15ml/20L of water",
  applicationRate: "15ml/20L of water",
  packSizes: ["50 mls", "100 mls", "250 mls", "500 mls", "1Ltr"],
  modeOfAction: "Inhibits ergosterol biosynthesis, disrupting fungal cell membranes and halting pathogen growth.",
  inStock: true,
  imageUrl: "/images/products/fungicides/TROOP.png"
},
{
  id: 19,
  name: "NGUMI 500 SC",
  category: "fungicides",
  description: "Broad systemic fungicide with protective and curative action for comprehensive disease management.",
  price: "",
  rating: 4.6,
  features: ["Broad systemic", "Protective and curative", "Antimitotic", "Apoptosis inducer"],
  icon: "Shield",
  color: "from-blue-500 to-cyan-500",
  activeIngredient: "Carbendazim 500 g/L",
  targetDiseases: ["Anthracnose", "Leaf spots", "Powdery mildew", "Root rot", "Wilt"],
  targetCrops: ["Tomatoes", "Potatoes", "Mangoes", "Citrus", "Cereals", "Vegetables"],
  usage: "15ml/20L of water",
  applicationRate: "15ml/20L of water",
  packSizes: ["50 mls", "100 mls", "250 mls", "500 mls", "1Ltr"],
  modeOfAction: "Antifungal with antimitotic and antineoplastic activities. Suppresses microtubule assembly resulting in apoptosis.",
  inStock: true,
  imageUrl: "/images/products/fungicides/NGUMI.png"
},
{
  id: 20,
  name: "TYTHINE 800 WP",
  category: "fungicides",
  description: "Fungicide for the control of early and late blight.",
  price: "",
  rating: 4.7,
  features: ["Protective contact", "Spore germination inhibitor", "Weather resistant", "Broad spectrum"],
  icon: "Shield",
  color: "from-blue-500 to-cyan-500",
  activeIngredient: "Mancozeb 800 g/kg",
  targetDiseases: ["Early blight", "Late blight", "Downy mildew", "Leaf spots", "Anthracnose"],
  targetCrops: ["Tomatoes", "Potatoes"],
  usage: "40g/20L of water",
  applicationRate: "40g/20L of water",
  packSizes: ["1 kg", "5 kgs"],
  modeOfAction: "Protective contact fungicide that inhibits fungal spore germination.",
  inStock: true,
  imageUrl: "/images/products/fungicides/TYTHINE.png"
},
{
  id: 21,
  name: "COPCHEM 50 WP",
  category: "fungicides",
  description: "A contact fungicide effective against a wide range of fungal diseases.",
  price: "",
  rating: 4.5,
  features: ["Contact fungicide", "Protective barrier", "Spore prevention", "Broad spectrum"],
  icon: "Shield",
  color: "from-blue-500 to-cyan-500",
  activeIngredient: "50% w/w copper",
  targetDiseases: ["Bacterial diseases", "Fungal diseases", "Downy mildew", "Leaf spots", "Anthracnose"],
  targetCrops: ["Coffee", "Tomatoes", "Potatoes", "Grapes", "Citrus"],
  usage: "70 - 140g/20L of water",
  applicationRate: "70 - 140g/20L of water",
  packSizes: ["500 gms", "1 kg", "2 Kgs", "25 kgs"],
  modeOfAction: "Forms a protective barrier on plant surfaces, preventing spore germination and disease spread.",
  inStock: true,
  imageUrl: "/images/products/fungicides/COPCHEM.png"
},

// FOLIAR FERTILIZERS - LIQUID
{
  id: 26,
  name: "HYRICH (HIGH-K)",
  category: "fertilizers",
  description: "A high potassium and magnesium foliar fertilizer suitable for flower formation, prevention of flower and fruit abortion, fruit enlargement and sweetening.",
  price: "",
  rating: 4.7,
  features: ["High potassium", "Magnesium rich", "Flower formation", "Fruit sweetening", "Abortion prevention"],
  icon: "Sprout",
  color: "from-yellow-500 to-amber-500",
  composition: "NPK: 10:15:50",
  targetCrops: ["Flowering and Fruiting crops"],
  usage: "20 – 30 ml/20 L of water",
  applicationRate: "20 – 30 ml/20 L of water",
  packSizes: ["100 mls", "250 mls", "500 mls", "1Ltr", "5 Ltrs", "10 Ltrs", "20 Ltrs"],
  benefits: ["Better flowering", "Fruit enlargement", "Improved sweetness", "Reduced abortion"],
  inStock: true,
  imageUrl: "/images/products/fertilizers/HYRICH.png"
},
{
  id: 27,
  name: "HYRICH (HIGH-P)",
  category: "fertilizers",
  description: "Contains high phosphorous essential for root formation, tuber development and overall plant metabolism. Adequate phosphorus enhances early root growth, improves flowering and fruiting, and increases crop resilience to environmental stress.",
  price: "",
  rating: 4.6,
  features: ["High phosphorous", "Root formation", "Tuber development", "Stress resilience", "Early growth"],
  icon: "Sprout",
  color: "from-yellow-500 to-amber-500",
  composition: "NPK: 22:45:20",
  targetCrops: ["All crops in the early growth stages and tuber crops at the onset of tuber development"],
  usage: "20 – 30 ml/20 L of water",
  applicationRate: "20 – 30 ml/20 L of water",
  packSizes: ["100 mls", "250 mls", "500 mls", "1Ltr", "5 Ltrs", "10 Ltrs", "20 Ltrs"],
  benefits: ["Enhanced root growth", "Improved flowering", "Better fruiting", "Stress tolerance"],
  inStock: true,
  imageUrl: "/images/products/fertilizers/HYRICH.png"
},
{
  id: 28,
  name: "HYRICH CALCIUM",
  category: "fertilizers",
  description: "Calcium is essential for cell wall formation, root development, and strengthening plant structure, which helps prevent disorders like blossom end rot in tomatoes and tip burn in leafy vegetables. Additionally, calcium improves stress tolerance, boosts disease resistance, and enhances the quality and shelf life of harvested produce.",
  price: "",
  rating: 4.9,
  features: ["Cell wall formation", "Root development", "Blossom end rot prevention", "Disease resistance", "Quality enhancement"],
  icon: "Sprout",
  color: "from-yellow-500 to-amber-500",
  composition: "N 15% + Ca 45% + Mg 10%",
  targetCrops: ["Fruits and vegetables"],
  usage: "20 – 30 ml/20 L of water",
  applicationRate: "20 – 30 ml/20 L of water",
  packSizes: ["100 mls", "250 mls", "500 mls", "1Ltr", "5 Ltrs", "10 Ltrs", "20 Ltrs"],
  benefits: ["Prevents blossom end rot", "Improved structure", "Better shelf life", "Enhanced quality"],
  inStock: true,
  imageUrl: "/images/products/fertilizers/HYRICH calcium.png"
},
{
  id: 29,
  name: "HYRICH ZINC",
  category: "fertilizers",
  description: "Improves photosynthesis and boosts resistance to environmental stress directly influencing plant vigor, leaf development, and grain formation. Foliar application enhances nutrient efficiency, leading to better yields, improved crop quality, and stronger resilience against diseases and drought conditions.",
  price: "",
  rating: 4.7,
  features: ["Photosynthesis improvement", "Stress resistance", "Plant vigor", "Nutrient efficiency", "Disease resilience"],
  icon: "Sprout",
  color: "from-yellow-500 to-amber-500",
  composition: "Zn 72% + Mg 10% + Te",
  targetCrops: ["Vegetables and fruiting crops"],
  usage: "20 – 30 ml/20 L of water",
  applicationRate: "20 – 30 ml/20 L of water",
  packSizes: ["100 mls", "250 mls", "500 mls", "1Ltr", "5 Ltrs", "10 Ltrs", "20 Ltrs"],
  benefits: ["Better photosynthesis", "Enhanced vigor", "Improved yields", "Quality crops"],
  inStock: true,
  imageUrl: "/images/products/fertilizers/HYRICH ZINC.png"
},
{
  id: 30,
  name: "FARM BOOSTER",
  category: "fertilizers",
  description: "Liquid foliar fertilizer and plant booster. They offer quick nutrient absorption, especially during critical growth stages or when soil uptake is limited. This boosts crop yield, enhances quality, and improves resilience against pests and diseases.",
  price: "",
  rating: 4.8,
  features: ["Quick absorption", "Critical growth support", "Yield booster", "Quality enhancer", "Pest resilience"],
  icon: "Sprout",
  color: "from-yellow-500 to-amber-500",
  composition: "N 14% + P 14% + K 8 % + ME",
  targetCrops: ["All crops"],
  usage: "50-80 ml/20 L of water",
  applicationRate: "50-80 ml/20 L of water",
  packSizes: ["100 mls", "250 mls", "500 mls", "1Ltr", "5 Ltrs", "10 Ltrs", "20 Ltrs"],
  benefits: ["Quick nutrient boost", "Enhanced yield", "Better quality", "Improved resilience"],
  inStock: true,
  imageUrl: "/images/products/fertilizers/BOOSTER.png"
},
{
  id: 31,
  name: "ZINBOR",
  category: "fertilizers",
  description: "Zinc boosts enzyme activity and chlorophyll production, enhancing plant growth and leaf development. Boron supports flower formation, pollen viability, and fruit setting. Together, they improve crop yield, quality, and resistance to environmental stress.",
  price: "",
  rating: 4.6,
  features: ["Enzyme activity", "Chlorophyll production", "Flower formation", "Fruit setting", "Environmental stress resistance"],
  icon: "Sprout",
  color: "from-yellow-500 to-amber-500",
  composition: "ZINC 30% + BORON 20%",
  targetCrops: ["All crops"],
  usage: "20 – 30 ml/20 L of water",
  applicationRate: "20 – 30 ml/20 L of water",
  packSizes: ["100 mls", "250 mls", "500 mls", "1Ltr", "5 Ltrs", "10 Ltrs", "20 Ltrs"],
  benefits: ["Enhanced growth", "Better flowering", "Improved fruit set", "Stress tolerance"],
  inStock: true,
  imageUrl: "/images/products/fertilizers/ZINBOR.png"
},
{
  id: 34,
  name: "WY-GROW STARTER",
  category: "fertilizers",
  description: "A water-soluble fertilizer with high phosphorous levels essential for proper root development and fruit quality at early growth stages. Perfect for establishing strong plant foundations and promoting healthy seedling growth.",
  price: "",
  rating: 4.7,
  features: ["Water-soluble", "High phosphorous", "Root development", "Early stage formula", "Quality enhancement"],
  icon: "Sprout",
  color: "from-yellow-500 to-amber-500",
  composition: "N.P.K 19:24:20 +Mg + Te",
  targetCrops: ["All crops in the early growth stages and tuber crops at the onset of tuber development"],
  usage: "20 - 40 gm/20 L of water",
  applicationRate: "20 - 40 gm/20 L of water",
  packSizes: ["250g", "500 g", "1 Kg"],
  benefits: ["Strong root initiation", "Better fruit quality", "Early vigor", "Optimized development"],
  inStock: true,
  imageUrl: "/images/products/fertilizers/WY-GROW STARTER.png"
},
{
  id: 35,
  name: "WY-GROW VEGETATIVE",
  category: "fertilizers",
  description: "A well-balanced water-soluble fertilizer supporting optimal growth at every stage. It helps maximize yields and improve the quality of produce by providing balanced nutrition for vegetative growth.",
  price: "",
  rating: 4.8,
  features: ["Water-soluble", "Well-balanced", "Growth support", "Yield maximizer", "Quality improvement"],
  icon: "Sprout",
  color: "from-yellow-500 to-amber-500",
  composition: "N.P.K 33:13:16 +Mg + Te",
  targetCrops: ["All crops"],
  usage: "30 - 40 gm/20 L of water",
  applicationRate: "30 - 40 gm/20 L of water",
  packSizes: ["250g", "500 g", "1 Kg"],
  benefits: ["Robust vegetative growth", "Higher yields", "Better foliage quality", "Consistent nutrition"],
  inStock: true,
  imageUrl: "/images/products/fertilizers/WY-GROW VEGETATIVE.png"
},
{
  id: 36,
  name: "WY-GROW FRUIT AND FLOWER",
  category: "fertilizers",
  description: "A water-soluble fertilizer with well-balanced nutrients suitable for quick results during flowering and fruit setting stages. Promotes abundant flowering and successful fruit development with superior quality.",
  price: "",
  rating: 4.9,
  features: ["Water-soluble", "Flower promoting", "Fruit development", "Quick acting", "Quality focused"],
  icon: "Sprout",
  color: "from-yellow-500 to-amber-500",
  composition: "N.P.K 15:11:36 +Mg + Te",
  targetCrops: ["Fruiting and Flowering crops"],
  usage: "30 - 40 gm/20 L of water",
  applicationRate: "30 - 40 gm/20 L of water",
  packSizes: ["250g", "500 g", "1 Kg"],
  benefits: ["Abundant flowering", "Successful fruit setting", "Superior fruit quality", "Extended blooming"],
  inStock: true,
  imageUrl: "/images/products/fertilizers/WY-GROW FRUIT & FLOWER.png"
},
{
  id: 37,
  name: "WY-GROW CALCIUM",
  category: "fertilizers",
  description: "Strengthen plant cell walls, improving structural integrity and resistance to diseases and environmental stress. Calcium also enhances root development and nutrient uptake, leading to healthier, more productive crops.",
  price: "",
  rating: 4.8,
  features: ["Cell wall strengthening", "Disease resistance", "Root enhancement", "Nutrient uptake", "Stress tolerance"],
  icon: "Sprout",
  color: "from-yellow-500 to-amber-500",
  composition: "N 15.5% + CA 26% + Mg",
  targetCrops: ["Fruits, vegetables and cereals"],
  usage: "30 - 40 gm/20 L of water",
  applicationRate: "30 - 40 gm/20 L of water",
  packSizes: ["250g", "500 g", "1 Kg"],
  benefits: ["Stronger plants", "Better disease resistance", "Improved nutrient uptake", "Healthier crops"],
  inStock: true,
  imageUrl: "/images/products/fertilizers/WY-GROW CALCIUM.png"
},
{
  id: 38,
  name: "BLACK EAGLE",
  category: "fertilizers",
  description: "Granulated Humic acid is a water-soluble soil amendment and acid reducer. Reduces nutrient lock up and loss through leaching and promotes proper fertilizer usage in plants, reducing fertilizer loss and improving soil health.",
  price: "",
  rating: 4.7,
  features: ["Humic acid", "Soil amendment", "Acid reducer", "Nutrient retention", "Water-soluble"],
  icon: "Sprout",
  color: "from-yellow-500 to-amber-500",
  composition: "85% Humic acid, 11% Soluble K2O",
  targetCrops: ["All crops"],
  usage: "Mix 2 Kg with 50kg fertilizer",
  applicationRate: "Mix 2 Kg with 50kg fertilizer",
  packSizes: ["500 g", "1 Kg", "25 Kgs"],
  benefits: ["Improved soil structure", "Nutrient availability", "Reduced leaching", "Cost-effective fertilizer use"],
  inStock: true,
  imageUrl: "/images/products/fertilizers/BLACK - EAGLE.png"
},

  // VETERINARY PRODUCTS
{
  id: 39,
  name: "HYLICK MAZIWA",
  category: "veterinary",
  description: "A high phosphorous dairy mineral supplement that increases milk production and fastens conception. It also replenishes mineral reserves during the in-calf stage and enhances vigorous and healthy growth in cows and calves.",
  price: "",
  rating: 4.8,
  features: ["High phosphorous", "Milk production increase", "Conception enhancement", "Mineral replenishment", "Growth promotion"],
  icon: "Heart",
  color: "from-purple-500 to-pink-500",
  composition: "NaCl - 23%, P – 11%, Zn - 5090 ppm, Mg - 4%, Ca – 20%, Mn – 4000 ppm, Cu – 1510 ppm, Co – 81 ppm, I – 322 ppm, Sn – 26 ppm, F – 0.001%",
  targetCrops: ["Cattle", "Sheep", "Goats"],
  usage: "100 – 200 gm daily, mix with other feeds.",
  applicationRate: "100 – 200 gm daily, mix with other feeds.",
  packSizes: ["1 Kg", "2 Kg", "5 Kg", "10 Kg", "20 Kg"],
  benefits: ["Increased milk production", "Faster conception", "Better growth", "Mineral balance"],
  inStock: true,
  imageUrl: "/images/products/veterinary/HYLICK MAZIWA.png"
},
{
  id: 41,
  name: "D.C.P",
  category: "veterinary",
  description: "A dietary supplement that aids in bone and teeth development and increases milk production. It also helps in the treatment of calcium and phosphorous deficiencies in all livestock, ensuring optimal skeletal health and productivity.",
  price: "",
  rating: 4.6,
  features: ["Bone development", "Teeth strengthening", "Milk production increase", "Deficiency correction", "Multi-species use"],
  icon: "Heart",
  color: "from-purple-500 to-pink-500",
  composition: "Ca – 21.1%, P – 17.2%, F – 0.01%",
  targetCrops: ["Cattle", "Poultry", "Pigs", "Sheep", "Goats"],
  usage: "Poultry: 250g per 70 Kg of feed. Other animals: 100 g per 70 Kg of feeds.",
  applicationRate: "Poultry: 250g per 70 Kg of feed. Other animals: 100 g per 70 Kg of feeds.",
  packSizes: ["250 gm", "500 gm", "1 Kg"],
  benefits: ["Strong bones and teeth", "Increased milk production", "Deficiency correction", "Universal livestock supplement"],
  inStock: true,
  imageUrl: "/images/products/veterinary/DCP.png"
},
{
  id: 42,
  name: "KAOLIN",
  category: "veterinary",
  description: "A mineral supplement for livestock that supports healthy growth and development across various animal species. Provides essential minerals for bone strength, immunity, and overall animal wellness.",
  price: "",
  rating: 4.7,
  features: ["Mineral supplement", "Growth support", "Immunity boost", "Multi-species formula", "Natural source"],
  icon: "Heart",
  color: "from-purple-500 to-pink-500",
  composition: "Natural mineral blend with silicates and trace elements",
  targetCrops: ["Cattle", "Sheep", "Goats", "Pigs"],
  usage: "100 – 150 gm daily, mix with other feeds.",
  applicationRate: "100 – 150 gm daily, mix with other feeds.",
  packSizes: ["5 Kg", "10 Kg", "20 Kg", "50 Kg"],
  benefits: ["Better mineral balance", "Improved growth", "Stronger immunity", "Overall health support"],
  inStock: true,
  imageUrl: "/images/products/veterinary/KAOLIN.png"
}

];

export const getProductsByCategory = (category: string) => {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
};

export const searchProducts = (searchTerm: string) => {
  return products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (product.targetPests && product.targetPests.some(pest => pest.toLowerCase().includes(searchTerm.toLowerCase()))) ||
    (product.targetDiseases && product.targetDiseases.some(disease => disease.toLowerCase().includes(searchTerm.toLowerCase()))) ||
    (product.targetWeeds && product.targetWeeds.some(weed => weed.toLowerCase().includes(searchTerm.toLowerCase()))) ||
    (product.targetCrops && product.targetCrops.some(crop => crop.toLowerCase().includes(searchTerm.toLowerCase()))) ||
    (product.activeIngredient && product.activeIngredient.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (product.modeOfAction && product.modeOfAction.toLowerCase().includes(searchTerm.toLowerCase()))
  );
};

export const getFeaturedProducts = () => {
  const featured = [
    products.find(p => p.id === 29), // HYRICH ZINC (Fertilizer)
    products.find(p => p.id === 26), // HYRICH (HIGH-K) (Fertilizer)
    products.find(p => p.id === 38), // BLACK EAGLE (Fertilizer)
    products.find(p => p.id === 19), // NGUMI 500 SC (Fungicide)
    products.find(p => p.id === 31), // ZINBOR (Fertilizer)
  ];
  return featured.filter(Boolean) as Product[];
};
