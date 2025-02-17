import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { paths } from '@/config/paths';
import { checkLoggedIn } from '@/utils/auth';

export default function HomePage() {
  const isLoggedIn = checkLoggedIn();

  return (
    <div className="space-y-16 bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-white">
          Innovative Technical Solutions
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Delivering cutting-edge solutions in infrastructure, data analytics, and e-commerce optimization
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/contact"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Get Started
          </a>
          <a
            href="/projects"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium border border-gray-700"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-white text-center">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Firedog Project */}
          <div className="group bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-gray-700">
            <div className="h-3 bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Firedog Fireproofing</h3>
              <p className="text-gray-400 mb-4">
                Engineered high-performance NAS infrastructure with comprehensive backup solutions, 
                ensuring seamless data integrity and disaster recovery.
              </p>
              <a 
                href="/projects/firedog"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Maven Project */}
          <div className="group bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700">
            <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Maven Baseball Lab</h3>
              <p className="text-gray-400 mb-4">
                Data-driven solutions for player performance analysis, integrating advanced metrics 
                and machine learning models for optimal results.
              </p>
              <a 
                href="/projects/maven"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* DM Lives Project */}
          <div className="group bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-700">
            <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">DM Lives</h3>
              <p className="text-gray-400 mb-4">
                Technology-enhanced wellness brand with intelligent recommendation systems and 
                automated operations for personalized experiences.
              </p>
              <a 
                href="/projects/dmlives"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-white text-center">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-indigo-400 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Infrastructure & Security</h3>
            <p className="text-gray-400">
              Robust infrastructure solutions with comprehensive security measures and backup systems.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-blue-400 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Data Analytics</h3>
            <p className="text-gray-400">
              Transform raw data into actionable insights with custom analytics solutions.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-purple-400 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Process Optimization</h3>
            <p className="text-gray-400">
              Streamline operations and enhance efficiency through automated workflows and intelligent systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
