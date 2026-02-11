import { useState, useEffect } from 'react';
import { 
  Scan, Cpu, Layers, Battery, ShieldAlert, Cloud, Lock, MonitorSmartphone, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';

export default function TechSolutions() {
  const [activeId, setActiveId] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const solutions = [
    {
      id: 0,
      icon: <Scan size={56} />,
      title: "Smart Sensors & Perception",
      desc: "Advanced sensor fusion algorithms and signal processing pipelines that enable machines to 'see' and 'feel' their environment with high precision.",
      features: ["Sensor Fusion", "LiDAR/Radar Processing", "Signal Conditioning"],
      color: "#007BFF" // Blue
    },
    {
      id: 1,
      icon: <Cpu size={56} />,
      title: "Embedded Intelligence & Edge AI",
      desc: "Deploying machine learning models directly on microcontrollers and edge devices for real-time inference without cloud latency.",
      features: ["TinyML", "Real-Time Control", "Neural Processing Units"],
      color: "#E60000" // Red
    },
    {
      id: 2,
      icon: <Layers size={56} />,
      title: "Digital Twins & Virtual Prototyping",
      desc: "Creating high-fidelity virtual replicas of physical systems to simulate performance, predict failures, and accelerate development cycles.",
      features: ["HIL/SIL Testing", "System Simulation", "Predictive Maintenance"],
      color: "#00BFFF" // Cyan
    },
    {
      id: 3,
      icon: <Battery size={56} />,
      title: "Ultra-Low-Power Architectures",
      desc: "Engineering hardware and firmware for extreme energy efficiency, extending battery life for years in remote IoT deployments.",
      features: ["Energy Harvesting", "Sleep Modes", "Power Profiling"],
      color: "#10B981" // Green
    },
    {
      id: 4,
      icon: <ShieldAlert size={56} />,
      title: "Functional Safety & Reliability",
      desc: "Rigorous design methodologies compliant with ISO 26262 and IEC 61508 to ensure failsafe operation in critical systems.",
      features: ["FuSa Compliance", "Fault Tolerance", "Risk Analysis"],
      color: "#F59E0B" // Amber
    },
    {
      id: 5,
      icon: <Cloud size={56} />,
      title: "Connected IoT & AIoT Platforms",
      desc: "End-to-end connectivity solutions linking edge devices to cloud infrastructure for seamless data aggregation and fleet management.",
      features: ["Device-to-Cloud", "MQTT/CoAP", "Remote Management"],
      color: "#8B5CF6" // Purple
    },
    {
      id: 6,
      icon: <Lock size={56} />,
      title: "Secure Embedded Systems",
      desc: "Implementing hardware root-of-trust, secure boot, and encrypted communication to protect devices from cyber threats.",
      features: ["Secure Boot", "OTA Security", "Crypto Engines"],
      color: "#1F2937" // Dark
    },
    {
      id: 7,
      icon: <MonitorSmartphone size={56} />,
      title: "Smart HMI & User Interfaces",
      desc: "Designing intuitive, responsive, and multimodal user interfaces for next-generation industrial and automotive cockpits.",
      features: ["Touch & Voice", "Gesture Control", "Qt/Embedded Graphics"],
      color: "#EC4899" // Pink
    }
  ];

  // Auto-Play Logic
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveId((prev) => (prev === solutions.length - 1 ? 0 : prev + 1));
      }, 3000); // Change every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, solutions.length]);

  // Handle Manual Click
  const handleManualSelect = (index) => {
    setActiveId(index);
    setIsAutoPlaying(false); // Stop auto-play on user interaction
  };

  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden" id="technology">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-gray-200 bg-white/50 skew-x-12 transform origin-top translate-x-20 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-16 h-2 bg-[#007BFF]"></div>
             <span className="text-xl md:text-2xl font-bold tracking-widest text-gray-500 uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
               OUR EXPERTISE
             </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-black" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            TECHNOLOGY <span className="text-[#007BFF]">SOLUTIONS</span>
          </h2>
          {/* Auto-Play Indicator (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-2 mt-4 text-gray-400 text-base font-medium">
             {isAutoPlaying ? (
               <><div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div> Auto-Cycling Enabled</>
             ) : (
               <><div className="w-3 h-3 rounded-full bg-gray-400"></div> Manual Mode Active</>
             )}
          </div>
        </div>

        {/* =========================================================
            DESKTOP VIEW: Split Dashboard
        ========================================================= */}
        <div className="hidden lg:flex flex-row gap-16">
          
          {/* LEFT: Dynamic Monitor (The Card) */}
          <div className="w-5/12 relative">
             <div className="sticky top-32">
                {/* Increased padding for a larger card feel */}
                <div className="bg-white p-12 lg:p-14 rounded-sm shadow-2xl border-t-8 transition-all duration-500 ease-in-out relative overflow-hidden group"
                     style={{ borderTopColor: solutions[activeId].color }}>
                   
                   {/* Background Glow */}
                   <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-5 transition-colors duration-500"
                        style={{ backgroundColor: solutions[activeId].color }}></div>

                   {/* Icon - Larger */}
                   <div className="relative z-10 w-28 h-28 flex items-center justify-center rounded-full bg-gray-50 mb-10 transition-colors duration-500"
                        style={{ color: solutions[activeId].color }}>
                     {solutions[activeId].icon}
                   </div>

                   {/* Title - Text 5XL */}
                   <h3 className="relative z-10 text-5xl font-bold mb-8 transition-all duration-300 leading-[1.1]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                     {solutions[activeId].title}
                   </h3>

                   {/* Description - Text 2XL (Much Larger) */}
                   <p className="relative z-10 text-2xl text-gray-600 leading-relaxed mb-12 min-h-[140px]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                     {solutions[activeId].desc}
                   </p>

                   {/* Features - Text XL */}
                   <div className="relative z-10 space-y-5">
                      <p className="text-base font-bold text-gray-400 uppercase tracking-wider mb-2">Key Capabilities</p>
                      {solutions[activeId].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-gray-800 text-xl">
                           <CheckCircle2 size={28} style={{ color: solutions[activeId].color }} />
                           <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                   </div>

                   <div className="relative z-10 mt-14 pt-8 border-t border-gray-100">
                      <button className="flex items-center gap-2 font-bold transition-all hover:gap-4 uppercase tracking-widest text-lg"
                         style={{ color: solutions[activeId].color, fontFamily: 'Rajdhani, sans-serif' }}>
                        Explore Solution <ArrowRight size={24} />
                      </button>
                   </div>
                </div>
             </div>
          </div>

          {/* RIGHT: Controller List */}
          <div className="w-7/12">
            <div className="grid grid-cols-1 gap-3">
              {solutions.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => handleManualSelect(index)}
                  className={`group relative p-6 cursor-pointer transition-all duration-300 border-l-4 rounded-r-sm ${
                    activeId === index 
                      ? 'bg-white shadow-xl translate-x-4 scale-[1.02]' 
                      : 'bg-transparent hover:bg-white hover:shadow-md border-transparent hover:translate-x-2'
                  }`}
                  style={{ 
                    borderLeftColor: activeId === index ? item.color : 'transparent' 
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className={`transition-colors duration-300 ${
                        activeId === index ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'
                      }`}>
                        {item.icon}
                      </div>
                      {/* List Title - Text 2XL */}
                      <h4 className={`text-2xl font-bold transition-colors duration-300 ${
                        activeId === index ? 'text-black' : 'text-gray-500 group-hover:text-black'
                      }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {item.title}
                      </h4>
                    </div>
                    <div className={`transition-opacity duration-300 ${
                      activeId === index ? 'opacity-100' : 'opacity-0'
                    }`} style={{ color: item.color }}>
                      <ArrowRight size={28} />
                    </div>
                  </div>
                  {/* Progress Bar */}
                  {isAutoPlaying && activeId === index && (
                     <div className="absolute bottom-0 left-0 h-1 bg-gray-100 w-full overflow-hidden">
                        <div className="h-full animate-[width_3s_linear_infinite]" 
                             style={{ backgroundColor: item.color, width: '100%' }}></div>
                     </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            MOBILE VIEW: Vertical Stream (Larger Fonts)
        ========================================================= */}
        <div className="lg:hidden flex flex-col gap-8">
           {solutions.map((item) => (
             <div 
               key={item.id} 
               className="bg-white p-8 rounded-sm shadow-md border-t-4"
               style={{ borderTopColor: item.color }}
             >
                <div className="flex items-start gap-5 mb-8">
                   <div className="p-4 bg-gray-50 rounded-full text-gray-700" style={{ color: item.color }}>
                      {item.icon}
                   </div>
                   {/* Mobile Title - Text 4XL */}
                   <h3 className="text-4xl font-bold leading-none mt-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                     {item.title}
                   </h3>
                </div>
                
                {/* Mobile Desc - Text XL */}
                <p className="text-xl text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                  {item.desc}
                </p>

                <div className="space-y-4 bg-gray-50 p-6 rounded-sm">
                   {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                         <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                         {/* Mobile Features - Text LG */}
                         <span className="text-lg font-medium text-gray-700">{feature}</span>
                      </div>
                   ))}
                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}