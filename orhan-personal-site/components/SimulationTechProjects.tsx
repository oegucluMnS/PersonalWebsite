import Image from "next/image";

export default function SimulationTechProjects() {
  const projects = [
    {
      title: "S-FORCE Operational Analysis Environment",
      description: "A comprehensive ecosystem for defense simulation, wargaming, and operational research. Integrates real-time data processing, simulation based analysis, and distributed simulation capabilities.",
      tags: ["Distributed Simulation", "Operational Analysis", "Real-time Processing"],
      icon: "🔬",
      image: "/sforce-logo.png"
    },
    {
      title: "AI-Driven Simulation Frameworks",
      description: "Advanced AI frameworks next generation tactical engine, and autonomous decision-making systems. Leveraging machine learning for realistic opponent modeling and strategic planning.",
      tags: ["AI/ML", "Tactical AI", "Autonomous Systems"],
      icon: "🤖"
    },
    {
      title: "NATO TT3 LVC & Distributed Simulation",
      description: "Contributions to NATO standardization for Live-Virtual-Constructive architectures. Implementation of HLA/DIS protocols, federation management, and cross-platform interoperability solutions.",
      tags: ["NATO Standards", "HLA/DIS", "Interoperability"],
      icon: "🌐"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12">
          <p className="text-blue-400 text-sm font-medium mb-2 tracking-wider uppercase">
            PROJECTS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Simulation & Technology Portfolio
          </h2>
        </div>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 transition-colors"
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-gray-900/50 flex items-center justify-center p-8 min-h-[200px]">
                  {project.image ? (
                    <div className="relative w-full h-full max-w-[180px] max-h-[180px]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={180}
                        height={180}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="text-6xl">{project.icon}</div>
                  )}
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-sm text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg transition-colors"
                      >
                        Learn more
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

