export default function ProjectsPage() {
  return (
    <div className="space-y-12 bg-gray-900 text-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Featured Projects</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explore our portfolio of innovative solutions and technological achievements
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-3">
        <a 
          href="/projects/firedog" 
          className="group block bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20 border border-gray-700"
        >
          <div className="h-3 bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Firedog Fireproofing</h2>
              <span className="text-indigo-400 group-hover:translate-x-1 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              At Snowy River Technologies, I engineered a high-performance NAS infrastructure with 
              comprehensive backup solutions, ensuring seamless data integrity and disaster recovery 
              through Synology NAS and Hyper Backup technologies.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm font-medium border border-indigo-700">Infrastructure</span>
              <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm font-medium border border-indigo-700">Backup Solutions</span>
            </div>
          </div>
        </a>

        <a 
          href="/projects/maven" 
          className="group block bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 border border-gray-700"
        >
          <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Maven Baseball Lab</h2>
              <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Develop data-driven solutions to streamline player performance analysis, integrating data 
              from Blast, Trackman, and motion capture systems. Build and optimize machine learning models 
              to extract key performance metrics.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium border border-blue-700">Data Analytics</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium border border-blue-700">Machine Learning</span>
            </div>
          </div>
        </a>

        <a 
          href="/projects/dmlives" 
          className="group block bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 border border-gray-700"
        >
          <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">DM Lives</h2>
              <span className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              At Snowy River Technologies, I built DM Lives as a technology-enhanced wellness brand, 
              integrating smart solutions to create a seamless and personalized customer experience 
              for organic tea enthusiasts.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm font-medium border border-purple-700">E-commerce</span>
              <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm font-medium border border-purple-700">Automation</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
} 