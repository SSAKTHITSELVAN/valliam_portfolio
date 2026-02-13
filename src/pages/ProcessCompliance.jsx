import React from 'react';
import { 
  ClipboardCheck, FileText, Shield, 
  GitMerge, RefreshCw, BarChart2, BookOpen, CheckSquare 
} from 'lucide-react';

export default function ProcessCompliance() {
  const capabilities = [
    { 
      icon: <Shield size={28} />, 
      title: "Regulatory Readiness", 
      desc: "Comprehensive preparation for major standards including Automotive SPICE, ISO 26262 (Safety), and ISO 21434 (Cybersecurity)." 
    },
    { 
      icon: <GitMerge size={28} />, 
      title: "Compliance-by-Design", 
      desc: "Integrating regulatory checks directly into engineering frameworks to catch non-compliance early in the lifecycle." 
    },
    { 
      icon: <FileText size={28} />, 
      title: "Traceability Management", 
      desc: "End-to-end linking of requirements to code and tests, ensuring full visibility and impact analysis." 
    },
    { 
      icon: <RefreshCw size={28} />, 
      title: "Toolchain Integration", 
      desc: "Seamless connection of development tools to automate evidence collection for audits and certification." 
    },
    { 
      icon: <BarChart2 size={28} />, 
      title: "Continuous Monitoring", 
      desc: "Real-time dashboards that track process adherence and quality metrics throughout the development pipeline." 
    },
    { 
      icon: <BookOpen size={28} />, 
      title: "Automated Documentation", 
      desc: "Leveraging digital twin data to auto-generate technical documentation and compliance reports." 
    }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20 min-h-screen">
      
      {/* =====================================================================================
          1. HERO SECTION (UPDATED: BLUE THEME)
         ===================================================================================== */}
      <section className="relative py-32 bg-[#050505] text-white overflow-hidden min-h-[80vh] flex items-center">
        
        {/* === BACKGROUND EFFECTS === */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Dark Tech Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a101a] to-[#050505]"></div>
            
            {/* Tech Grid Pattern */}
            <div className="absolute inset-0 opacity-20"
                 style={{ 
                     backgroundImage: 'linear-gradient(rgba(0, 123, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 123, 255, 0.1) 1px, transparent 1px)', 
                     backgroundSize: '40px 40px',
                     maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                 }}>
            </div>

            {/* Glowing Blue Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#007BFF] opacity-10 blur-[120px] rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full">
          <div className="lg:w-3/4">
            
            {/* High-Visibility Tag */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#007BFF]/20 border border-[#007BFF]/40 rounded-full mb-8 backdrop-blur-md">
              <ClipboardCheck size={14} className="text-[#007BFF]" />
              <span className="text-[11px] font-extrabold tracking-[0.2em] text-white uppercase" style={{ fontFamily: 'Rajdhani' }}>
                Engineering Trust
              </span>
            </div>
            
            {/* Title with Blue Gradient */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'Rajdhani' }}>
              Process <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#3395ff] to-[#00C6FF]">
                Compliance
              </span>
            </h1>

            {/* Description with Vertical Accent */}
            <div className="flex flex-col md:flex-row gap-8 items-start border-l-4 border-[#007BFF] pl-8">
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl font-light" style={{ fontFamily: 'IBM Plex Sans' }}>
                  We embed process compliance into product development to ensure <span className="text-white font-medium">quality, safety, and security</span>. Our future-ready approach integrates compliance with agile and DevOps workflows.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
          2. CAPABILITIES GRID (KEPT ORIGINAL STYLE)
         ===================================================================================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-tight" style={{ fontFamily: 'Rajdhani' }}>
                FUTURE-FOCUSED <span className="text-[#007BFF]">CAPABILITIES</span>
              </h2>
            </div>
            <div className="hidden md:block w-1/3 h-px bg-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => (
              <div key={idx} className="group p-10 bg-white border border-gray-100 rounded-sm hover:border-[#007BFF] transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 rounded-bl-full -mr-8 -mt-8 transition-colors group-hover:bg-[#007BFF]/10"></div>

                <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center text-[#007BFF] mb-6 group-hover:bg-[#007BFF] group-hover:text-white transition-colors duration-300 shadow-sm">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 transition-colors group-hover:text-[#007BFF]" style={{ fontFamily: 'Rajdhani' }}>
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: 'IBM Plex Sans' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================================
          3. LONG-TERM VISION (KEPT ORIGINAL STYLE)
         ===================================================================================== */}
      <section className="py-32 bg-black relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-10">
           <div className="w-full h-full border border-gray-700 transform -skew-x-12"></div>
           <div className="absolute top-4 left-4 w-full h-full border border-[#007BFF]/30 transform -skew-x-12"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="p-4 rounded-full bg-[#007BFF]/5 border border-[#007BFF]/20 shadow-[0_0_20px_rgba(0,123,255,0.1)]">
                <CheckSquare size={40} className="text-[#007BFF] animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-sm font-bold text-gray-500 mb-6 tracking-[0.3em] uppercase" style={{ fontFamily: 'Rajdhani' }}>
            Frictionless Quality
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-light text-white leading-tight" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To make compliance <span className="text-[#007BFF] font-semibold">frictionless and continuous</span>, enabling faster innovation with enterprise-grade quality."
          </h3>
          
          <div className="mt-12 w-32 h-1 bg-gradient-to-r from-transparent via-[#007BFF] to-transparent mx-auto opacity-50 shadow-[0_0_10px_rgba(0,123,255,0.5)]"></div>
        </div>
      </section>
    </main>
  );
}