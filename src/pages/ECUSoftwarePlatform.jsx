import React from 'react';
import { 
  Globe, Server, Shield, Activity, 
  Layers, Cloud, RefreshCw, Network, Box 
} from 'lucide-react';

export default function IoT() {
  const roadmapItems = [
    { 
      icon: <Network size={28} />, 
      title: "Autonomous Orchestration", 
      desc: "Self-healing networks where devices manage their own connectivity and health." 
    },
    { 
      icon: <Activity size={28} />, 
      title: "AI-Driven Fleet Intelligence", 
      desc: "Predictive operations that anticipate failures before they impact the system." 
    },
    { 
      icon: <Layers size={28} />, 
      title: "Digital Twins", 
      desc: "Virtual replicas synchronized in real-time with live device fleets." 
    },
    { 
      icon: <Shield size={28} />, 
      title: "Secure-by-Design", 
      desc: "Identity and lifecycle management baked into the hardware root of trust." 
    },
    { 
      icon: <Cloud size={28} />, 
      title: "Edge-to-Cloud Pipelines", 
      desc: "Seamless intelligence flows from remote sensors to centralized analytics." 
    },
    { 
      icon: <Globe size={28} />, 
      title: "Interoperable Platforms", 
      desc: "Standards-based architecture for large-scale, multi-vendor ecosystems." 
    }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20 min-h-screen">
      
      {/* =====================================================================================
          1. HERO SECTION (UPDATED: PRO BLUE IOT ECOSYSTEM DESIGN)
         ===================================================================================== */}
      <section className="relative py-32 bg-[#050505] text-white overflow-hidden min-h-[80vh] flex items-center">
        
        {/* === ADVANCED CSS BACKGROUND (Global Network Theme) === */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Dark Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a101a] to-[#050505]"></div>
            
            {/* Global Network Grid Pattern */}
            <div className="absolute inset-0 opacity-20"
                 style={{ 
                     backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 123, 255, 0.2) 1px, transparent 0)', 
                     backgroundSize: '40px 40px',
                     maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)'
                 }}>
            </div>

            {/* Glowing Device Nodes Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#007BFF] opacity-10 blur-[120px] rounded-full animate-pulse"></div>
            
            {/* Orbiting Ring Visuals for "Ecosystem" feel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#007BFF]/20 rounded-full animate-spin-slow"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#007BFF]/10 rounded-full -animate-spin-slow"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full">
          <div className="lg:w-3/4">
            
            {/* HIGH-VISIBILITY TAG (Fixed for better visibility) */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#007BFF]/25 border border-[#007BFF]/50 rounded-full mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,123,255,0.3)]">
              <Globe size={14} className="text-[#007BFF] animate-spin-slow" />
              <span className="text-[11px] font-extrabold tracking-[0.25em] text-white uppercase" style={{ fontFamily: 'Rajdhani' }}>
                Planetary Scale Ecosystems
              </span>
            </div>
            
            {/* Title with Blue Gradient */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'Rajdhani' }}>
              IoT – Intelligent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#3395ff] to-[#00C6FF]">
                Device Ecosystems
              </span>
            </h1>

            {/* Description with Accent Border */}
            <div className="flex flex-col md:flex-row gap-8 items-start border-l-4 border-[#007BFF] pl-8">
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl font-light" style={{ fontFamily: 'IBM Plex Sans' }}>
                  We design future-ready IoT ecosystems that evolve from simple connectivity to <span className="text-white font-medium">intelligent, autonomous networks</span>. Our vision is to enable products that self-manage and self-optimize.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          2. PLATFORM DIRECTION GRID (REFINED ORIGINAL STYLE)
         ===================================================================================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Rajdhani' }}>
                PLATFORM <span className="text-[#007BFF]">DIRECTION</span>
              </h2>
            </div>
            <div className="hidden md:block w-1/3 h-px bg-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapItems.map((item, idx) => (
              <div key={idx} className="group relative p-8 bg-white border border-gray-200 hover:border-[#007BFF] transition-all duration-300 shadow-sm hover:shadow-2xl">
                {/* Hover Indicator Line */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#007BFF] group-hover:w-full transition-all duration-500"></div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-gray-50 rounded-lg text-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                    0{idx + 1}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800 transition-colors group-hover:text-[#007BFF]" style={{ fontFamily: 'Rajdhani' }}>
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'IBM Plex Sans' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================================
          3. LONG-TERM VISION (ENHANCED ORIGINAL STYLE)
         ===================================================================================== */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Network Graphic (CSS Only) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
           <div className="w-[800px] h-[800px] border border-gray-700 rounded-full flex items-center justify-center">
              <div className="w-[600px] h-[600px] border border-gray-700 rounded-full flex items-center justify-center">
                 <div className="w-[400px] h-[400px] border border-gray-700 rounded-full"></div>
              </div>
           </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <RefreshCw className="text-[#007BFF] animate-spin-slow" size={48} />
          </div>
          
          <h2 className="text-sm font-bold text-gray-500 mb-6 tracking-[0.3em] uppercase" style={{ fontFamily: 'Rajdhani' }}>
            Our Vision
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-light text-white leading-tight" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To create <span className="text-[#007BFF] font-semibold">living IoT ecosystems</span> where devices behave as adaptive, intelligent systems — not just connected endpoints."
          </h3>
          <div className="mt-12 w-32 h-1 bg-gradient-to-r from-transparent via-[#007BFF] to-transparent mx-auto opacity-50 shadow-[0_0_10px_rgba(0,123,255,0.5)]"></div>
        </div>
      </section>
    </main>
  );
}     