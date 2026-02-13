import React from 'react';
import { 
  Cloud, Download, RefreshCw, ShieldCheck, 
  Activity, CheckCircle, Server, RotateCcw 
} from 'lucide-react';

// 1. IMPORT THE IMAGE
import heroBg from '../assets/fota_bg.jpg'; 

export default function FOTA() {
  const capabilities = [
    { 
      icon: <ShieldCheck size={28} />, 
      title: "Secure Pipelines", 
      desc: "End-to-end encrypted and authenticated update channels ensuring firmware integrity from cloud to edge." 
    },
    { 
      icon: <Download size={28} />, 
      title: "Delta Updates", 
      desc: "Bandwidth-optimized delivery mechanisms that only transmit binary changes, reducing data costs and time." 
    },
    { 
      icon: <RotateCcw size={28} />, 
      title: "Fail-Safe Rollback", 
      desc: "Robust A/B partition strategies guaranteeing device recovery in case of update interruption or failure." 
    },
    { 
      icon: <Server size={28} />, 
      title: "Campaign Management", 
      desc: "Scalable orchestration tools for managing phased rollouts across massive, geographically distributed fleets." 
    },
    { 
      icon: <CheckCircle size={28} />, 
      title: "Compliance Workflows", 
      desc: "Audit-ready update processes designed to meet automotive (UNECE R156) and industrial security standards." 
    },
    { 
      icon: <Activity size={28} />, 
      title: "Health Monitoring", 
      desc: "Real-time analytics on update success rates, version distribution, and device health post-deployment." 
    }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-32 bg-[#050505] text-white overflow-hidden">
        
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="FOTA Background" 
            className="w-full h-full object-cover opacity-30" 
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="lg:w-3/4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-full mb-6 backdrop-blur-sm">
              <Cloud size={14} className="text-[#007BFF]" />
              <span className="text-xs font-bold tracking-widest text-[#007BFF] uppercase" style={{ fontFamily: 'Rajdhani' }}>
                Secure Evolution
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Rajdhani' }}>
              FOTA <br />
              <span className="text-[#007BFF]">Firmware Over-The-Air</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl border-l-4 border-[#007BFF] pl-6" style={{ fontFamily: 'IBM Plex Sans' }}>
              We build enterprise-grade FOTA pipelines enabling safe, secure, and resilient firmware updates for embedded and automotive systems. Our future-ready FOTA frameworks support software-defined products and continuous innovation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES GRID */}
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
                {/* Hover Accent */}
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

      {/* 3. LONG-TERM VISION */}
      <section className="py-24 bg-black relative overflow-hidden text-center">
        {/* Abstract Cloud/Sync Visual */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]">
           <div className="w-full h-full border border-gray-800 opacity-20 transform -skew-x-12"></div>
           <div className="absolute top-4 left-4 w-full h-full border border-[#007BFF]/20 opacity-20 transform -skew-x-12"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-block mb-6 p-4 rounded-full bg-gray-900 border border-gray-800">
             <RefreshCw size={40} className="text-[#007BFF]" />
          </div>
          
          <h2 className="text-sm font-bold text-gray-500 mb-6 tracking-[0.3em] uppercase" style={{ fontFamily: 'Rajdhani' }}>
            Continuous Improvement
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-light text-white leading-tight" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To enable products that <span className="text-[#007BFF] font-semibold">improve continuously</span> in the field while maintaining safety and security."
          </h3>
          
          <div className="mt-12 w-32 h-1 bg-gradient-to-r from-[#007BFF] via-white to-[#007BFF] mx-auto opacity-50"></div>
        </div>
      </section>
    </main>
  );
}