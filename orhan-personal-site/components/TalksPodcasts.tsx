export default function TalksPodcasts() {
  const talks = [
    {
      title: "IDEF '25 Defense Technology Summit",
      type: "Conference Talk",
      status: "Upcoming",
      description: "Presenting next-generation AI-driven simulation architectures for defense applications and operational analysis.",
      date: "May 2025",
      location: "Istanbul, Turkey",
      buttonText: "Learn More"
    },
    {
      title: "SAHA Expo: The Future of Defense Simulation",
      type: "Industry Expo",
      status: "Upcoming",
      description: "Showcasing S-FORCE ecosystem capabilities and live demonstrations of distributed wargaming scenarios.",
      date: "April 2025",
      location: "Ankara, Turkey",
      buttonText: "Learn More"
    },
    {
      title: "The S-FORCE Journey: Building AI-Powered Ecosystems",
      type: "Podcast",
      status: "Recorded",
      description: "Deep dive into the architectural decisions, challenges, and innovations behind the S-FORCE platform.",
      date: "March 2025",
      location: "Tech Defense Podcast",
      buttonText: "Listen"
    },
    {
      title: "NATO TT3 Workshop: LVC Integration Standards",
      type: "Workshop",
      status: "Past",
      description: "Contributing to NATO standardization efforts for Live-Virtual-Constructive simulation interoperability.",
      date: "February 2025",
      location: "Brussels, Belgium",
      buttonText: "Learn More"
    },
    {
      title: "S-FORCE Tech Talks: AI in Tactical Simulation",
      type: "Technical Webinar Series",
      status: "Ongoing",
      description: "Monthly series exploring AI-driven tactical engines, autonomous decision-making, and simulation methodologies.",
      date: "Ongoing",
      location: "Online",
      buttonText: "Learn More"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Recorded":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Past":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      case "Ongoing":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="talks" className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12">
          <p className="text-blue-400 text-sm font-medium mb-2 tracking-wider uppercase">
            TALKS & MEDIA
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Talks & Podcasts
          </h2>
        </div>
        <div className="space-y-6">
          {talks.map((talk, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 transition-colors"
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-gray-900/50 flex items-center justify-center p-8 min-h-[200px]">
                  <div className="text-5xl">🎤</div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                        {talk.title}
                      </h3>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-blue-500 text-sm font-medium">
                          {talk.type}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(talk.status)}`}>
                          {talk.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {talk.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {talk.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {talk.location}
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    {talk.buttonText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Interested in having me speak at your event or podcast?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg transition-colors"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

