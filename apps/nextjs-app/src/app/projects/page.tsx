'use client';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Maven Baseball Lab",
      description: "Data-driven solutions for player performance analysis, integrating advanced metrics and machine learning models for optimal results.",
      color: "blue",
      link: "/projects/maven",
      gradient: "from-blue-500/20 to-indigo-500/20",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      title: "DM Lives",
      description: "A technology-enhanced wellness brand leveraging smart solutions to deliver personalized tea experiences and streamlined operations.",
      color: "purple",
      link: "/projects/dmlives",
      gradient: "from-purple-500/20 to-pink-500/20",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Firedog Fireproofing",
      description: "Engineered high-performance NAS infrastructure with comprehensive backup solutions, ensuring seamless data integrity and disaster recovery.",
      color: "orange",
      link: "/projects/firedog",
      gradient: "from-orange-500/20 to-red-500/20",
      icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section with Subtle Styling */}
      <div className="relative">
        {/* Subtle gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        
        {/* Very subtle radial gradient background */}
        <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 to-transparent"></div>
        
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
              <span className="text-sm font-medium text-indigo-400 tracking-wider uppercase">
                Portfolio
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-bold text-white mb-8 leading-tight"
            >
              Projects
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Explore my portfolio of technical solutions, from data analytics to infrastructure optimization.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl">
                <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`}></div>
              </div>
              <div className="relative bg-gray-800/50 p-8 rounded-xl border border-gray-700 group-hover:border-gray-600 transition-all duration-300 h-full">
                <div className={`text-${project.color}-400 mb-4`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={project.icon} />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                  <span>View Project</span>
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
} 