import React from 'react';
import { 
  Search, Microscope, Zap, 
  LayoutTemplate, ShieldCheck, CheckCircle, Lightbulb, Layers 
} from 'lucide-react';

export default function POC() {
  const milestones = [
    { icon: <Search size={28} />, title: "Feasibility Analysis", desc: "Deep-dive technical assessment to validate the viability of core engineering concepts." },
    { icon: <Microscope size={28} />, title: "Rapid Prototyping", desc: "Fast-track development of minimum viable hardware and software modules for early testing." },
    { icon: <Zap size={28} />, title: "Performance Benchmarking", desc: "Quantifying power efficiency and latency metrics against design goals." },
    { icon: <LayoutTemplate size={28} />, title: "Architecture Validation", desc: "Stress-testing system blueprints to ensure scalability before full-scale development." },
    { icon: <ShieldCheck size={28} />, title: "Security Feasibility", desc: "Initial assessment of threat vectors and hardware-root-of-trust implementation." },
    { icon: <CheckCircle size={28} />, title: "Go/No-Go Decision Support", desc: "Providing empirical data and prototypes to minimize risk in project investments." }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20 min-h-screen">
      
      {/* =====================================================================================
          1. HERO SECTION (IMPROVED BACKGROUND)
         ===================================================================================== */}
      <section className="relative py-32 bg-[#020B1C] text-white overflow-hidden min-h-[80vh] flex items-center">
        
        {/* === ADVANCED CSS BACKGROUND === */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* 1. Deep Blue Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020B1C] via-[#05142b] to-[#020B1C]"></div>
            
            {/* 2. Animated "Blueprint" Grid (Perspective) */}
            <div className="absolute inset-0 opacity-30 origin-bottom"
                 style={{ 
                     backgroundImage: 'linear-gradient(rgba(0, 123, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 123, 255, 0.3) 1px, transparent 1px)', 
                     backgroundSize: '60px 60px',
                     transform: 'perspective(1000px) rotateX(60deg) scale(1.5)',
                     maskImage: 'linear-gradient(to bottom, transparent 10%, black 100%)',
                     animation: 'pulse-grid 10s infinite alternate linear'
                 }}>
            </div>

            {/* 3. Central Blue Core Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#007BFF] opacity-15 blur-[120px] rounded-full animate-pulse"></div>

            {/* 4. Floating Abstract Elements (Subtle Animation) */}
            <div className="absolute top-20 right-32 w-40 h-40 border border-[#007BFF]/20 rounded-full animate-spin-slow opacity-50 border-dashed"></div>
            <div className="absolute bottom-32 left-20 w-24 h-24 bg-[#007BFF]/10 blur-xl rounded-full animate-bounce-slow"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full">
          <div className="lg:w-3/4">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-full mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(0,123,255,0.15)]">
              <Lightbulb size={14} className="text-[#007BFF] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#007BFF] uppercase" style={{ fontFamily: 'Rajdhani' }}>
                From Concept to Reality
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'Rajdhani' }}>
              POC - Proof of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#3395ff] to-[#00C6FF]">
                Engineering Concept
              </span>
            </h1>

            {/* Description */}
            <div className="flex flex-col md:flex-row gap-8 items-start border-l-4 border-[#007BFF] pl-8">
                <div className="hidden md:block absolute -left-[14px] top-2">
                    <Layers size={24} className="text-[#007BFF] bg-[#020B1C]" />
                </div>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light" style={{ fontFamily: 'IBM Plex Sans' }}>
                  We transform abstract engineering ideas into functional proofs. Our POC stage minimizes technical risk and accelerates the path to a <span className="text-white font-medium">production-ready product</span>.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          2. MILESTONES GRID (KEPT ORIGINAL STYLE)
         ===================================================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-bold uppercase tracking-tight text-gray-900" style={{ fontFamily: 'Rajdhani' }}>
              POC <span className="text-[#007BFF]">MILESTONES</span>
            </h2>
             <div className="hidden md:block w-32 h-1 bg-gray-100 ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((item, idx) => (
              <div key={idx} className="p-10 border border-gray-100 rounded-lg hover:shadow-xl hover:border-[#007BFF]/30 transition-all duration-300 group bg-white">
                
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#007BFF] mb-6 group-hover:bg-[#007BFF] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Rajdhani' }}>
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

      {/* =====================================================================================
          3. VISION BANNER (KEPT ORIGINAL STYLE)
         ===================================================================================== */}
      <section className="py-32 bg-black relative overflow-hidden text-center">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="p-4 rounded-full bg-[#E60000]/10 border border-[#E60000]/20">
                 <Zap size={32} className="text-[#E60000]" />
            </div>
          </div>
          
          <h2 className="text-xs font-bold text-gray-500 mb-6 tracking-[0.3em] uppercase" style={{ fontFamily: 'Rajdhani' }}>
            Our Vision
          </h2>
          
          <h3 className="text-2xl md:text-4xl font-light text-white leading-relaxed" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To provide a <span className="text-[#E60000] font-bold">fast-track for innovation</span>, enabling ideas to be prototyped, tested, and validated in record time."
          </h3>
          
          <div className="mt-12 w-16 h-1 bg-gradient-to-r from-[#E60000] to-transparent mx-auto"></div>
        </div>
      </section>
    </main>
  );
}