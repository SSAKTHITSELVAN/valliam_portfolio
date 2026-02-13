import React from 'react';
import { 
  Shield, Lock, Key, Eye, 
  RefreshCw, FileCode, ShieldCheck 
} from 'lucide-react';

// 1. IMPORT THE IMAGE
import heroBg from '../assets/cybersecurity_bg.jpg'; 

export default function Cybersecurity() {
  const roadmapItems = [
    { icon: <Shield size={28} />, title: "Zero-Trust Architecture", desc: "Embedded systems design where no entity—inside or outside the network—is trusted by default." },
    { icon: <Key size={28} />, title: "Post-Quantum Readiness", desc: "Cryptographic agility to withstand future threats from quantum computing advancements." },
    { icon: <Lock size={28} />, title: "Hardware Root-of-Trust", desc: "Immutable secure identity frameworks anchored directly in silicon." },
    { icon: <Eye size={28} />, title: "Continuous Detection", desc: "Real-time threat monitoring at both the edge device and cloud levels." },
    { icon: <RefreshCw size={28} />, title: "Secure Lifecycle (OTA)", desc: "Governance for over-the-air updates ensuring code integrity throughout the product lifespan." },
    { icon: <FileCode size={28} />, title: "AI Anomaly Detection", desc: "Machine learning models that identify and block intrusion attempts instantly." }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-32 bg-[#050505] text-white overflow-hidden">
        
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Cybersecurity Background" 
            className="w-full h-full object-cover opacity-30" 
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-full mb-6 backdrop-blur-sm">
              <ShieldCheck size={14} className="text-[#007BFF]" />
              <span className="text-xs font-bold tracking-widest text-[#007BFF] uppercase" style={{ fontFamily: 'Rajdhani' }}>
                Secure By Design
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Rajdhani' }}>
              Cybersecurity <br />
              <span className="text-[#007BFF]">Zero-Trust Architecture</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl border-l-2 border-[#E60000] pl-6" style={{ fontFamily: 'IBM Plex Sans' }}>
              We are building next-generation embedded cybersecurity architectures designed for software-defined, connected, and continuously evolving products. Security is treated as a foundational system property, not an add-on.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ROADMAP GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Rajdhani' }}>
                FUTURE <span className="text-[#E60000]">ROADMAP</span>
              </h2>
            </div>
            <div className="hidden md:block w-1/3 h-px bg-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmapItems.map((item, idx) => (
              <div key={idx} className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#007BFF] transition-all duration-300 rounded-sm group relative overflow-hidden">
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#007BFF]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center text-[#007BFF] mb-6 group-hover:bg-[#007BFF] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'Rajdhani' }}>
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm relative z-10" style={{ fontFamily: 'IBM Plex Sans' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISION BANNER */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden text-center">
        {/* Red Shield Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E60000]/5 rounded-full blur-[100px]"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="mb-8">
            <ShieldCheck size={48} className="text-[#E60000] mx-auto" />
          </div>
          
          <h3 className="text-3xl md:text-5xl font-light text-white leading-tight" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To enable <span className="text-[#007BFF] font-semibold">self-defending electronic products</span> that evolve securely over decades of deployment."
          </h3>
          
          <div className="mt-12 w-20 h-1 bg-[#E60000] mx-auto"></div>
        </div>
      </section>
    </main>
  );
}