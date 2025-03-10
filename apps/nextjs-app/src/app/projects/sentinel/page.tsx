'use client';
import { motion } from 'framer-motion';

export default function SentinelProjectPage() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section with Subtle Styling */}
      <div className="relative">
        {/* Subtle gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
        
        {/* Very subtle radial gradient background */}
        <div className="absolute inset-0 bg-radial-gradient from-emerald-500/5 to-transparent"></div>
        
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
              <span className="text-sm font-medium text-emerald-400 tracking-wider uppercase">
                Industrial Automation
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-bold text-white mb-8 leading-tight"
            >
              Sentinel Devices
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Engineered a secure and reliable Modbus protocol implementation for industrial PLCs, 
              enabling robust communication and control in automation environments.
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
                At Sentinel Devices, I developed a comprehensive Modbus protocol implementation 
                that enables secure and reliable communication with industrial PLCs. The solution 
                provides real-time monitoring capabilities while ensuring data integrity and 
                system security in industrial automation environments.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Key Features</h3>
              <ul className="space-y-3">
                {[
                  "Robust Modbus protocol implementation",
                  "Real-time PLC communication",
                  "Data integrity verification",
                  "Secure command execution",
                  "Performance monitoring"
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-3 text-gray-300"
                  >
                    <svg className="w-6 h-6 text-emerald-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <h3 className="text-xl font-semibold text-white mb-4">Security Solutions</h3>
                  <ul className="space-y-3">
                    {[
                      "Modbus TCP/RTU protocol handling",
                      "Custom packet validation",
                      "Error detection and recovery",
                      "Command queueing system",
                      "Real-time data processing"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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
                title: "Communication Reliability",
                description: "Implemented robust Modbus protocol handling with error recovery, ensuring reliable PLC communication.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              },
              {
                title: "System Integration",
                description: "Successfully integrated with various PLC systems, providing a standardized communication interface.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              },
              {
                title: "Performance Optimization",
                description: "Achieved efficient data transfer and command execution while maintaining system security.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="bg-gradient-to-br from-gray-800 to-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-colors duration-300"
              >
                <div className="text-emerald-400 mb-4">
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