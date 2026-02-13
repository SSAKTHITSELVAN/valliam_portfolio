import React from 'react';
import { 
  Zap, Battery, Cpu, Layers, Sliders, 
  Wifi, Activity, Leaf 
} from 'lucide-react';

// 1. IMPORT THE IMAGE
import heroBg from '../assets/low_power_bg.jpg'; 

export default function LowPowerAI() {
  const roadmapItems = [
    { icon: <Zap size={28} />, title: "Event-Driven AI", desc: "Systems that wake only on meaningful signals to conserve power." },
    { icon: <Leaf size={28} />, title: "Energy Harvesting", desc: "AI pipelines optimized for self-powered, energy-harvesting systems." },
    { icon: <Cpu size={28} />, title: "Near-Sensor Processing", desc: "Processing data directly at the source to minimize costly data movement." },
    { icon: <Sliders size={28} />, title: "Power Management", desc: "AI-aware frameworks that dynamically adjust power based on workload." },
    { icon: <Layers size={28} />, title: "HW/SW Co-Design", desc: "Optimized synergy between silicon capabilities, firmware, and AI models." },
    { icon: <Battery size={28} />, title: "Multi-Year Autonomy", desc: "Ultra-efficient inference enabling multi-year battery operation." }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-32 bg-[#020B1C] text-white overflow-hidden">
        
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Low Power AI Background" 
            className="w-full h-full object-cover opacity-30" 
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020B1C] via-[#020B1C]/90 to-transparent"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-green-500 uppercase" style={{ fontFamily: 'Rajdhani' }}>
                Near-Zero Energy Footprint
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg" style={{ fontFamily: 'Rajdhani' }}>
              Low-Power AI <br />
              <span className="text-[#007BFF]">Always-On Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl drop-shadow-md" style={{ fontFamily: 'IBM Plex Sans' }}>
              We are pioneering ultra-low-power AI architectures to bring intelligence into battery-powered, energy-harvesting, and always-on devices. Our focus is on enabling continuous sensing and local intelligence with minimal energy consumption and extended product lifetimes.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ROADMAP GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center" style={{ fontFamily: 'Rajdhani' }}>
            FUTURE <span className="text-[#E60000]">ROADMAP</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmapItems.map((item, idx) => (
              <div key={idx} className="group p-10 bg-white border border-gray-200 rounded-sm hover:border-[#007BFF] transition-all duration-500 hover:shadow-2xl">
                <div className="text-[#007BFF] mb-6 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-24 bg-black relative overflow-hidden text-center">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#007BFF]/20 blur-[120px] -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-green-500/10 blur-[120px] -translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-[#E60000] mb-6 tracking-widest uppercase" style={{ fontFamily: 'Rajdhani' }}>Long-Term Vision</h2>
          
          <p className="text-3xl md:text-4xl font-light text-white leading-snug mb-12" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To enable intelligent products that operate for <span className="text-[#007BFF] font-bold">years without recharging</span>, making large-scale deployments sustainable and maintenance-free."
          </p>
          
          <div className="flex justify-center items-center gap-12 opacity-80">
            <div className="flex flex-col items-center gap-2">
               <Battery size={32} className="text-green-500" />
               <span className="text-xs tracking-widest text-gray-400 uppercase">Multi-Year Life</span>
            </div>
            <div className="h-8 w-px bg-gray-700"></div>
            <div className="flex flex-col items-center gap-2">
               <Wifi size={32} className="text-[#007BFF]" />
               <span className="text-xs tracking-widest text-gray-400 uppercase">Always On</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}