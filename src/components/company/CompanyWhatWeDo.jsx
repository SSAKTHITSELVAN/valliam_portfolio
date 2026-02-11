import { PenTool, Layers, Cpu, Cloud, Monitor, ShieldCheck, ClipboardCheck, ArrowRight } from 'lucide-react';

export default function CompanyWhatWeDo() {
  
  const services = [
    { icon: <PenTool size={24} />, text: "Product Concept & Architecture" },
    { icon: <Layers size={24} />, text: "Electronics & Embedded Platform Development" },
    { icon: <Cpu size={24} />, text: "Intelligent Systems & Edge Computing" },
    { icon: <Cloud size={24} />, text: "Connectivity & Device-to-Cloud Platforms" },
    { icon: <Monitor size={24} />, text: "User Interfaces & Smart HMI" },
    { icon: <ShieldCheck size={24} />, text: "Safety, Security & Compliance Engineering" },
    { icon: <ClipboardCheck size={24} />, text: "Validation, Testing & Manufacturing Support" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-4">
             <span className="w-2 h-2 rounded-full bg-[#007BFF]"></span>
             <span className="text-xs font-bold tracking-[0.2em] text-[#007BFF] uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
               Lifecycle Services
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black max-w-3xl" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            WHAT WE <span className="text-[#007BFF]">DO</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            At Valliam, we work across the complete electronic product lifecycle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300 rounded-sm group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-gray-400 group-hover:text-[#007BFF] group-hover:bg-blue-50 transition-colors mb-6 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-black leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {service.text}
              </h3>
            </div>
          ))}
        </div>

        {/* Lifecycle Flow Banner */}
        <div className="relative overflow-hidden rounded-sm bg-black text-white p-10 md:p-14 text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E60000] via-[#007BFF] to-[#E60000]"></div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-8" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Helping customers move from:
          </h3>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-lg md:text-xl font-bold text-gray-300">
            <span className="text-white">Idea</span>
            <ArrowRight size={20} className="text-[#007BFF]" />
            <span className="text-white">Prototype</span>
            <ArrowRight size={20} className="text-[#007BFF]" />
            <span className="text-white">Product</span>
            <ArrowRight size={20} className="text-[#007BFF]" />
            <span className="text-white">Production</span>
            <ArrowRight size={20} className="text-[#007BFF]" />
            <span className="text-[#E60000] scale-110">Scale</span>
          </div>
        </div>

      </div>
    </section>
  );
}