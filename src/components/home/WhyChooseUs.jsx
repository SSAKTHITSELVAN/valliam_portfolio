import { Infinity, CircuitBoard, Zap, ShieldCheck, TrendingUp, Handshake } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Infinity size={40} />,
      title: "End-to-End Product Engineering Partner",
      desc: "We support the complete product lifecycle from concept and architecture to validation, compliance, and manufacturing support.",
      color: "#007BFF" // Electric Blue
    },
    {
      icon: <CircuitBoard size={40} />,
      title: "Deep Electronics & Embedded Expertise",
      desc: "Our strength lies in combining hardware, firmware, OS platforms, connectivity, and cloud into reliable, production-ready systems.",
      color: "#E60000" // Valliam Red
    },
    {
      icon: <Zap size={40} />,
      title: "Designed for Ultra-Low-Power",
      desc: "We engineer products with power efficiency, performance, thermal behavior, and battery life in mind right from day one.",
      color: "#00BFFF" // Cyan
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Built for Real-World Deployment",
      desc: "Our solutions are designed to be secure, scalable, maintainable, and compliant with industry standards and quality processes.",
      color: "#F59E0B" // Amber
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Future-Ready Technology Approach",
      desc: "We adopt modern architectures such as edge intelligence, software-defined platforms, digital twins, and connected ecosystems.",
      color: "#10B981" // Green
    },
    {
      icon: <Handshake size={40} />,
      title: "Flexible Engagement Models",
      desc: "PoC, co-development, dedicated teams, or long-term partnerships—we adapt to how you build products.",
      color: "#8B5CF6" // Purple
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="why-choose-us">
      
      {/* Background Decor: Subtle Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* Radial Gradient Glow for Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-[#007BFF] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            WHY <span className="text-[#E60000]">CHOOSE US?</span>
          </h2>
          <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            We don't just write code or design boards; we build scalable, industrial-grade products ready for the real world.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 rounded-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col"
            >
              {/* Top Highlight Line on Hover */}
              <div 
                className="absolute top-0 left-0 w-0 h-1 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: feature.color }}
              ></div>

              {/* Icon Container */}
              <div 
                className="mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-black border border-zinc-700 group-hover:border-transparent transition-all duration-300 group-hover:scale-110"
                style={{ 
                  color: feature.color,
                  boxShadow: `0 0 0 0 rgba(255,255,255,0)` // Base state
                }}
              >
                {/* On hover, we add a subtle glow matching the icon color via inline style injection or just rely on text color pop */}
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#007BFF] transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-base flex-grow group-hover:text-gray-200 transition-colors" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                {feature.desc}
              </p>

              {/* Decoration: Subtle Index Number */}
              <div className="absolute bottom-4 right-4 text-6xl font-bold text-white/5 pointer-events-none select-none" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}