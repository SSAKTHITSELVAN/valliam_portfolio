import React from 'react';
import { 
  Monitor, Eye, Mic, Glasses, 
  ShieldCheck, LayoutTemplate, Cpu, ScanFace 
} from 'lucide-react';

export default function SmartHMI() {
  const hmiFeatures = [
    { 
      icon: <LayoutTemplate size={28} />, 
      title: "Context-Aware & Adaptive", 
      desc: "Interfaces that automatically adjust layout and information density based on the user's situation." 
    },
    { 
      icon: <Cpu size={28} />, 
      title: "AI-Driven Personalization", 
      desc: "UI that learns individual preferences and workflows to predict user intent." 
    },
    { 
      icon: <Mic size={28} />, 
      title: "Multimodal Interaction", 
      desc: "Seamless fusion of touch, voice, gesture, and gaze for natural control." 
    },
    { 
      icon: <Glasses size={28} />, 
      title: "AR/VR Assisted", 
      desc: "Augmented reality overlays for complex systems and maintenance guidance." 
    },
    { 
      icon: <ShieldCheck size={28} />, 
      title: "Safety-Aware Design", 
      desc: "HMIs that prioritize critical alerts and reduce cognitive load in mission-critical environments." 
    },
    { 
      icon: <ScanFace size={28} />, 
      title: "Digital Twin Simulation", 
      desc: "Virtual validation of UI/UX behavior using real-time system models." 
    }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20">
      {/* 1. HERO SECTION - IMPROVED BACKGROUND */}
      <section className="relative py-24 bg-[#050505] text-white overflow-hidden">
        {/* Holographic Grid Background */}
        <div className="absolute inset-0 z-0">
          {/* 1. The Perspective Grid */}
          <div className="absolute inset-0 opacity-20" 
               style={{
                 backgroundImage: 'linear-gradient(rgba(0, 123, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 123, 255, 0.3) 1px, transparent 1px)',
                 backgroundSize: '40px 40px',
                 transform: 'perspective(500px) rotateX(20deg) scale(1.2)',
                 transformOrigin: 'top center'
               }}>
          </div>
          {/* 2. The Central Glow (Cluster Effect) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#007BFF] opacity-10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-20">
          <div className="lg:w-3/4">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#007BFF]/10 border border-[#007BFF]/40 rounded-sm mb-6 shadow-[0_0_15px_rgba(0,123,255,0.3)]">
              <Eye size={14} className="text-[#007BFF]" />
              <span className="text-xs font-bold tracking-widest text-[#007BFF] uppercase" style={{ fontFamily: 'Rajdhani' }}>
                Intelligent Companions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-lg" style={{ fontFamily: 'Rajdhani' }}>
              Smart HMI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#4dabf7] to-[#007BFF]">
                Context-Aware Interfaces
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl" style={{ fontFamily: 'IBM Plex Sans' }}>
              We are shaping the future of human–machine interaction by building HMIs that are <span className="text-white font-medium">context-aware, adaptive, and intelligent</span>. Interfaces will evolve from static screens into intelligent companions that understand user intent and environment.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FEATURE GRID - "DASHBOARD STYLE" */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Rajdhani' }}>
              INTERFACE <span className="text-[#E60000]">EVOLUTION</span>
            </h2>
            {/* Decorative Dash Line */}
            <div className="hidden md:flex gap-1">
               {[...Array(5)].map((_, i) => (
                 <div key={i} className={`h-2 w-8 -skew-x-12 ${i === 4 ? 'bg-[#E60000]' : 'bg-gray-200'}`}></div>
               ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hmiFeatures.map((item, idx) => (
              <div key={idx} className="group relative p-8 bg-white border-l-4 border-transparent hover:border-[#007BFF] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="absolute top-4 right-4 text-gray-100 font-bold text-5xl opacity-50 group-hover:text-gray-50 transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                  0{idx + 1}
                </div>
                
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#007BFF] mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800" style={{ fontFamily: 'Rajdhani' }}>
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'IBM Plex Sans' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISION - "HUD LOOK" */}
      <section className="py-24 bg-black relative overflow-hidden border-t border-gray-800">
        {/* HUD Corners */}
        <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-[#E60000]"></div>
        <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-[#E60000]"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-sm font-bold text-[#007BFF] mb-8 tracking-[0.3em] uppercase animate-pulse" style={{ fontFamily: 'Rajdhani' }}>
            User Intent & Safety
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-light text-white leading-tight" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To create interfaces that <span className="font-bold text-[#E60000]">think with the user</span>, improving safety, usability, and decision quality in complex systems."
          </h3>

          <div className="mt-12 inline-block px-8 py-3 border border-gray-700 rounded-full text-gray-400 text-sm tracking-wider">
            TOUCH • VOICE • GESTURE • GAZE
          </div>
        </div>
      </section>
    </main>
  );
}