'use client';
import { motion } from 'framer-motion';

export default function DMLivesProjectPage() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section with Subtle Styling */}
      <div className="relative">
        {/* Subtle gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        
        {/* Very subtle radial gradient background */}
        <div className="absolute inset-0 bg-radial-gradient from-purple-500/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">
                E-Commerce
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-bold text-white mb-8 leading-tight"
            >
              DM Lives
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              A technology-enhanced wellness brand leveraging smart solutions to deliver 
              personalized tea experiences and streamlined operations.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Overview Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                At DM Lives, I developed an integrated platform that combines intelligent 
                recommendation systems with automated operations to create a personalized 
                wellness experience. The solution helps customers discover tea blends that 
                match their preferences and wellness goals while ensuring efficient 
                business operations.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Key Features</h3>
              <ul className="space-y-3">
                {[
                  "Intelligent tea recommendation system",
                  "Automated inventory management",
                  "Streamlined order processing",
                  "Real-time analytics dashboard",
                  "Personalized customer experience"
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-3 text-gray-300"
                  >
                    <svg className="w-6 h-6 text-purple-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Technical Implementation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Technical Implementation</h2>
              <div className="grid gap-6">
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Smart Systems</h3>
                  <ul className="space-y-3">
                    {[
                      "Preference-based recommendation engine",
                      "Customer profile analysis",
                      "Wellness goal tracking",
                      "Automated inventory alerts",
                      "Order fulfillment optimization"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <svg className="w-5 h-5 text-indigo-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Results Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-white text-center">Impact & Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Experience",
                description: "Created an intuitive, personalized shopping experience that helps customers find the perfect tea blends for their wellness journey.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              },
              {
                title: "Operational Efficiency",
                description: "Streamlined business operations through automated inventory management and order processing systems.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              },
              {
                title: "Business Growth",
                description: "Enhanced business decision-making through real-time analytics while maintaining focus on quality and authenticity.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="bg-gradient-to-br from-gray-800 to-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors duration-300"
              >
                <div className="text-purple-400 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 