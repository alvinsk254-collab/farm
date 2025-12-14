import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Truck, 
  Leaf, 
  CheckCircle,
  MapPin,
  Calendar,
  Camera,
  Tractor,
  Sprout,
  Shield
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "David Kamau",
      position: "Founder & CEO",
      bio: "Agricultural engineer with 20+ years in agribusiness and sustainable farming solutions. Passionate about transforming Kenyan agriculture.",
      avatar: "DK",
      background: "from-green-500 to-green-700",
      imageUrl: "https://images.pexels.com/photos/29782068/pexels-photo-29782068.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sarah Njeri",
      position: "Operations Director",
      bio: "Expert in supply chain management and agricultural product distribution across East Africa. Ensures seamless operations nationwide.",
      avatar: "SN",
      background: "from-green-500 to-green-700",
      imageUrl: "https://images.pexels.com/photos/15876334/pexels-photo-15876334.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. Michael Otieno",
      position: "Chief Agronomist",
      bio: "PhD in Plant Pathology with extensive experience in crop protection and integrated pest management. Leads our technical team.",
      avatar: "MO",
      background: "from-purple-500 to-purple-700",
      imageUrl: "https://images.pexels.com/photos/3912470/pexels-photo-3912470.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Grace Wanjala",
      position: "Customer Relations Manager",
      bio: "Passionate about farmer education and ensuring excellent customer service and support. Your satisfaction is our priority.",
      avatar: "GW",
      background: "from-pink-500 to-pink-700",
      imageUrl: "https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "John Mwamba",
      position: "Quality Assurance Manager",
      bio: "Ensures all products meet international standards and regulatory compliance requirements. Quality is never compromised.",
      avatar: "JM",
      background: "from-orange-500 to-orange-700",
      imageUrl: "https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Peter Kiprotich",
      position: "Field Operations Manager",
      bio: "Coordinates on-site services and manages our network of field agronomists across Kenya. Always in the field with farmers.",
      avatar: "PK",
      background: "from-indigo-500 to-indigo-700",
      imageUrl: "https://images.pexels.com/photos/17903068/pexels-photo-17903068.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const workGallery = [
    {
      id: 1,
      title: "Expert Field Consultation",
      description: "Professional agronomists conducting comprehensive on-site crop assessments and providing strategic recommendations for optimal plant health and productivity.",
      location: "Kiambu County",
      category: "Field Work",
      imageUrl: "https://images.pexels.com/photos/4490453/pexels-photo-4490453.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2"
    },
    {
      id: 2,
      title: "Advanced Greenhouse Technology",
      description: "State-of-the-art greenhouse operations featuring precision climate control and advanced nutrient management systems for premium crop production.",
      location: "Naivasha",
      category: "Technology",
      imageUrl: "https://images.pexels.com/photos/5530982/pexels-photo-5530982.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2"
    },
    {
      id: 3,
      title: "Farmer Training & Skills Development",
      description: "Comprehensive training programs equipping farmers with cutting-edge techniques in product application, integrated pest management, and sustainable farming practices.",
      location: "Nakuru County",
      category: "Training",
      imageUrl: "https://images.pexels.com/photos/4493706/pexels-photo-4493706.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2"
    },
    {
      id: 4,
      title: "Premium Laboratory Excellence",
      description: "Cutting-edge testing facility with advanced analytical equipment ensuring rigorous quality assurance and product development standards.",
      location: "Nairobi Office",
      category: "Laboratory",
      imageUrl: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2"
    },
    {
      id: 5,
      title: "Specialty Coffee Cultivation",
      description: "Expert coffee farm management combining traditional knowledge with modern technology for disease control and exceptional yield optimization.",
      location: "Nyeri County",
      category: "Specialty Crops",
      imageUrl: "https://images.pexels.com/photos/4490456/pexels-photo-4490456.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2"
    },
    {
      id: 6,
      title: "Smart Precision Agriculture",
      description: "Innovative drone-based monitoring and precision application systems maximizing resource efficiency while minimizing environmental impact.",
      location: "Machakos County",
      category: "Technology",
      imageUrl: "https://images.pexels.com/photos/5530983/pexels-photo-5530983.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2"
    },
    {
      id: 7,
      title: "Modern Farm Mechanization",
      description: "Complete agricultural machinery solutions and technical support ensuring farmers have access to the latest equipment for enhanced productivity.",
      location: "Laikipia County",
      category: "Equipment",
      imageUrl: "https://images.pexels.com/photos/4490454/pexels-photo-4490454.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2"
    },
    {
      id: 8,
      title: "Farmer Success & Impact",
      description: "Real stories of agricultural transformation showcasing how our comprehensive support system helps farmers achieve sustainable growth and profitability.",
      location: "Various Counties",
      category: "Success",
      imageUrl: "https://images.pexels.com/photos/5530981/pexels-photo-5530981.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2"
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Started as a small agricultural consultancy in Nairobi with a vision to transform Kenyan agriculture.",
      icon: <Sprout className="h-5 sm:h-6 w-5 sm:w-6" />
    },
    {
      year: "2017",
      title: "Product Distribution",
      description: "Began importing and distributing premium agrochemicals from leading international manufacturers.",
      icon: <Truck className="h-5 sm:h-6 w-5 sm:w-6" />
    },
    {
      year: "2019",
      title: "Regional Expansion",
      description: "Expanded operations to serve farmers across 10 counties with mobile agronomist services.",
      icon: <MapPin className="h-5 sm:h-6 w-5 sm:w-6" />
    },
    {
      year: "2021",
      title: "Digital Platform",
      description: "Launched digital platform for online consultations and product ordering.",
      icon: <Users className="h-5 sm:h-6 w-5 sm:w-6" />
    },
    {
      year: "2023",
      title: "Sustainability Initiative",
      description: "Introduced eco-friendly product lines and sustainable farming training programs.",
      icon: <Leaf className="h-5 sm:h-6 w-5 sm:w-6" />
    },
    {
      year: "2024",
      title: "Innovation Center",
      description: "Opened state-of-the-art research facility for crop testing and product development.",
      icon: <Award className="h-5 sm:h-6 w-5 sm:w-6" />
    }
  ];

  const values = [
    {
      icon: <Target className="h-6 sm:h-8 w-6 sm:w-8" />,
      title: "Excellence",
      description: "Committed to delivering premium quality products and world-class services that exceed expectations and drive measurable results."
    },
    {
      icon: <Heart className="h-6 sm:h-8 w-6 sm:w-8" />,
      title: "Farmer-Centric",
      description: "Every strategic decision revolves around farmer success, profitability, and sustainable livelihood enhancement."
    },
    {
      icon: <Leaf className="h-6 sm:h-8 w-6 sm:w-8" />,
      title: "Sustainability",
      description: "Pioneering environmentally responsible agriculture that balances productivity with ecological preservation."
    },
    {
      icon: <Users className="h-6 sm:h-8 w-6 sm:w-8" />,
      title: "Community",
      description: "Building enduring partnerships and empowering agricultural communities across East Africa through knowledge sharing."
    }
  ];

  const achievements = [
    { icon: <Users className="h-5 sm:h-6 w-5 sm:w-6" />, number: "100k+", label: "Farmers Served" },
    { icon: <MapPin className="h-5 sm:h-6 w-5 sm:w-6" />, number: "47", label: "Counties Covered" },
    { icon: <Award className="h-5 sm:h-6 w-5 sm:w-6" />, number: "100+", label: "Premium Products" },
    { icon: <Truck className="h-5 sm:h-6 w-5 sm:w-6" />, number: "24/7", label: "Support Available" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-12 sm:py-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1462892/pexels-photo-1462892.jpeg?auto=compress&cs=tinysrgb&w=1920')`
            }}
          ></div>
          <div className="absolute inset-0 bg-green-900/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                About Mutuchem Enterprises Limited
              </h1>
              <p className="text-lg sm:text-xl text-green-100 max-w-3xl mx-auto">
                Revolutionizing East African agriculture through innovative solutions, expert agronomy,
                and an unwavering commitment to farmer prosperity since 2015.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-green-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Target className="h-6 sm:h-8 w-6 sm:w-8 text-green-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Empower African farmers with premium agricultural innovations, expert guidance, and world-class
                  products that transform farming operations and drive sustainable productivity growth across the region.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-green-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Eye className="h-6 sm:h-8 w-6 sm:w-8 text-green-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-sm sm:text-base text-gray-600">
                  To establish Mutuchem as East Africa's premier agricultural innovation leader,
                  revolutionizing farming through cutting-edge solutions and creating thriving agricultural communities.
                </p>
              </motion.div>

              {/* Purpose */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-purple-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Heart className="h-6 sm:h-8 w-6 sm:w-8 text-purple-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Purpose</h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Transform agricultural livelihoods by providing farmers with premium tools,
                  expert guidance, and unwavering support to build resilient, profitable farming enterprises.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-12 sm:py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Impact
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Measurable results demonstrating our commitment to transforming African agriculture.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="text-green-600">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">{achievement.number}</div>
                  <div className="text-sm sm:text-base text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Work in Action
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Witness the transformative impact of our integrated agricultural solutions across diverse farming operations in East Africa.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {workGallery.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    Real Work Image
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img 
                        src={work.imageUrl}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      
                      <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs">
                        {work.category}
                      </Badge>
                      
                      <div className="absolute bottom-3 right-3 flex items-center text-white text-xs bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {work.location}
                      </div>
                    </div>
                    
                    <CardContent className="p-3 sm:p-4">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors text-sm sm:text-base">
                        {work.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                        {work.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Agricultural Showcase */}
        {/* <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Transforming Agriculture Across Kenya
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From smallholder farms to commercial operations, we're proud to support agricultural excellence throughout the region.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl shadow-lg group"
              >
                <img
                  src="https://images.pexels.com/photos/33372318/pexels-photo-33372318.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Agricultural landscape"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Sustainable Farming</h3>
                  <p className="text-sm opacity-90">Environmental stewardship</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl shadow-lg group"
              >
                <img
                  src="https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern farming equipment"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Modern Technology</h3>
                  <p className="text-sm opacity-90">Advanced equipment</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl shadow-lg group md:col-span-2 lg:col-span-1"
              >
                <img
                  src="https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Farmers at work"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Expert Guidance</h3>
                  <p className="text-sm opacity-90">Professional support</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section> */}

        {/* Our Values */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                The foundational principles driving every decision and action in our mission to revolutionize agriculture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                    <div className="text-green-600">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                The passionate experts behind AgroVet Pro's success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="h-48 sm:h-56 relative overflow-hidden">
                      <img 
                        src={member.imageUrl}
                        alt={`${member.name} - ${member.position}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                       */}
                      {/* Team Member Info Overlay */}
                      {/* <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg sm:text-xl font-bold">{member.name}</h3>
                        <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                          {member.position}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-4 sm:p-6">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}


        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-green-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Transform Your Farming Journey Today
              </h2>
              <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join hundreds of successful farmers across East Africa who have revolutionized their operations
                with Mutuchem's premium products and expert guidance. Your path to agricultural excellence awaits.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.a
                  href="/products"
                  whileHover={{ scale: 1.05 }}
                  className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center btn-mobile"
                >
                  <CheckCircle className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  Explore Products
                </motion.a>
                <motion.a
                  href="/agronomists"
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center btn-mobile"
                >
                  <Users className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  Meet Our Experts
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
