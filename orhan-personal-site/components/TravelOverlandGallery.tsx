export default function TravelOverlandGallery() {
  const stats = [
    { value: "25+", label: "Countries" },
    { value: "500K+", label: "Kilometers" },
    { value: "1000+", label: "Photos" }
  ];

  const galleryItems = [
    { title: "Overland Adventure", category: "Remote Wilderness", emoji: "🚙" },
    { title: "Mountain Expedition", category: "High Altitude", emoji: "⛰️" },
    { title: "Desert Journey", category: "Endless Roads", emoji: "🏜️" },
    { title: "Nature Exploration", category: "Wild Outdoors", emoji: "🌲" },
    { title: "Wilderness Camping", category: "Off the Grid", emoji: "⛺" },
    { title: "Scenic Landscapes", category: "Nature's Canvas", emoji: "🖼️" }
  ];

  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12">
          <p className="text-blue-400 text-sm font-medium mb-2 tracking-wider uppercase">
            EXPLORATION
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Beyond Code: Overland & Exploration
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Capturing nature, travel, and freedom through the lens of adventure and discovery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold text-blue-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 transition-colors group"
            >
              <div className="aspect-square bg-gray-900/50 flex items-center justify-center relative">
                <div className="text-6xl">{item.emoji}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {item.category}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Follow my adventures and photography on Instagram
          </p>
          <a
            href="https://instagram.com/overland.explorer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @overland.explorer
          </a>
        </div>
      </div>
    </section>
  );
}

