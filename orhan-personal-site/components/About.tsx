export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12">
          <p className="text-blue-400 text-sm font-medium mb-2 tracking-wider uppercase">
            ABOUT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Architecting the Future of Simulation
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 16 years of deep expertise in modeling and simulation, I lead the development of cutting-edge AI-powered simulation ecosystems that transform how defense organizations approach wargaming and operational analysis.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              As the lead architect of the S-FORCE ecosystem, I've pioneered on simulation frameworks that seamlessly integrate operational analysis tools with tactical engines, distributed simulation architectures, and advanced analytical tools.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My contributions to NATO TT3 and work on Live-Virtual-Constructive (LVC) architectures have helped shape international standards for distributed simulation interoperability and operational readiness.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Core Focus Areas
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-300">AI-powered simulation frameworks and autonomous tactical systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-300">Distributed simulation architectures and NATO LVC integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-300">Advanced wargaming environments for operational analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-300">Real-time data fusion and decision support systems</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Current Projects
              </h3>
              <div className="space-y-2">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                  <span className="text-white font-medium">S-FORCE Analyst AI Engine</span>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                  <span className="text-white font-medium">NATO TT3 Integration Layer</span>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                  <span className="text-white font-medium">Distributed Wargaming Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              Simulation Architecture
            </h4>
            <p className="text-gray-400 text-sm">
              16+ years designing and implementing distributed simulation systems
            </p>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              LVC Integration
            </h4>
            <p className="text-gray-400 text-sm">
              NATO TT3 contributor, Live-Virtual-Constructive architectures
            </p>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              AI-Driven Modeling
            </h4>
            <p className="text-gray-400 text-sm">
              Advanced AI frameworks for tactical decision-making and analysis
            </p>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              S-FORCE Ecosystem
            </h4>
            <p className="text-gray-400 text-sm">
              Lead architect of comprehensive operational analysis environment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

