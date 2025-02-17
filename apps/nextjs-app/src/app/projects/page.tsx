export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
      
      <div className="grid gap-6 md:grid-cols-3">
        <a 
          href="/projects/firedog" 
          className="block bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Firedog Fireproofing</h2>
          <p className="text-gray-600">
            I engineered a high-performance NAS infrastructure with 
            comprehensive backup solutions, ensuring seamless data integrity and disaster recovery 
            through Synology NAS and Hyper Backup technologies.
          </p>
        </a>

        <a 
          href="/projects/maven" 
          className="block bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Maven Baseball Lab</h2>
          <p className="text-gray-600">
            Develop data-driven solutions to streamline player performance analysis, integrating data 
            from Blast, Trackman, and motion capture systems. Build and optimize machine learning models 
            to extract key performance metrics.
          </p>
        </a>

        <a 
          href="/projects/dmlives" 
          className="block bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">DM Lives</h2>
          <p className="text-gray-600">
            Developed and implemented streaming solutions and content management systems
            for digital media platforms.
          </p>
        </a>
      </div>
    </div>
  );
} 