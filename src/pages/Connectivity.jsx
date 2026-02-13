import React from 'react';
import { 
  Wifi, Server, Clock, Share2, 
  ShieldCheck, Activity, Router, Globe 
} from 'lucide-react';

// 1. IMPORT THE IMAGE
import heroBg from '../assets/connectivity_bg.jpg'; 

export default function Connectivity() {
  const futureDirection = [
    { icon: <Server size={28} />, title: "Software-Defined Stacks", desc: "Decoupling control planes from hardware for flexible, programmable network architectures." },
    { icon: <Share2 size={28} />, title: "Intelligent Routing", desc: "Adaptive bandwidth allocation that dynamically responds to traffic patterns." },
    { icon: <Clock size={28} />, title: "Time-Sensitive Networking", desc: "Deterministic communication protocols ensuring real-time system synchronization." },
    { icon: <Wifi size={28} />, title: "Converged Architectures", desc: "Unified wired and wireless fabrics creating seamless device meshes." },
    { icon: <ShieldCheck size={28} />, title: "Identity-Driven Security", desc: "Communication frameworks where trust is authenticated at the packet level." },
    { icon: <Activity size={28} />, title: "AI-Driven Optimization", desc: "Network-aware applications that predict congestion and optimize traffic flow." }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-32 bg-[#050505] text-white overflow-hidden">
        
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Connectivity Background" 
            className="w-full h-full object-cover opacity-30" 
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E60000]/10 border border-[#E60000]/30 rounded-full mb-6 backdrop-blur-sm">
              <Router size={14} className="text-[#E60000]" />
              <span className="text-xs font-bold tracking-widest text-[#E60000] uppercase" style={{ fontFamily: 'Rajdhani' }}>
                Next-Gen Connectivity
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Rajdhani' }}>
              Connectivity <br />
              <span className="text-[#007BFF]">Software-Defined Networks</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl border-l-2 border-[#007BFF] pl-6" style={{ fontFamily: 'IBM Plex Sans' }}>
              We are building future connectivity architectures where networks become adaptive, software-defined, and self-optimizing. Connectivity is no longer just data transfer — it becomes part of system intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FUTURE DIRECTION GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-1 h-12 bg-[#E60000]"></div>
            <h2 className="text-4xl font-bold uppercase tracking-tight" style={{ fontFamily: 'Rajdhani' }}>
              FUTURE <span className="text-[#007BFF]">DIRECTION</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureDirection.map((item, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-sm hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 group">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#007BFF] mb-6 shadow-sm group-hover:bg-[#007BFF] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Rajdhani' }}>
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: 'IBM Plex Sans' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SYSTEM INTELLIGENCE BANNER */}
      <section className="py-24 bg-[#020B1C] relative overflow-hidden text-center">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-block mb-6">
            <Server size={40} className="text-gray-600 mx-auto mb-2" />
            <span className="text-xs font-bold text-gray-500 tracking-[0.3em] uppercase block">
              System Intelligence
            </span>
          </div>
          
          <h3 className="text-2xl md:text-4xl font-light text-white leading-relaxed" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To enable <span className="text-[#007BFF] font-semibold">self-optimizing communication fabrics</span> that dynamically adapt to system load, safety requirements, and operational contexts."
          </h3>
          
          <div className="mt-12 h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-[#007BFF] to-transparent"></div>
        </div>
      </section>
    </main>
  );
}