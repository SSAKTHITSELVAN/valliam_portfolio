import React from 'react';
import { 
  Layout, Eye, Mic, Glasses, 
  ShieldCheck, MonitorPlay, Sparkles, UserCog, Activity 
} from 'lucide-react';

export default function HmiUiEngineering() {
  const capabilities = [
    { 
      icon: <Layout size={28} />, 
      title: "Embedded GUI Frameworks", 
      desc: "Optimized graphics stacks for real-time systems, ensuring low-latency and high-performance visual rendering." 
    },
    { 
      icon: <UserCog size={28} />, 
      title: "AI-Driven Personalization", 
      desc: "Interfaces that learn user preferences and habits to dynamically prioritize relevant information." 
    },
    { 
      icon: <Mic size={28} />, 
      title: "Multimodal Interaction", 
      desc: "Fusion of touch, voice, and gesture recognition for natural, friction-less human-machine communication." 
    },
    { 
      icon: <Glasses size={28} />, 
      title: "AR/VR-Assisted HMI", 
      desc: "Augmented and virtual reality concepts designed for complex industrial and automotive control systems." 
    },
    { 
      icon: <MonitorPlay size={28} />, 
      title: "Digital Twin Simulation", 
      desc: "High-fidelity testing and validation of UI behavior using virtual replicas of the target hardware environment." 
    },
    { 
      icon: <ShieldCheck size={28} />, 
      title: "Safety-Aware Design", 
      desc: "Human-centered design for mission-critical systems where cognitive load and safety are the highest priorities." 
    }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20 min-h-screen">
      
      {/* =====================================================================================
          1. HERO SECTION (ENHANCED TAG VISIBILITY)
         ===================================================================================== */}
      <section className="relative py-32 bg-[#050505] text-white overflow-hidden min-h-[80vh] flex items-center">
        
        {/* === ADVANCED CSS BACKGROUND === */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Dark Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a101a] to-[#050505]"></div>
            
            {/* HUD Grid Pattern */}
            <div className="absolute inset-0 opacity-20"
                 style={{ 
                     backgroundImage: 'linear-gradient(rgba(0, 123, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 123, 255, 0.1) 1px, transparent 1px)', 
                     backgroundSize: '60px 60px',
                     maskImage: 'radial-gradient(circle at 50% 50%, black 50%, transparent 100%)'
                 }}>
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#007BFF] opacity-10 blur-[120px] rounded-full animate-pulse"></div>
            
            {/* Scanning Line Effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#007BFF]/40 to-transparent animate-scan"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full">
          <div className="lg:w-3/4">
            
            {/* UPDATED TAG: High-visibility white text and stronger background */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#007BFF]/25 border border-[#007BFF]/50 rounded-full mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,123,255,0.3)]">
              <Sparkles size={14} className="text-[#007BFF]" />
              <span className="text-[11px] font-extrabold tracking-[0.25em] text-white uppercase" style={{ fontFamily: 'Rajdhani' }}>
                Adaptive Interfaces
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'Rajdhani' }}>
              HMI / UI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#3395ff] to-[#00C6FF]">
                Engineering
              </span>
            </h1>

            {/* Description */}
            <div className="flex flex-col md:flex-row gap-8 items-start border-l-4 border-[#007BFF] pl-8">
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl font-light" style={{ fontFamily: 'IBM Plex Sans' }}>
                  We design and engineer future-ready HMI/UI platforms that are <span className="text-white font-medium">intelligent, context-aware</span>, and optimized for embedded environments. Our HMIs are built to evolve through software-defined updates.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          2. CAPABILITIES GRID (KEPT ORIGINAL)
         ===================================================================================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Rajdhani' }}>
                FUTURE-FOCUSED <span className="text-[#E60000]">CAPABILITIES</span>
              </h2>
            </div>
            <div className="hidden md:block w-1/3 h-px bg-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => (
              <div key={idx} className="group p-10 bg-white border border-gray-200 rounded-sm hover:border-[#007BFF] transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 rounded-bl-full -mr-8 -mt-8 transition-colors group-hover:bg-[#007BFF]/10"></div>
                <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center text-[#007BFF] mb-6 group-hover:bg-[#007BFF] group-hover:text-white transition-colors duration-300 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Rajdhani' }}>{item.title}</h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'IBM Plex Sans' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================================
          3. LONG-TERM VISION (KEPT ORIGINAL)
         ===================================================================================== */}
      <section className="py-32 bg-black relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="p-4 rounded-full bg-[#007BFF]/5 border border-[#007BFF]/20">
                <Eye className="text-[#007BFF] animate-pulse" size={48} />
            </div>
          </div>
          <h2 className="text-sm font-bold text-gray-500 mb-6 tracking-[0.3em] uppercase" style={{ fontFamily: 'Rajdhani' }}>Our Vision</h2>
          <h3 className="text-3xl md:text-5xl font-light text-white leading-tight" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To create interfaces that <span className="text-[#007BFF] font-semibold">adapt to users, context, and environment</span>, transforming interfaces into intelligent companions."
          </h3>
          <div className="mt-12 w-24 h-1 bg-gradient-to-r from-[#007BFF] to-[#E60000] mx-auto opacity-70"></div>
        </div>
      </section>

      {/* CSS Animation for Scan Line */}
      <style jsx>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          position: absolute;
          animation: scan 4s linear infinite;
        }
      `}</style>
    </main>
  );
}