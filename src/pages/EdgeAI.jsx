import React from 'react';
import { 
  Cpu, Brain, Zap, Shield, Network, 
  Workflow, Database, ArrowRight, Activity 
} from 'lucide-react';

// 1. IMPORT THE IMAGE HERE
import heroBg from '../assets/hero_bg.jpg'; 

export default function EdgeAI() {
  const roadmapItems = [
    { icon: <Network size={28} />, title: "Distributed Intelligence", desc: "Intelligence across multiple edge nodes for resilient operations." },
    { icon: <Activity size={28} />, title: "Self-Adaptive Pipelines", desc: "AI that learns and optimizes from real-time operational data." },
    { icon: <Shield size={28} />, title: "Federated Learning", desc: "Privacy-aware continuous improvement without moving raw data." },
    { icon: <Workflow size={28} />, title: "Model Orchestration", desc: "Seamless AI deployment across ECUs and Gateways." },
    { icon: <Brain size={28} />, title: "Context-Aware Perception", desc: "Systems that understand and react to their environment." },
    { icon: <Cpu size={28} />, title: "Hardware Co-Design", desc: "AI designed with accelerators for deterministic real-time behavior." }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20">
      
      {/* 1. HERO SECTION (UPDATED) */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Edge AI Background" 
            className="w-full h-full object-cover opacity-40" 
          />
          {/* Gradient Overlay to make text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#007BFF]/20 border border-[#007BFF]/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#007BFF] animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-[#007BFF] uppercase" style={{ fontFamily: 'Rajdhani' }}>Autonomous Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-lg" style={{ fontFamily: 'Rajdhani' }}>
              Edge AI – Intelligence at the <span className="text-[#E60000]">Point of Action</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl drop-shadow-md" style={{ fontFamily: 'IBM Plex Sans' }}>
              We are building next-generation platforms where intelligence lives directly inside devices, enabling autonomous decision-making and privacy-preserving responses without cloud dependence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ROADMAP GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center" style={{ fontFamily: 'Rajdhani' }}>
            FUTURE-FOCUSED <span className="text-[#007BFF]">ROADMAP</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmapItems.map((item, idx) => (
              <div key={idx} className="group p-10 bg-white border border-gray-200 rounded-sm hover:border-[#E60000] transition-all duration-500 hover:shadow-2xl">
                <div className="text-[#007BFF] mb-6 group-hover:scale-110 group-hover:text-[#E60000] transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Rajdhani' }}>{item.title}</h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'IBM Plex Sans' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISION BANNER */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E60000]/20 blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#007BFF]/20 blur-[120px]"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-[#E60000] mb-6 tracking-widest uppercase" style={{ fontFamily: 'Rajdhani' }}>Long-Term Vision</h2>
          <p className="text-3xl md:text-4xl font-light text-white leading-snug" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To enable electronic systems that <span className="text-[#007BFF] font-bold">sense, think, adapt, and evolve</span> in real-world environments — making products intelligent by design, not by add-ons."
          </p>
          
          <div className="mt-12 flex justify-center gap-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent to-[#E60000]"></div>
            <Zap className="text-white animate-bounce" />
            <div className="h-1 w-24 bg-gradient-to-l from-transparent to-[#007BFF]"></div>
          </div>
        </div>
      </section>
    </main>
  );
}