export default function ServicesPage() {
  return (
    <div className="space-y-12 bg-gray-900 text-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">My Services</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Delivering innovative technical solutions and consulting services to help businesses thrive in the digital age
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Infrastructure & Security */}
        <div className="group bg-gray-800 rounded-xl p-6 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-gray-700">
          <div className="text-indigo-400 mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Infrastructure & Security</h3>
          <p className="text-gray-400 mb-4">
            Design and implementation of robust infrastructure solutions with comprehensive security measures and backup systems.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center">
              <svg className="w-4 h-4 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              High-performance NAS solutions
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Data backup & recovery
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Security implementation
            </li>
          </ul>
        </div>

        {/* Data Analytics */}
        <div className="group bg-gray-800 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700">
          <div className="text-blue-400 mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Data Analytics</h3>
          <p className="text-gray-400 mb-4">
            Transform raw data into actionable insights with custom analytics solutions and performance tracking systems.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center">
              <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Custom analytics pipelines
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Performance metrics
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Data visualization
            </li>
          </ul>
        </div>

        {/* Process Optimization - Replaced E-commerce */}
        <div className="group bg-gray-800 rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-700">
          <div className="text-purple-400 mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Process Optimization</h3>
          <p className="text-gray-400 mb-4">
            Streamline operations and enhance efficiency through automated workflows and intelligent systems.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center">
              <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Workflow automation
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              System integration
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Efficiency optimization
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}