import React from 'react';
import { 
  Terminal, Zap, ShieldCheck, Box, 
  RefreshCw, Cpu, Layers, Settings 
} from 'lucide-react';

export default function LinuxAndroidRTOS() {
  const capabilities = [
    { 
      icon: <Terminal size={28} />, 
      title: "BSP & Bootloader", 
      desc: "Custom Board Support Packages and optimized bootloaders ensuring rapid startup and hardware compatibility." 
    },
    { 
      icon: <Zap size={28} />, 
      title: "Real-Time Optimization", 
      desc: "Fine-tuning kernel parameters and scheduling policies to guarantee deterministic performance for critical tasks." 
    },
    { 
      icon: <ShieldCheck size={28} />, 
      title: "Secure OS Hardening", 
      desc: "Implementing SELinux, secure boot, and kernel-level protections to safeguard devices against vulnerabilities." 
    },
    { 
      icon: <Box size={28} />, 
      title: "Containerization", 
      desc: "Leveraging Docker and LXC on embedded Linux to enable modular, scalable application deployment." 
    },
    { 
      icon: <RefreshCw size={28} />, 
      title: "OTA-Ready Architecture", 
      desc: "Designing partition schemes and update agents that support A/B updates and failsafe rollbacks." 
    },
    { 
      icon: <Settings size={28} />, 
      title: "Power Optimization", 
      desc: "Deep-dive power profiling and kernel adjustments to maximize battery life in edge devices." 
    }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20 min-h-screen">
      
      {/* =====================================================================================
          1. HERO SECTION (UPDATED: PRO BLUE OS ENGINEERING DESIGN)
         ===================================================================================== */}
      <section className="relative py-32 bg-[#050505] text-white overflow-hidden min-h-[80vh] flex items-center">
        
        {/* === ADVANCED CSS BACKGROUND (Kernel/Terminal Theme) === */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Dark Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a101a] to-[#050505]"></div>
            
            {/* Code/Terminal Grid Pattern */}
            <div className="absolute inset-0 opacity-15"
                 style={{ 
                     backgroundImage: 'linear-gradient(rgba(0, 123, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 123, 255, 0.15) 1px, transparent 1px)', 
                     backgroundSize: '40px 40px',
                     maskImage: 'radial-gradient(circle at 50% 50%, black 50%, transparent 100%)'
                 }}>
            </div>

            {/* Glowing OS Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#007BFF] opacity-10 blur-[120px] rounded-full animate-pulse"></div>
            
            {/* Terminal Decorative Lines */}
            <div className="absolute left-0 top-1/4 w-full h-[1px] bg-gradient-to-r from-[#007BFF]/0 via-[#007BFF]/40 to-[#007BFF]/0"></div>
            <div className="absolute left-0 bottom-1/4 w-full h-[1px] bg-gradient-to-r from-[#007BFF]/0 via-[#007BFF]/20 to-[#007BFF]/0"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full">
          <div className="lg:w-3/4">
            
            {/* HIGH-VISIBILITY TAG */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#007BFF]/25 border border-[#007BFF]/50 rounded-full mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,123,255,0.3)]">
              <Layers size={14} className="text-[#007BFF]" />
              <span className="text-[11px] font-extrabold tracking-[0.25em] text-white uppercase" style={{ fontFamily: 'Rajdhani' }}>
                OS Platform Engineering
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'Rajdhani' }}>
              Linux / Android <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#3395ff] to-[#00C6FF]">
                RTOS Porting
              </span>
            </h1>

            {/* Description */}
            <div className="flex flex-col md:flex-row gap-8 items-start border-l-4 border-[#007BFF] pl-8">
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl font-light" style={{ fontFamily: 'IBM Plex Sans' }}>
                  We engineer Linux, Android, and RTOS platforms as the foundation for <span className="text-white font-medium">software-defined, connected products</span>. Our services ensure performance, security, and long-term maintainability.
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
                FUTURE-FOCUSED <span className="text-[#007BFF]">CAPABILITIES</span>
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

      {/* =====================================================================================
          3. LONG-TERM VISION (KEPT ORIGINAL)
         ===================================================================================== */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]">
           <div className="w-full h-full border border-gray-800 opacity-20 transform -skew-x-12"></div>
           <div className="absolute top-4 left-4 w-full h-full border border-[#007BFF]/20 opacity-20 transform -skew-x-12"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-6 p-4 rounded-full bg-gray-900 border border-gray-800">
             <Cpu size={40} className="text-[#007BFF]" />
          </div>
          
          <h2 className="text-sm font-bold text-gray-500 mb-6 tracking-[0.3em] uppercase" style={{ fontFamily: 'Rajdhani' }}>
            Software-Defined Foundations
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-light text-white leading-tight" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To enable software-defined products that evolve through <span className="text-[#007BFF] font-semibold">continuous OS and feature updates</span> over their lifecycle."
          </h3>
          
          <div className="mt-12 w-32 h-1 bg-gradient-to-r from-[#007BFF] via-white to-[#007BFF] mx-auto opacity-50 shadow-[0_0_10px_rgba(0,123,255,0.5)]"></div>
        </div>
      </section>
    </main>
  );
}