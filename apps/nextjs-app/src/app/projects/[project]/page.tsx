export default function ProjectPage() {
  return (
    <div className="bg-gray-800 shadow rounded-lg p-6 border border-gray-700">
      <h1 className="text-2xl font-bold text-white mb-4">[Project Name]</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-white mb-2">Project Overview</h2>
          <p className="text-gray-400">
            [Project description]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">Technical Solutions</h2>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
              {/* Content */}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Technology 1',
              'Technology 2',
              'Technology 3'
              // Add your technologies here
            ].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium border border-gray-600">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 