import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "react-router-dom";
import {
  Phone,
  MapPin,
  Mail,
  Star,
  Search,
  GraduationCap,
  Award,
  Calendar,
  Users,
  MessageCircle,
  Clock,
  CheckCircle,
  XCircle,
  Filter,
  Grid,
  List,
  Store,
  Navigation,
  Zap
} from "lucide-react";
import { agronomists, getAgronomistsByLocation, searchAgronomists, getAvailableAgronomists } from "@/data/agronomists";
import { shops, getShopsByCounty, searchShops } from "@/data/shops";
import SearchComponent from "@/components/common/SearchComponent";

const Agronomists = () => {
  const [searchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab") || "agronomists";

  const [activeTab, setActiveTab] = useState(tabFromUrl);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  // Shop-related state
  const [shopSearchTerm, setShopSearchTerm] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("all");

  // Update active tab when URL params change
  useEffect(() => {
    setActiveTab(tabFromUrl);
  }, [tabFromUrl]);

  const locations = [
    { value: "all", label: "All Locations" },
    { value: "Nairobi", label: "Nairobi" },
    { value: "Kiambu", label: "Kiambu" },
    { value: "Nakuru", label: "Nakuru" },
    { value: "Machakos", label: "Machakos" },
    { value: "Murang'a", label: "Murang'a" },
    { value: "Kajiado", label: "Kajiado" },
    { value: "Eldoret", label: "Eldoret" },
    { value: "Kisumu", label: "Kisumu" },
    { value: "Nyeri", label: "Nyeri" },
    { value: "Meru", label: "Meru" },
    { value: "Embu", label: "Embu" }
  ];

  const counties = [
    { value: "all", label: "All Counties" },
    { value: "Kirinyaga", label: "Kirinyaga" },
    { value: "Kilifi", label: "Kilifi" },
    { value: "Lamu", label: "Lamu" },
    { value: "Bungoma", label: "Bungoma" },
    { value: "Vihiga", label: "Vihiga" },
    { value: "Nandi", label: "Nandi" },
    { value: "Bomet", label: "Bomet" },
    { value: "Uasin Gishu", label: "Uasin Gishu" },
    { value: "Baringo", label: "Baringo" },
    { value: "Nyeri", label: "Nyeri" },
    { value: "Makueni", label: "Makueni" },
    { value: "Kisii", label: "Kisii" },
    { value: "Nyamira", label: "Nyamira" },
    { value: "Kajiado", label: "Kajiado" },
    { value: "Trans Nzoia", label: "Trans Nzoia" },
    { value: "Kitui", label: "Kitui" },
    { value: "Samburu", label: "Samburu" },
    { value: "Narok", label: "Narok" },
    { value: "Meru", label: "Meru" },
  ];

  const filteredAgronomists = useMemo(() => {
    let results = agronomists;

    // Apply search filter
    if (searchTerm) {
      results = searchAgronomists(searchTerm);
    }

    // Apply location filter
    if (selectedLocation !== "all") {
      results = results.filter(agronomist =>
        agronomist.location === selectedLocation || agronomist.counties.includes(selectedLocation)
      );
    }

    // Apply availability filter
    if (availabilityFilter !== "all") {
      results = results.filter(agronomist =>
        availabilityFilter === "available" ? agronomist.isAvailable : !agronomist.isAvailable
      );
    }

    // Sort results
    results.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "rating":
          return b.rating - a.rating;
        case "experience":
          return parseInt(b.experience) - parseInt(a.experience);
        case "consultations":
          return b.consultations - a.consultations;
        default:
          return 0;
      }
    });

    return results;
  }, [searchTerm, selectedLocation, availabilityFilter, sortBy]);

  const filteredShops = useMemo(() => {
    let results = shops;

    // Apply search filter
    if (shopSearchTerm) {
      results = searchShops(shopSearchTerm);
    }

    // Apply county filter
    if (selectedCounty !== "all") {
      results = results.filter(shop => shop.county === selectedCounty);
    }

    // Sort by name
    results.sort((a, b) => a.name.localeCompare(b.name));

    return results;
  }, [shopSearchTerm, selectedCounty]);

  const handleAgronomistSelect = (agronomist: any) => {
    const element = document.getElementById(`agronomist-${agronomist.id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      element.classList.add('ring-2', 'ring-green-500');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-green-500');
      }, 3000);
    }
  };

  const handleCallAgronomist = (agronomist: any) => {
    // Make direct phone call
    window.location.href = `tel:${agronomist.phone}`;
  };

  const handleMessageAgronomist = (agronomist: any) => {
    // Give user choice between WhatsApp and Email
    const useWhatsApp = confirm(
      `Contact ${agronomist.name}:\n\nChoose communication method:\n- OK: WhatsApp Message\n- Cancel: Email`
    );

    if (useWhatsApp) {
      // Open WhatsApp with pre-filled message
      const message = `Hello ${agronomist.name}, I would like to schedule a consultation regarding agricultural advice. I found your profile on Mutuchem Enterprises website. Please let me know your availability.`;
      const phoneNumber = agronomist.phone.replace(/\s+/g, '').replace('+', '');
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      // Open email client
      const subject = encodeURIComponent('Agricultural Consultation Request');
      const body = encodeURIComponent(`Hello ${agronomist.name},

I would like to schedule a consultation regarding agricultural advice. I found your profile on Mutuchem Enterprises website.

Please let me know your availability for a consultation.

Best regards`);
      window.location.href = `mailto:${agronomist.email}?subject=${subject}&body=${body}`;
    }
  };


  const ListView = () => (
    <div className="space-y-2 sm:space-y-3">
      {filteredAgronomists.map((agronomist, index) => (
        <motion.div
          key={agronomist.id}
          id={`agronomist-${agronomist.id}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.02 }}
          whileHover={{ x: 4, scale: 1.01 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-white border border-green-200 hover:border-green-400 hover:shadow-lg transition-all group">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all relative">
                <span className="text-white font-bold text-sm sm:text-base">{agronomist.avatar}</span>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${agronomist.isAvailable ? 'bg-green-500' : 'bg-red-500'}`}></div>
              </div>
            </div>

            {/* Main Info - Name, Phone, Role Only */}
            <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
              <div>
                <p className="text-xs text-gray-600 font-semibold">Name</p>
                <p className="font-bold text-gray-900 text-sm line-clamp-1">{agronomist.name}</p>
              </div>

              <div className="hidden sm:block">
                <p className="text-xs text-gray-600 font-semibold">Phone</p>
                <p className="text-sm text-gray-700 font-medium">{agronomist.phone}</p>
              </div>

              <div>
                <p className="text-xs text-gray-600 font-semibold">Specialization</p>
                <p className="text-sm text-gray-700 font-medium">{agronomist.location}</p>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex-shrink-0">
              <Button
                size="sm"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all whitespace-nowrap h-auto py-1.5 px-2 sm:px-3"
                disabled={!agronomist.isAvailable}
                onClick={() => handleCallAgronomist(agronomist)}
              >
                <Phone className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const ShopListView = () => (
    <div className="space-y-4">
      {filteredShops.map((shop, index) => (
        <motion.div
          key={shop.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.02 }}
          whileHover={{ scale: 1.01 }}
        >
          <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>

            <CardContent className="p-6">
              <div className="flex items-start gap-6">
                {/* Store Icon Section */}
                <div className="flex flex-col items-center gap-3 flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden shadow-lg group-hover:shadow-xl transition-all">
                    <Store className="h-10 w-10 text-white" />
                  </div>
                  <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-xs px-3 py-1">
                    Shop
                  </Badge>
                </div>

                {/* Main Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900">{shop.name}</h3>
                        <Store className="h-5 w-5 text-blue-600" />
                      </div>
                      <p className="text-blue-700 font-semibold text-sm">{shop.county}</p>
                    </div>

                    <div className="text-right">
                      <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700 font-semibold">
                        Retail
                      </Badge>
                    </div>
                  </div>

                  {/* Location Info */}
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Location</p>
                        <p className="font-bold text-sm text-gray-900">{shop.majorTown}</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Button */}
                  {shop.phone && (
                    <Button
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold shadow-md hover:shadow-lg transition-all"
                      onClick={() => window.location.href = `tel:${shop.phone}`}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Shop
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=1920')`
            }}
          ></div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full opacity-10 -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full opacity-10 -ml-48 -mb-48"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4 px-4 py-2 bg-green-500/30 backdrop-blur-sm rounded-full border border-green-400/50"
              >
                <span className="text-sm font-semibold flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Agricultural Solutions Hub
                </span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Experts & Resources
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                Find certified agronomists for expert consultation or locate nearby shops for quality agricultural supplies.
                Your complete farming resource in one place.
              </p>
              <div className="max-w-md mx-auto">
                <SearchComponent
                  placeholder="Search agronomists by name or specialization..."
                  onProductSelect={handleAgronomistSelect}
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">{agronomists.length}</div>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <Award className="h-4 w-4 text-green-600" />
                  Expert Agronomists
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">{getAvailableAgronomists().length}</div>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Available Now
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">{shops.length}</div>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <Store className="h-4 w-4 text-blue-600" />
                  Retail Shops
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-green-600" />
                  Counties Covered
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">4.7</div>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  Avg Rating
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="py-6 bg-green-50 border-b">
          <div className="container mx-auto px-4">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-green-800">Need Immediate Agricultural Help?</h3>
              <p className="text-sm text-green-700">Contact our expert agronomists directly</p>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700"
              >
                <a href="tel:+254705824633">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency Line
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                onClick={() => {
                  const message = "I need urgent agricultural consultation. Please connect me with an available agronomist.";
                  const whatsappUrl = `https://wa.me/254705824633?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Support
              </Button>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="bg-white border-b sticky top-0 z-20">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full justify-start bg-transparent border-b-2 border-gray-200 rounded-none h-auto p-0">
                <TabsTrigger
                  value="agronomists"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-green-600 data-[state=active]:bg-transparent px-6 py-4"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Expert Agronomists
                </TabsTrigger>
                <TabsTrigger
                  value="shops"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent px-6 py-4"
                >
                  <Store className="h-4 w-4 mr-2" />
                  Find Shops & Retailers
                </TabsTrigger>
              </TabsList>

              {/* Agronomists Filters */}
              <TabsContent value="agronomists">
                <div className="py-6">
                  <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                    <div className="flex flex-wrap gap-4 items-center">
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger className="w-48">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location.value} value={location.value}>
                              {location.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Status</SelectItem>
                          <SelectItem value="available">Available</SelectItem>
                          <SelectItem value="busy">Busy</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rating">Rating</SelectItem>
                          <SelectItem value="name">Name</SelectItem>
                          <SelectItem value="experience">Experience</SelectItem>
                          <SelectItem value="consultations">Consultations</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">
                        {filteredAgronomists.length} of {agronomists.length} experts
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Shops Filters */}
              <TabsContent value="shops">
                <div className="py-6">
                  <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                    <div className="flex flex-wrap gap-4 items-center">
                      <Input
                        placeholder="Search shops by name or location..."
                        value={shopSearchTerm}
                        onChange={(e) => setShopSearchTerm(e.target.value)}
                        className="w-64"
                      />

                      <Select value={selectedCounty} onValueChange={setSelectedCounty}>
                        <SelectTrigger className="w-48">
                          <SelectValue placeholder="Select county" />
                        </SelectTrigger>
                        <SelectContent>
                          {counties.map((county) => (
                            <SelectItem key={county.value} value={county.value}>
                              {county.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">
                        {filteredShops.length} of {shops.length} shops
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {activeTab === "agronomists" ? (
              <>
                <ListView />
                {filteredAgronomists.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                  >
                    <div className="text-gray-400 mb-4">
                      <Users className="h-16 w-16 mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No agronomists found</h3>
                    <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                    <Button onClick={() => {
                      setSearchTerm("");
                      setSelectedLocation("all");
                      setAvailabilityFilter("all");
                    }}>
                      Clear filters
                    </Button>
                  </motion.div>
                )}
              </>
            ) : (
              <>
                <ShopListView />
                {filteredShops.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                  >
                    <div className="text-gray-400 mb-4">
                      <Store className="h-16 w-16 mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No shops found</h3>
                    <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                    <Button onClick={() => {
                      setShopSearchTerm("");
                      setSelectedCounty("all");
                    }}>
                      Clear filters
                    </Button>
                  </motion.div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Integrated Resources Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50 border-y">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Complete Agricultural Ecosystem
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access both expert consultation and quality supplies in your area. We connect you with certified agronomists and trusted retailers.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Agronomist Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Consultation</h3>
                    <p className="text-sm text-gray-600">Connect with certified agronomists for personalized farm advice</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quick Response</h3>
                    <p className="text-sm text-gray-600">Get rapid responses to your agricultural questions and concerns</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-green-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Verified Experts</h3>
                    <p className="text-sm text-gray-600">All agronomists are certified and have proven track records</p>
                  </div>
                </div>
              </motion.div>

              {/* Shop Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-blue-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Store className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Supplies</h3>
                    <p className="text-sm text-gray-600">Access genuine agricultural products from trusted retailers</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-blue-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Nearby Locations</h3>
                    <p className="text-sm text-gray-600">Find retail shops conveniently located near you</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-blue-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Easy Access</h3>
                    <p className="text-sm text-gray-600">Quick contact options and directions to nearby shops</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Need Immediate Consultation?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Our expert agronomists are available for emergency consultations and urgent farm issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Hotline: +254 700 123 456
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Agronomists;
