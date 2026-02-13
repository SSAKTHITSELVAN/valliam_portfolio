import React from 'react';
import { 
  Car, Cpu, Radio, RefreshCw, 
  ShieldCheck, Activity, Zap, Navigation 
} from 'lucide-react';

export default function NextGenMobility() {
  const directionItems = [
    { icon: <Cpu size={28} />, title: "Software-Defined Architecture", desc: "Decoupling hardware from software to enable rapid feature deployment and continuous updates." },
    { icon: <Zap size={28} />, title: "Zonal E/E & Gateways", desc: "Centralized computing architectures that reduce wiring complexity and enhance high-speed data throughput." },
    { icon: <Activity size={28} />, title: "AI Perception & Sound", desc: "Adaptive AVAS and sensory systems that interpret the environment for safer autonomous operation." },
    { icon: <RefreshCw size={28} />, title: "Continuous OTA Evolution", desc: "Vehicles that improve post-sale through seamless, secure over-the-air software updates." },
    { icon: <ShieldCheck size={28} />, title: "Safety-Certified Platforms", desc: "Robust, secure foundations designed to meet rigorous ISO 26262 and cybersecurity standards." },
    { icon: <Car size={28} />, title: "Lifecycle Digital Twins", desc: "Virtual replicas managing vehicle health, predictive maintenance, and fleet optimization." }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20 min-h-screen">
      
      {/* 1. HERO SECTION - BLUE THEME (Updated Colors) */}
      <section className="relative py-32 bg-[#050505] text-white overflow-hidden min-h-[80vh] flex items-center">
        
        {/* === BACKGROUND === */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* 1. Dark Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a101a] to-[#050505]"></div>
            
            {/* 2. "Speed Lines" Effect (Blue) */}
            <div className="absolute inset-0 opacity-20"
                 style={{ 
                     backgroundImage: 'repeating-linear-gradient(90deg, transparent 0, transparent 49px, #007BFF 50px), repeating-linear-gradient(180deg, transparent 0, transparent 49px, #333 50px)', 
                     backgroundSize: '200px 200px',
                     transform: 'perspective(500px) rotateX(60deg) scale(2)',
                     transformOrigin: 'center top',
                     maskImage: 'linear-gradient(to bottom, transparent 10%, black 100%)'
                 }}>
            </div>

            {/* 3. Glowing Blue Light Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#007BFF] opacity-20 blur-[150px] rounded-full"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full">
          <div className="lg:w-3/4">
            
            {/* Tag - Changed to Blue */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-full mb-8 backdrop-blur-md">
              <Car size={14} className="text-[#007BFF]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#007BFF] uppercase" style={{ fontFamily: 'Rajdhani' }}>
                Intelligent Platforms
              </span>
            </div>
            
            {/* Small Header */}
            <h2 className="text-xl md:text-2xl text-gray-500 font-bold mb-4 uppercase tracking-widest" style={{ fontFamily: 'Rajdhani' }}>
              Next-Gen Mobility
            </h2>

            {/* Main Title - Changed to Blue Gradient */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'Rajdhani' }}>
              Software-Defined <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#3395ff] to-[#00C6FF]">
                Vehicles
              </span>
            </h1>

            {/* Description */}
            <div className="flex flex-col md:flex-row gap-8 items-start border-l-4 border-[#007BFF] pl-8">
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl font-light" style={{ fontFamily: 'IBM Plex Sans' }}>
                  We are building platforms for future mobility systems where vehicles become <span className="text-white font-medium">software-defined, intelligent, connected</span>, and continuously evolving products.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FUTURE DIRECTION GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Rajdhani' }}>
                FUTURE <span className="text-[#007BFF]">DIRECTION</span>
              </h2>
            </div>
            <div className="hidden md:block w-1/3 h-px bg-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directionItems.map((item, idx) => (
              <div key={idx} className="bg-white p-10 border border-gray-100 shadow-sm rounded-xl group relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                {/* Blue Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#007BFF]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Icon Container - Blue */}
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#007BFF] mb-8 group-hover:bg-[#007BFF] group-hover:text-white transition-colors duration-300 shadow-sm">
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
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden text-center border-t border-gray-900">
        {/* Radar Effect Background */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#007BFF]/5 blur-[80px] rounded-full"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="mb-10 flex justify-center">
            <Radio size={48} className="text-[#007BFF] animate-pulse" />
          </div>
          
          <h2 className="text-sm font-bold text-gray-500 mb-8 tracking-[0.4em] uppercase" style={{ fontFamily: 'Rajdhani' }}>
            Evolving Ecosystems
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-light text-white leading-tight" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To enable vehicles that <span className="text-[#007BFF] font-semibold">improve over time</span>, adapt to user behavior, and operate as intelligent nodes within connected mobility ecosystems."
          </h3>
          
          <div className="mt-16 w-32 h-1 bg-gradient-to-r from-transparent via-[#007BFF] to-transparent mx-auto"></div>
        </div>
      </section>
    </main>
  );
}