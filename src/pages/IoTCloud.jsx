import React from 'react';
import { 
  Cloud, Database, ShieldCheck, Zap, 
  BarChart3, Share2, Globe, Cpu, Activity, MoveUpRight
} from 'lucide-react';

export default function IoTCloud() {
  const capabilities = [
    { 
      icon: <Share2 size={24} />, 
      title: "Device-to-Cloud Connectivity", 
      desc: "Implementing robust MQTT, CoAP, and HTTP protocols for seamless data ingestion from edge devices." 
    },
    { 
      icon: <Database size={24} />, 
      title: "Scalable Data Pipelines", 
      desc: "Architecting high-throughput processing layers to handle massive datasets from global device fleets." 
    },
    { 
      icon: <ShieldCheck size={24} />, 
      title: "End-to-End Encryption", 
      desc: "Ensuring data integrity and privacy with TLS/SSL, device-side certificates, and secure identity management." 
    },
    { 
      icon: <BarChart3 size={24} />, 
      title: "Real-Time Analytics", 
      desc: "Building cloud dashboards and telemetry processing for instant insights and predictive monitoring." 
    },
    { 
      icon: <Zap size={24} />, 
      title: "OTA Update Management", 
      desc: "Secure cloud orchestration for over-the-air firmware deployments and remote device configuration." 
    },
    { 
      icon: <Globe size={24} />, 
      title: "Multi-Cloud Integration", 
      desc: "Deploying interoperable solutions across AWS IoT, Azure IoT Hub, and Google Cloud IoT Core." 
    }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20 min-h-screen">
      
      {/* =====================================================================================
          1. HERO SECTION (IMPROVED: NEURAL NETWORK & DEPTH)
         ===================================================================================== */}
      <section className="relative py-40 bg-[#020B1C] text-white overflow-hidden flex items-center">
        
        {/* === LAYERED TECH BACKGROUND === */}
        <div className="absolute inset-0 z-0">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-[#020B1C]"></div>
            
            {/* Animated Grid Floor */}
            <div className="absolute bottom-0 left-0 right-0 h-full opacity-[0.07]"
                 style={{ 
                     backgroundImage: 'linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)', 
                     backgroundSize: '100px 100px',
                     transform: 'perspective(1000px) rotateX(70deg) translateY(100px) scale(2.5)',
                 }}>
            </div>

            {/* Neural Data Nodes (CSS Decorative) */}
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#007BFF]/10 blur-[150px] rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#007BFF]/5 blur-[120px] rounded-full"></div>
            
            {/* Tech Scan Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#007BFF]/40 to-transparent animate-pulse shadow-[0_0_15px_#007BFF]"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full">
          <div className="lg:w-2/3">
            
            {/* Tag with New Animation */}
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-lg mb-10 backdrop-blur-xl group cursor-default">
              <Cloud size={16} className="text-[#007BFF] animate-bounce" />
              <span className="text-xs font-bold tracking-[0.3em] text-white uppercase" style={{ fontFamily: 'Rajdhani' }}>
                Scalable Ecosystems
              </span>
              <div className="w-1 h-1 bg-[#007BFF] rounded-full animate-ping"></div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase" style={{ fontFamily: 'Rajdhani' }}>
              IoT Cloud <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-white to-[#00C6FF]">
                Architecture
              </span>
            </h1>

            <div className="relative mt-12 pl-8 border-l-[3px] border-[#007BFF]/40">
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl font-light" style={{ fontFamily: 'IBM Plex Sans' }}>
                  We architect secure IoT cloud platforms that bridge the gap between <span className="text-white font-medium italic">physical hardware</span> and <span className="text-white font-medium italic">digital intelligence</span>.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          2. CAPABILITIES GRID (IMPROVED: GLASSMORPHISM CARDS)
         ===================================================================================== */}
      <section className="py-32 bg-[#F8FAFC] relative">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-5xl font-bold text-[#020B1C]" style={{ fontFamily: 'Rajdhani' }}>
              CLOUD <span className="text-[#007BFF]">CAPABILITIES</span>
            </h2>
            <div className="hidden lg:block h-[1px] flex-grow mx-12 bg-gray-200"></div>
            <Activity className="text-[#007BFF]/30 hidden lg:block" size={32} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {capabilities.map((item, idx) => (
              <div key={idx} className="group relative bg-white p-12 rounded-2xl border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,123,255,0.15)] hover:-translate-y-3 overflow-hidden">
                {/* Decorative Background Index */}
                <span className="absolute -top-4 -right-2 text-9xl font-bold text-gray-50 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">0{idx + 1}</span>
                
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-[#007BFF] mb-8 group-hover:bg-[#007BFF] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-[#020B1C]" style={{ fontFamily: 'Rajdhani' }}>
                  {item.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed text-sm mb-6" style={{ fontFamily: 'IBM Plex Sans' }}>
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-[#007BFF] font-bold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Explore Tech <MoveUpRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================================
          3. VISION SECTION (IMPROVED: DYNAMIC ASYMMETRIC LAYOUT)
         ===================================================================================== */}
      <section className="py-40 bg-black relative overflow-hidden">
        {/* Dynamic Abstract Geometry */}
        <div className="absolute inset-0 opacity-20 flex items-center justify-center">
            <div className="w-[800px] h-[800px] border border-gray-800 rounded-full animate-spin-slow"></div>
            <div className="absolute w-[600px] h-[600px] border border-gray-800 rounded-full -animate-spin-slow opacity-50"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <Globe className="mx-auto text-[#007BFF] mb-12" size={64} />
          
          <h2 className="text-xs font-black text-gray-500 mb-10 tracking-[0.5em] uppercase" style={{ fontFamily: 'Rajdhani' }}>
            Transforming Data into Intelligence
          </h2>
          
          <blockquote className="text-4xl md:text-6xl font-extralight text-white leading-tight mb-16" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To build <span className="text-[#007BFF] font-black underline decoration-white/20 underline-offset-8">intelligent cloud foundations</span> that transform raw device data into actionable global intelligence."
          </blockquote>
          
          <div className="flex justify-center items-center gap-6">
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#007BFF]"></div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-full">
                <Database size={20} className="text-[#007BFF]" />
              </div>
              <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#007BFF]"></div>
          </div>
        </div>
      </section>

      {/* Custom Styles for Spin */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </main>
  );
}