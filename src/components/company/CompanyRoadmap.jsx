import { Box, Zap, RefreshCw, Brain, BoxSelect, Maximize } from 'lucide-react';

export default function CompanyRoadmap() {
  
  const roadmapItems = [
    { 
      icon: <Box size={32} />, 
      title: "Software-Defined Electronics Platforms",
      desc: "Hardware that adapts to software updates." 
    },
    { 
      icon: <Zap size={32} />, 
      title: "Ultra-Low-Power System Architectures",
      desc: "Pushing the boundaries of energy efficiency." 
    },
    { 
      icon: <RefreshCw size={32} />, 
      title: "Secure OTA & Remote Lifecycle Management",
      desc: "Updating fleets securely, anywhere." 
    },
    { 
      icon: <Brain size={32} />, 
      title: "Edge Intelligence & On-Device Learning",
      desc: "AI processing without cloud dependency." 
    },
    { 
      icon: <Maximize size={32} />, 
      title: "Digital Twins & Virtual Product Development",
      desc: "Simulating performance before manufacturing." 
    },
    { 
      icon: <BoxSelect size={32} />, 
      title: "Modular Reference Platforms",
      desc: "Accelerating productization with pre-built blocks." 
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            OUR FUTURE <span className="text-[#007BFF]">TECHNOLOGY ROADMAP</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            We are constantly researching and investing in the technologies that will define the next decade of electronics.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapItems.map((item, idx) => (
            <div 
              key={idx} 
              className="relative p-8 bg-white/5 border border-white/10 hover:border-[#007BFF]/50 hover:bg-white/10 transition-all duration-300 rounded-sm group overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#007BFF] opacity-[0.05] blur-[50px] group-hover:opacity-20 transition-opacity"></div>

              <div className="mb-6 text-gray-400 group-hover:text-[#007BFF] group-hover:scale-110 transition-all duration-300 origin-left">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {item.title}
              </h3>
              
              <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}