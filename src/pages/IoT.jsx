import React from 'react';
import { 
  Network, Activity, Layers, Shield, 
  Cloud, Globe, RefreshCw, Smartphone 
} from 'lucide-react';

// 1. IMPORT THE IMAGE
import heroBg from '../assets/iot_bg.jpg'; 

export default function IoTEcosystem() {
  const platformDirection = [
    { id: "01", icon: <Network size={28} />, title: "Autonomous Orchestration", desc: "Self-healing networks where devices manage their own connectivity and health." },
    { id: "02", icon: <Activity size={28} />, title: "AI-Driven Fleet Intelligence", desc: "Predictive operations that anticipate failures before they impact the system." },
    { id: "03", icon: <Layers size={28} />, title: "Digital Twins", desc: "Virtual replicas synchronized in real-time with live device fleets." },
    { id: "04", icon: <Shield size={28} />, title: "Secure-by-Design", desc: "Identity and lifecycle management baked into the hardware root of trust." },
    { id: "05", icon: <Cloud size={28} />, title: "Edge-to-Cloud Pipelines", desc: "Seamless intelligence flows from remote sensors to centralized analytics." },
    { id: "06", icon: <Globe size={28} />, title: "Interoperable Platforms", desc: "Standards-based architecture for large-scale, multi-vendor ecosystems." }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="IoT Ecosystems Background" 
            className="w-full h-full object-cover opacity-40" 
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black to-black"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#007BFF]/20 border border-[#007BFF]/30 rounded-full mb-6 backdrop-blur-sm">
              <Globe size={14} className="text-[#007BFF]" />
              <span className="text-xs font-bold tracking-widest text-[#007BFF] uppercase" style={{ fontFamily: 'Rajdhani' }}>
                Planetary Scale Ecosystems
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Rajdhani' }}>
              IoT - Intelligent <br />
              <span className="text-[#007BFF]">Device Ecosystems</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl border-l-2 border-[#E60000] pl-6" style={{ fontFamily: 'IBM Plex Sans' }}>
              We design future-ready IoT ecosystems that evolve from simple connectivity to intelligent, autonomous device networks. Our vision is to enable products that self-manage, self-optimize, and continuously improve through connected intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PLATFORM DIRECTION GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 uppercase tracking-tight" style={{ fontFamily: 'Rajdhani' }}>
            PLATFORM <span className="text-[#007BFF]">DIRECTION</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {platformDirection.map((item, idx) => (
              <div key={idx} className="relative group border-t border-gray-100 pt-8">
                <span className="absolute top-8 right-0 text-5xl font-black text-gray-50 group-hover:text-[#007BFF]/10 transition-colors">
                  {item.id}
                </span>
                
                <div className="text-[#007BFF] mb-6 relative z-10">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#007BFF] transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                  {item.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed text-sm" style={{ fontFamily: 'IBM Plex Sans' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISION BANNER */}
      <section className="py-32 bg-[#050505] relative overflow-hidden text-center border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex justify-center mb-8">
            <RefreshCw size={32} className="text-[#E60000] animate-spin-slow" />
          </div>
          
          <h2 className="text-xs font-bold text-[#E60000] mb-6 tracking-[0.4em] uppercase" style={{ fontFamily: 'Rajdhani' }}>
            Our Vision
          </h2>
          
          <p className="text-3xl md:text-5xl font-light text-white leading-tight" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To create <span className="text-[#007BFF] font-medium">living IoT ecosystems</span> where devices behave as adaptive, intelligent systems — not just connected endpoints."
          </p>
        </div>
        
        {/* Subtle decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full"></div>
      </section>
    </main>
  );
}