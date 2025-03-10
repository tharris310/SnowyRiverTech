'use client';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const services = [
    {
      title: "Industrial Automation",
      description: "Specialized in developing robust communication protocols and control systems for industrial automation.",
      color: "emerald",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      features: [
        "Modbus Protocol Implementation",
        "PLC Communication Systems",
        "Real-time Monitoring Solutions",
        "Industrial Control Integration",
        "Automated Response Protocols"
      ]
    },
    {
      title: "Performance Analytics",
      description: "Advanced data analysis and machine learning solutions focused on sports performance optimization.",
      color: "blue",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      features: [
        "Player Performance Analysis",
        "Machine Learning Models",
        "Statistical Analysis",
        "Data Visualization",
        "Metrics Integration"
      ]
    },
    {
      title: "Infrastructure Security",
      description: "Design and implementation of secure, reliable infrastructure solutions with comprehensive backup systems.",
      color: "indigo",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      features: [
        "NAS Infrastructure Design",
        "Backup Solution Implementation",
        "Disaster Recovery Planning",
        "Data Integrity Protection",
        "System Security Protocols"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-6">Professional Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging technical expertise to deliver customized solutions in industrial automation, 
              performance analytics, and infrastructure security.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-1">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gray-800/80 rounded-xl border border-gray-700 overflow-hidden">
                <div className="p-8">
                  <div className={`text-${service.color}-400 mb-6`}>
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                    </svg>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-gray-300 mb-8 text-lg">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">Key Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + featureIndex * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <svg className={`w-5 h-5 text-${service.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                            </svg>
                            <span className="text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}