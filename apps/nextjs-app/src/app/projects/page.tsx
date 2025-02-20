'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Maven Baseball Lab",
      description: "Data-driven solutions for player performance analysis, integrating advanced metrics and machine learning models for optimal results.",
      color: "blue",
      link: "/projects/maven",
      gradient: "from-blue-500/20 to-indigo-500/20",
      companyLogo: '/images/companies/maven.svg',
      techStack: [
        { name: 'Python', icon: '/images/tech/python.svg' },
        { name: 'MySQL', icon: '/images/tech/mysql.svg' },
        { name: 'Trackman', icon: '/images/tech/trackman.svg' },
        { name: 'Scikit-learn', icon: '/images/tech/scikit.svg' }
      ]
    },
    {
      title: "DM Lives",
      description: "A technology-enhanced wellness brand leveraging smart solutions to deliver personalized tea experiences and streamlined operations.",
      color: "purple",
      link: "/projects/dmlives",
      gradient: "from-purple-500/20 to-pink-500/20",
      companyLogo: '/images/companies/dmlives.svg',
      techStack: [
        { name: 'Figma', icon: '/images/tech/figma.svg' },
        { name: 'Google Analytics', icon: '/images/tech/google-analytics.svg' },
        { name: 'Python', icon: '/images/tech/python.svg' },
        { name: 'Shopify', icon: '/images/tech/shopify.svg' }
      ]
    },
    {
      title: "Firedog Fireproofing",
      description: "Engineered high-performance NAS infrastructure with comprehensive backup solutions, ensuring seamless data integrity and disaster recovery.",
      color: "indigo",
      link: "/projects/firedog",
      gradient: "from-indigo-500/20 to-purple-500/20",
      companyLogo: '/images/companies/firedog.svg',
      techStack: [
        { name: 'NAS', icon: '/images/tech/nas.svg' },
        { name: 'Backblaze', icon: '/images/tech/backblaze.svg' },
        { name: 'Raid 5', icon: '/images/tech/raid.svg' },
        { name: 'Cloud Integration', icon: '/images/tech/cloud.svg' }
      ]
    }
  ];

  return (
    <div className="space-y-16 bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative text-center py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and technological solutions
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-1">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}></div>
              
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 group-hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-white/90 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        Technical Solution
                      </p>
                    </div>
                    {project.companyLogo && (
                      <div className="relative h-12 w-32 opacity-80 group-hover:opacity-100 transition-opacity">
                        <Image
                          src={project.companyLogo}
                          alt={`${project.title} logo`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-8 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300"
                        >
                          {'icon' in tech && tech.icon && (
                            <div className="relative w-8 h-8">
                              <Image
                                src={tech.icon}
                                alt={tech.name}
                                fill
                                className="object-contain"
                                sizes="32px"
                              />
                            </div>
                          )}
                          <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    className="inline-flex items-center text-gray-300 hover:text-white transition-all group/link"
                  >
                    <span className="font-medium">View Project Details</span>
                    <svg 
                      className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 