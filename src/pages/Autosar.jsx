import React from 'react';
import { 
  Layers, Cpu, Server, ShieldCheck, 
  RefreshCw, CheckCircle, Settings, Network, Zap 
} from 'lucide-react';

export default function Autosar() {
  const capabilities = [
    { 
      icon: <Layers size={28} />, 
      title: "Classic & Adaptive Setup", 
      desc: "Full-stack configuration for both AUTOSAR Classic (real-time) and Adaptive (high-performance) platforms." 
    },
    { 
      icon: <Network size={28} />, 
      title: "Zonal E/E Enablement", 
      desc: "Architecting software layers that support the shift from domain-based to zonal vehicle architectures." 
    },
    { 
      icon: <Server size={28} />, 
      title: "Service-Oriented Design", 
      desc: "Implementing SOA (Service-Oriented Architecture) for dynamic, flexible inter-ECU communication." 
    },
    { 
      icon: <RefreshCw size={28} />, 
      title: "Secure OTA Integration", 
      desc: "Robust update management and secure onboard communication (SecOC) integration." 
    },
    { 
      icon: <Settings size={28} />, 
      title: "Platform Reuse", 
      desc: "Modular architecture allowing software components to be reused across different ECU families." 
    },
    { 
      icon: <CheckCircle size={28} />, 
      title: "OEM Compliance", 
      desc: "Strict adherence to major OEM standards, ASPICE processes, and ISO 26262 safety requirements." 
    }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20 min-h-screen">
      
      {/* =====================================================================================
          1. HERO SECTION (UPDATED: PRO BLUE AUTOSAR DESIGN)
         ===================================================================================== */}
      <section className="relative py-32 bg-[#050505] text-white overflow-hidden min-h-[80vh] flex items-center">
        
        {/* === ADVANCED CSS BACKGROUND (Automotive Tech Theme) === */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Dark Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a101a] to-[#050505]"></div>
            
            {/* Perspective Data Grid */}
            <div className="absolute inset-0 opacity-20"
                 style={{ 
                     backgroundImage: 'linear-gradient(rgba(0, 123, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 123, 255, 0.2) 1px, transparent 1px)', 
                     backgroundSize: '50px 50px',
                     transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2)',
                     maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
                 }}>
            </div>

            {/* Glowing ECU Core Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#007BFF] opacity-10 blur-[120px] rounded-full animate-pulse"></div>
            
            {/* Automotive Bus Lines Decor */}
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#007BFF]/40 to-transparent"></div>
            <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#007BFF]/20 to-transparent"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full">
          <div className="lg:w-3/4">
            
            {/* HIGH-VISIBILITY TAG */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#007BFF]/25 border border-[#007BFF]/50 rounded-full mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,123,255,0.3)]">
              <Zap size={14} className="text-[#007BFF]" />
              <span className="text-[11px] font-extrabold tracking-[0.25em] text-white uppercase" style={{ fontFamily: 'Rajdhani' }}>
                Scalable Architecture
              </span>
            </div>
            
            {/* Title with Blue Gradient */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'Rajdhani' }}>
              AUTOSAR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#3395ff] to-[#00C6FF]">
                Engineering
              </span>
            </h1>

            {/* Description with Vertical Accent */}
            <div className="flex flex-col md:flex-row gap-8 items-start border-l-4 border-[#007BFF] pl-8">
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl font-light" style={{ fontFamily: 'IBM Plex Sans' }}>
                  We deliver AUTOSAR Classic and Adaptive platform engineering to build <span className="text-white font-medium">scalable, software-defined automotive ECUs</span>. Our approach supports zonal architectures and future mobility systems.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          2. CAPABILITIES GRID (KEPT ORIGINAL STYLE)
         ===================================================================================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-tight" style={{ fontFamily: 'Rajdhani' }}>
                FUTURE-FOCUSED <span className="text-[#007BFF]">CAPABILITIES</span>
              </h2>
            </div>
            <div className="hidden md:block w-1/3 h-px bg-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => (
              <div key={idx} className="group p-10 bg-white border border-gray-100 rounded-sm hover:border-[#007BFF] transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                {/* Hover Accent Decor */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 rounded-bl-full -mr-8 -mt-8 transition-colors group-hover:bg-[#007BFF]/10"></div>
                
                <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center text-[#007BFF] mb-6 group-hover:bg-[#007BFF] group-hover:text-white transition-colors duration-300 shadow-sm">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 transition-colors group-hover:text-[#007BFF]" style={{ fontFamily: 'Rajdhani' }}>
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

      {/* =====================================================================================
          3. LONG-TERM VISION (KEPT ORIGINAL STYLE)
         ===================================================================================== */}
      <section className="py-32 bg-black relative overflow-hidden text-center">
        {/* Subtle Network Pattern Background */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="p-4 rounded-full bg-[#007BFF]/5 border border-[#007BFF]/20 backdrop-blur-sm shadow-[0_0_30px_rgba(0,123,255,0.1)]">
                <Cpu className="text-[#007BFF] animate-pulse" size={48} />
            </div>
          </div>
          
          <h2 className="text-xs font-bold text-gray-500 mb-6 tracking-[0.4em] uppercase" style={{ fontFamily: 'Rajdhani' }}>
            Software-Defined Future
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-light text-white leading-tight" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To build <span className="text-[#007BFF] font-semibold">reusable AUTOSAR platform IP</span> that enables future software-defined vehicle architectures."
          </h3>
          
          <div className="mt-12 w-32 h-1 bg-gradient-to-r from-transparent via-[#007BFF] to-transparent mx-auto opacity-50 shadow-[0_0_10px_rgba(0,123,255,0.5)]"></div>
        </div>
      </section>
    </main>
  );
}