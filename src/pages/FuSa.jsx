import React from 'react';
import { 
  ShieldAlert, Activity, Layers, FileCheck, 
  Cpu, RefreshCw, AlertTriangle, CheckCircle 
} from 'lucide-react';

export default function FuSa() {
  const safetyRoadmap = [
    { 
      icon: <Cpu size={28} />, 
      title: "AI-Driven Safety", 
      desc: "Architectures designed specifically to validate and safeguard non-deterministic AI decision systems." 
    },
    { 
      icon: <Activity size={28} />, 
      title: "Runtime Monitoring", 
      desc: "Real-time health diagnostics that continuously check system integrity during operation." 
    },
    { 
      icon: <ShieldAlert size={28} />, 
      title: "Adaptive Fault Tolerance", 
      desc: "Systems capable of graceful degradation, maintaining core functions even when components fail." 
    },
    { 
      icon: <Layers size={28} />, 
      title: "Digital Twin Validation", 
      desc: "Using virtual replicas for exhaustive safety verification before physical deployment." 
    },
    { 
      icon: <FileCheck size={28} />, 
      title: "Continuous Compliance", 
      desc: "Automated adherence to ISO 26262 and SOTIF standards in constantly evolving software products." 
    },
    { 
      icon: <RefreshCw size={28} />, 
      title: "Co-Designed Mechanisms", 
      desc: "Safety layers integrated deeply with AI and connectivity stacks, not just bolted on." 
    }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 bg-[#050505] text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
           <div className="w-full h-full bg-[url('/src/assets/tech-grid.png')] bg-repeat opacity-30"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-20">
          <div className="lg:w-3/4">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E60000]/10 border border-[#E60000]/30 rounded-full mb-6">
              <AlertTriangle size={14} className="text-[#E60000]" />
              <span className="text-xs font-bold tracking-widest text-[#E60000] uppercase" style={{ fontFamily: 'Rajdhani' }}>
                Intelligent Safety
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Rajdhani' }}>
              Functional Safety <br />
              <span className="text-[#007BFF]">Autonomous & Adaptive</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl border-l-4 border-[#007BFF] pl-6" style={{ fontFamily: 'IBM Plex Sans' }}>
              We are evolving functional safety from static mechanisms into <span className="text-white font-medium">intelligent, adaptive safety architectures</span> for autonomous, software-defined, and AI-enabled systems.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FUTURE DIRECTION GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Rajdhani' }}>
                FUTURE <span className="text-[#E60000]">DIRECTION</span>
              </h2>
            </div>
            {/* Decorative Line */}
            <div className="hidden md:block w-1/3 h-px bg-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyRoadmap.map((item, idx) => (
              <div key={idx} className="group p-10 bg-white border border-gray-200 rounded-sm hover:border-[#E60000] transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 rounded-bl-full -mr-8 -mt-8 transition-colors group-hover:bg-[#E60000]/10"></div>

                <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center text-[#007BFF] mb-6 group-hover:bg-[#E60000] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'Rajdhani' }}>
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

      {/* 3. LONG-TERM VISION */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Radar Pulse Animation (CSS) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-800 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gray-800 rounded-full opacity-50"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-6 p-4 rounded-full bg-gray-900 border border-gray-800">
             <CheckCircle size={40} className="text-[#007BFF]" />
          </div>
          
          <h2 className="text-sm font-bold text-gray-500 mb-6 tracking-[0.3em] uppercase" style={{ fontFamily: 'Rajdhani' }}>
            Active Protection
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-light text-white leading-tight" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To create systems that <span className="text-[#E60000] font-semibold">actively monitor their own safety</span> and adapt in real time to changing operational conditions."
          </h3>
          
          <div className="mt-12 flex justify-center gap-8 opacity-70">
            {['ISO 26262', 'SOTIF', 'IEC 61508'].map((standard) => (
              <span key={standard} className="text-sm font-mono text-gray-400 border border-gray-700 px-3 py-1 rounded">
                {standard}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}