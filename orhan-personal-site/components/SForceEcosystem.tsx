export default function SForceEcosystem() {
  const layers = [
    "Data Layer",
    "Simulation Core",
    "Real-time Processor",
    "Federation Manager",
    "Analytics Dashboard"
  ];

  return (
    <section id="sforce" className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12">
          <p className="text-blue-400 text-sm font-medium mb-2 tracking-wider uppercase">
            ARCHITECTURE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            S-FORCE Ecosystem Overview
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            A distributed, multi-layered architecture enabling seamless integration of analysis, real-time simulation, and operational decision support.
          </p>
        </div>
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 md:p-12">
          <div className="relative mb-8">
            <div className="space-y-4">
              {layers.map((layer, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">
                        {layer}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-700">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Primary Systems</h4>
              <p className="text-gray-400 text-sm">
                Core simulation and analysis components
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Processing Modules</h4>
              <p className="text-gray-400 text-sm">
                Real-time data processing
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Data Flow</h4>
              <p className="text-gray-400 text-sm">
                Seamless integration and interoperability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

