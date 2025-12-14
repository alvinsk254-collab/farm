export interface Shop {
  id: number;
  name: string;
  majorTown: string;
  county: string;
  phone?: string;
  email?: string;
  address?: string;
  coordinates?: { lat: number; lng: number };
  products?: string[];
  isOpen?: boolean;
  workingHours?: string;
  avatar: string;
}

export const shops: Shop[] = [
  {
    id: 1,
    name: "Mazao na afya",
    majorTown: "Mwea",
    county: "Kirinyaga",
    avatar: "MN",
  },
  {
    id: 2,
    name: "NewdownTown",
    majorTown: "Mwea",
    county: "Kirinyaga",
    avatar: "NT",
  },
  {
    id: 3,
    name: "Limazone",
    majorTown: "Mwea",
    county: "Kirinyaga",
    avatar: "LZ",
  },
  {
    id: 4,
    name: "Daima Agrovet",
    majorTown: "Mpekeoni, Coast",
    county: "Kilifi",
    avatar: "DA",
  },
  {
    id: 5,
    name: "Kenfarm Agrovet",
    majorTown: "Mpeketoni, Coast",
    county: "Lamu",
    avatar: "KA",
  },
  {
    id: 6,
    name: "Farmat",
    majorTown: "Bungoma",
    county: "Bungoma",
    avatar: "FM",
  },
  {
    id: 7,
    name: "Kwanza Agrovet",
    majorTown: "Misikhu",
    county: "Vihiga",
    avatar: "KAV",
  },
  {
    id: 8,
    name: "Neema vet",
    majorTown: "Kimilili",
    county: "Bungoma",
    avatar: "NV",
  },
  {
    id: 9,
    name: "Zion",
    majorTown: "Webuye",
    county: "Bungoma",
    avatar: "ZN",
  },
  {
    id: 10,
    name: "Wakulima Agrovet",
    majorTown: "Siligwet",
    county: "Nandi",
    avatar: "WA",
  },
  {
    id: 11,
    name: "Hiltop",
    majorTown: "Bomet",
    county: "Bomet",
    avatar: "HT",
  },
  {
    id: 12,
    name: "KFA",
    majorTown: "Sotik, Kericho, Bomet",
    county: "Bomet",
    avatar: "KFA",
  },
  {
    id: 13,
    name: "Sotik Medicare",
    majorTown: "Sotik",
    county: "Bomet",
    avatar: "SM",
  },
  {
    id: 14,
    name: "Chepkinowyo Agrovet",
    majorTown: "Eldoret",
    county: "Uasin Gishu",
    avatar: "CA",
  },
  {
    id: 15,
    name: "KFA",
    majorTown: "Kabarnet",
    county: "Baringo",
    avatar: "KFAB",
  },
  {
    id: 16,
    name: "Merrychem",
    majorTown: "Eldoret",
    county: "Uasin Gishu",
    avatar: "MC",
  },
  {
    id: 17,
    name: "Serem",
    majorTown: "Eldoret",
    county: "Uasin Gishu",
    avatar: "SR",
  },
  {
    id: 18,
    name: "Sochoi",
    majorTown: "Eldoret",
    county: "Uasin Gishu",
    avatar: "SO",
  },
  {
    id: 19,
    name: "Farmers Corridor",
    majorTown: "Kagio",
    county: "Kirinyaga",
    avatar: "FC",
  },
  {
    id: 20,
    name: "Motherland",
    majorTown: "Karatina",
    county: "Nyeri",
    avatar: "ML",
  },
  {
    id: 21,
    name: "Ukulima Agrovet",
    majorTown: "Kerugoya",
    county: "Kirinyaga",
    avatar: "UA",
  },
  {
    id: 22,
    name: "Sagana Farmcare",
    majorTown: "Sagana",
    county: "Kirinyaga",
    avatar: "SF",
  },
  {
    id: 23,
    name: "Glory Agrovet",
    majorTown: "Mitto Andei",
    county: "Makueni",
    avatar: "GA",
  },
  {
    id: 24,
    name: "Sandra Agrovet",
    majorTown: "Kibwezi",
    county: "Makueni",
    avatar: "SAG",
  },
  {
    id: 25,
    name: "Divine Chemicals",
    majorTown: "Makindu",
    county: "Makueni",
    avatar: "DC",
  },
  {
    id: 26,
    name: "Josnac",
    majorTown: "Keroka, Kisii",
    county: "Kisii",
    avatar: "JOS",
  },
  {
    id: 27,
    name: "Enocheri Agrovet",
    majorTown: "Kisii",
    county: "Kisii",
    avatar: "EA",
  },
  {
    id: 28,
    name: "Josereb Agrovet",
    majorTown: "Magena, Kisii",
    county: "Kisii",
    avatar: "JAG",
  },
  {
    id: 29,
    name: "Fame Agrovet",
    majorTown: "Nyangusu",
    county: "Nyamira",
    avatar: "FAM",
  },
  {
    id: 30,
    name: "Meridian",
    majorTown: "Isineti",
    county: "Kisii",
    avatar: "MRD",
  },
  {
    id: 31,
    name: "Damchem",
    majorTown: "Kimana",
    county: "Kajiado",
    avatar: "DMC",
  },
  {
    id: 32,
    name: "Raha",
    majorTown: "Isineti",
    county: "Kajiado",
    avatar: "RH",
  },
  {
    id: 33,
    name: "Vinchem",
    majorTown: "Namelok",
    county: "Kajiado",
    avatar: "VNC",
  },
  {
    id: 34,
    name: "Vawachem",
    majorTown: "Isineti",
    county: "Kajiado",
    avatar: "VWC",
  },
  {
    id: 35,
    name: "Linear",
    majorTown: "Kisumu",
    county: "Kisumu",
    avatar: "LIN",
  },
  {
    id: 36,
    name: "Senaki",
    majorTown: "Kisumu",
    county: "Kisumu",
    avatar: "SEN",
  },
  {
    id: 37,
    name: "Farmaxo",
    majorTown: "Kisumu",
    county: "Kisumu",
    avatar: "FMX",
  },
  {
    id: 38,
    name: "Itete",
    majorTown: "Kitale",
    county: "Trans Nzoia",
    avatar: "ITE",
  },
  {
    id: 39,
    name: "Paves",
    majorTown: "Kitale",
    county: "Trans Nzoia",
    avatar: "PVS",
  },
  {
    id: 40,
    name: "Skynet vet",
    majorTown: "Kimilini",
    county: "Trans Nzoia",
    avatar: "SKY",
  },
  {
    id: 41,
    name: "Kithimani",
    majorTown: "Kitui",
    county: "Kitui",
    avatar: "KTH",
  },
  {
    id: 42,
    name: "Snow Pharmacy",
    majorTown: "Kitui",
    county: "Kitui",
    avatar: "SNW",
  },
  {
    id: 43,
    name: "Diplomat Agrovet",
    majorTown: "Kitui",
    county: "Kitui",
    avatar: "DIP",
  },
  {
    id: 44,
    name: "Wincare Agrovet",
    majorTown: "Kitui",
    county: "Kitui",
    avatar: "WCR",
  },
  {
    id: 45,
    name: "All in One",
    majorTown: "Loitok tok",
    county: "Samburu",
    avatar: "AIO",
  },
  {
    id: 46,
    name: "Sabas",
    majorTown: "Loitok tok",
    county: "Samburu",
    avatar: "SBS",
  },
  {
    id: 47,
    name: "Honwal",
    majorTown: "Loitok tok",
    county: "Samburu",
    avatar: "HNW",
  },
  {
    id: 48,
    name: "Cintakin",
    majorTown: "Masi",
    county: "Narok",
    avatar: "CIN",
  },
  {
    id: 49,
    name: "Makamithi",
    majorTown: "Machakos, Kitui, Wote",
    county: "Machakos",
    avatar: "MAK",
  },
  {
    id: 50,
    name: "Mwangaza Vet",
    majorTown: "Kathiani",
    county: "Machakos",
    avatar: "MWV",
  },
  {
    id: 51,
    name: "Daanco",
    majorTown: "Mashuru",
    county: "Narok",
    avatar: "DAN",
  },
  {
    id: 52,
    name: "Namayian",
    majorTown: "Mashuru",
    county: "Narok",
    avatar: "NAM",
  },
  {
    id: 53,
    name: "New Mwangaza",
    majorTown: "Mashuru",
    county: "Narok",
    avatar: "NMW",
  },
  {
    id: 54,
    name: "Maua Hiltop",
    majorTown: "Maua",
    county: "Meru",
    avatar: "MHL",
  },
  {
    id: 55,
    name: "Quality Agrovet",
    majorTown: "Maua",
    county: "Meru",
    avatar: "QA",
  },
  {
    id: 56,
    name: "Farmhouse",
    majorTown: "Meru",
    county: "Meru",
    avatar: "FH",
  },
  {
    id: 57,
    name: "Farmskills",
    majorTown: "Meru",
    county: "Meru",
    avatar: "FSK",
  },
  {
    id: 58,
    name: "Agrisel",
    majorTown: "Matuú",
    county: "Meru",
    avatar: "AGR",
  },
  {
    id: 59,
    name: "Plums",
    majorTown: "Matuú",
    county: "Meru",
    avatar: "PLM",
  },
  {
    id: 60,
    name: "Dompharm",
    majorTown: "Masinga",
    county: "Machakos",
    avatar: "DOM",
  },
  {
    id: 61,
    name: "Lukenya",
    majorTown: "Wote",
    county: "Makueni",
    avatar: "LUK",
  },
  {
    id: 62,
    name: "Fanaka agrovet",
    majorTown: "Matijiku",
    county: "Makueni",
    avatar: "FAN",
  },
  {
    id: 63,
    name: "Makongo Agrovet",
    majorTown: "Wote",
    county: "Makueni",
    avatar: "MKG",
  },
  {
    id: 64,
    name: "Josam Agrovet",
    majorTown: "Kathonzweni",
    county: "Makueni",
    avatar: "JOS",
  },
  {
    id: 65,
    name: "Ufaitti Agrovet",
    majorTown: "Kalamba",
    county: "Makueni",
    avatar: "UFA",
  },
  {
    id: 66,
    name: "Wayside",
    majorTown: "Masimba",
    county: "Makueni",
    avatar: "WSI",
  },
  {
    id: 67,
    name: "Migori Farmers centre",
    majorTown: "Migori",
    county: "Migori",
    avatar: "MFC",
  },
];

export const getShopsByCounty = (county: string) => {
  if (county === "all") return shops;
  return shops.filter(shop => shop.county === county);
};

export const searchShops = (searchTerm: string) => {
  return shops.filter(shop =>
    shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.majorTown.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.county.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const getShopsByMajorTown = (town: string) => {
  return shops.filter(shop => 
    shop.majorTown.toLowerCase().includes(town.toLowerCase())
  );
};
