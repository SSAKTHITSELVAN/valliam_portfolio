import { 
  FlaskConical, ClipboardCheck, FileCheck, Smartphone, RefreshCw, 
  MonitorPlay, Lightbulb, CircuitBoard, Terminal, Layers, Wifi, 
  Database, Settings, PenTool, Cpu, Globe, ShieldCheck
} from 'lucide-react';

export default function EngineeringSolutions() {
  
  // Organized into 4 Logical Domains for easy scanning
  const domains = [
    {
      id: "innovation",
      title: "PRODUCT INNOVATION",
      desc: "From abstract ideas to physical realities.",
      color: "#E60000", // Red
      icon: <Lightbulb size={32} />,
      services: [
        { icon: <FlaskConical size={20} />, name: "R&D Lab", detail: "Deep-tech research & feasibility studies." },
        { icon: <PenTool size={20} />, name: "Concept & Architecture", detail: "System-level design & blueprints." },
        { icon: <CircuitBoard size={20} />, name: "Electronics Design", detail: "PCB design, layout & prototyping." }
      ]
    },
    {
      id: "embedded",
      title: "EMBEDDED CORE",
      desc: "The brain and soul of your hardware.",
      color: "#007BFF", // Blue
      icon: <Cpu size={32} />,
      services: [
        { icon: <Terminal size={20} />, name: "Embedded Software", detail: "Firmware, drivers & middleware." },
        { icon: <Layers size={20} />, name: "Platform Porting", detail: "Linux/Android/RTOS adaptation." },
        { icon: <MonitorPlay size={20} />, name: "HMI/UX Engineering", detail: "Next-gen cockpit & display UIs." }
      ]
    },
    {
      id: "digital",
      title: "CONNECTED DIGITAL",
      desc: "Bridging devices to the digital world.",
      color: "#8B5CF6", // Purple
      icon: <Globe size={32} />,
      services: [
        { icon: <Wifi size={20} />, name: "Connectivity", detail: "BLE, Wi-Fi, LoRaWAN, 5G integration." },
        { icon: <Database size={20} />, name: "Cloud & Backend", detail: "Scalable infrastructure & APIs." },
        { icon: <Smartphone size={20} />, name: "Mobile & Web Apps", detail: "User-facing control applications." },
        { icon: <RefreshCw size={20} />, name: "OTA/FOTA Systems", detail: "Secure remote update pipelines." }
      ]
    },
    {
      id: "quality",
      title: "QUALITY & COMPLIANCE",
      desc: "Ensuring safety, security, and reliability.",
      color: "#10B981", // Green
      icon: <ShieldCheck size={32} />,
      services: [
        { icon: <ClipboardCheck size={20} />, name: "Verification & Validation", detail: "Rigorous system testing." },
        { icon: <FileCheck size={20} />, name: "Process Compliance", detail: "ISO 26262, ASPICE, Cyber norms." },
        { icon: <Settings size={20} />, name: "Manufacturing Test", detail: "EOL testers & automation." }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative" id="engineering">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 md:text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            ENGINEERING <span className="text-[#E60000]">SOLUTIONS</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            A complete spectrum of engineering capabilities designed to take your product from concept to mass production without friction.
          </p>
        </div>

        {/* The Quadrant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {domains.map((domain) => (
            <div 
              key={domain.id}
              className="bg-white rounded-sm p-8 lg:p-10 shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 border-t-4"
              style={{ borderTopColor: domain.color }}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {domain.title}
                  </h3>
                  <p className="text-gray-500 font-medium" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    {domain.desc}
                  </p>
                </div>
                <div 
                  className="p-3 rounded-full bg-gray-50 text-gray-700"
                  style={{ color: domain.color }}
                >
                  {domain.icon}
                </div>
              </div>

              {/* Services List - Clean & Readable */}
              <div className="space-y-6">
                {domain.services.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    {/* Bullet Icon */}
                    <div 
                      className="mt-1 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: 'rgba(0,0,0,0.03)' }} // Default light bg
                    >
                      {/* On hover, we change icon color via style injection in the parent or conditional logic. 
                          Here simpler: just keep it clean gray/colored. */}
                      <span className="group-hover:text-white" style={{ color: domain.color }}>
                        {item.icon}
                      </span>
                    </div>
                    
                    {/* Text Content */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 leading-tight mb-1 group-hover:text-[#007BFF] transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                        {item.detail}
                      </p>
                    </div>
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