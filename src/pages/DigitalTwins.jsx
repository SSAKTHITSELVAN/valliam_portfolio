import React from 'react';
import { 
  MonitorPlay, Activity, ShieldCheck, 
  RefreshCw, Settings, Layers, Copy, Box, Database 
} from 'lucide-react';

export default function DigitalTwins() {
  const roadmapItems = [
    { icon: <RefreshCw size={28} />, title: "Real-Time Synchronization", desc: "Seamless data mirroring between deployed physical devices and their virtual counterparts." },
    { icon: <MonitorPlay size={28} />, title: "AI-Driven Simulation", desc: "Simulating complex system behaviors and edge cases before they occur in the real world." },
    { icon: <Activity size={28} />, title: "Predictive Lifecycle", desc: "Modeling faults and optimizing maintenance schedules based on live operational feedback." },
    { icon: <ShieldCheck size={28} />, title: "Validation & Security", desc: "Using virtual environments to rigorously test safety protocols and cybersecurity resilience." },
    { icon: <RefreshCw size={28} />, title: "Continuous Improvement", desc: "Closing the loop by feeding operational data back into the design process for future iterations." },
    { icon: <Settings size={28} />, title: "Virtual Commissioning", desc: "Remote diagnostics and system setup, reducing the need for physical on-site intervention." }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20 min-h-screen">
      
      {/* 1. HERO SECTION - IMPROVED PRO DESIGN */}
      <section className="relative py-32 bg-[#020B1C] text-white overflow-hidden">
        
        {/* CSS-Only Advanced Background */}
        <div className="absolute inset-0 z-0">
            {/* Deep Blue Base */}
            <div className="absolute inset-0 bg-[#020B1C]"></div>
            
            {/* Perspective Grid Line Effect */}
            <div className="absolute inset-0 opacity-20" 
                 style={{ 
                     backgroundImage: 'linear-gradient(rgba(0, 123, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 123, 255, 0.2) 1px, transparent 1px)', 
                     backgroundSize: '60px 60px',
                     maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                 }}>
            </div>

            {/* Glowing Orb (Left) */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#007BFF]/30 blur-[120px] rounded-full mix-blend-screen"></div>
            {/* Glowing Orb (Right) */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#007BFF]/10 blur-[100px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="lg:w-3/4">
            {/* Glassmorphism Tag */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md shadow-lg">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#007BFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#007BFF]"></span>
              </div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#007BFF] uppercase" style={{ fontFamily: 'Rajdhani' }}>
                Living Virtual Models
              </span>
            </div>
            
            {/* Main Title with Gradient Text */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[0.9]" style={{ fontFamily: 'Rajdhani' }}>
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00C6FF]">TWINS</span>
            </h1>
            
            {/* Subtitle / Description */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-1 h-24 bg-gradient-to-b from-[#007BFF] to-transparent hidden md:block"></div>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light" style={{ fontFamily: 'IBM Plex Sans' }}>
                  We create exact virtual replicas of physical systems that <span className="text-white font-medium">evolve in real-time</span>. From concept to field operation, our twins bridge the gap between the physical and digital worlds.
                </p>
            </div>

            {/* Tech Stats / Decor */}
            <div className="mt-12 flex gap-8 border-t border-white/10 pt-8 opacity-70">
                <div className="flex items-center gap-3">
                    <Database size={20} className="text-[#007BFF]" />
                    <span className="text-xs tracking-widest uppercase font-mono">Data Synced</span>
                </div>
                <div className="flex items-center gap-3">
                    <Activity size={20} className="text-[#007BFF]" />
                    <span className="text-xs tracking-widest uppercase font-mono">Real-Time</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ROADMAP GRID - IMPROVED CARDS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Rajdhani' }}>
              FUTURE <span className="text-[#007BFF]">ROADMAP</span>
            </h2>
            <div className="w-24 h-1 bg-[#007BFF] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmapItems.map((item, idx) => (
              <div key={idx} className="bg-white p-10 border border-gray-100 shadow-sm rounded-sm group relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#007BFF]/10 to-transparent -mr-10 -mt-10 rounded-full transition-all group-hover:scale-150"></div>

                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-[#007BFF] mb-6 group-hover:bg-[#007BFF] group-hover:text-white transition-colors duration-300 shadow-inner">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#007BFF] transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm relative z-10" style={{ fontFamily: 'IBM Plex Sans' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISION BANNER */}
      <section className="py-24 bg-black relative overflow-hidden text-center border-t border-gray-900">
        {/* Hexagon Pattern Background */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="p-4 rounded-full bg-[#007BFF]/10 border border-[#007BFF]/20">
                <Layers size={40} className="text-[#007BFF]" />
            </div>
          </div>
          
          <h2 className="text-xs font-bold text-gray-500 mb-6 tracking-[0.4em] uppercase" style={{ fontFamily: 'Rajdhani' }}>
            Zero-Defect Innovation
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-light text-white leading-tight" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To make every physical product have a <span className="text-[#007BFF] font-semibold">continuously evolving digital twin</span>, enabling faster innovation and near-zero-defect deployments."
          </h3>
          
          <div className="mt-12 w-32 h-1 bg-gradient-to-r from-transparent via-[#007BFF] to-transparent mx-auto"></div>
        </div>
      </section>
    </main>
  );
}