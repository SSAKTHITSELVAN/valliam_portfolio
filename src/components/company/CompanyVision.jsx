export default function CompanyVision() {
  
  const visionPoints = [
    "Devices are software-defined and continuously upgradable",
    "Intelligence moves closer to the edge",
    "Products are designed for sustainability and long lifecycle",
    "Digital twins accelerate innovation and reliability",
    "Electronics adapt to user needs and operating environments"
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Abstract Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[#007BFF]/20 to-transparent blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
         <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              OUR <span className="text-[#007BFF]">VISION</span>
            </h2>
            <p className="text-2xl md:text-3xl font-light text-gray-300 leading-tight" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              "To enable a future where every electronic product is intelligent, connected, secure, and energy-efficient."
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Intro Card */}
            <div className="p-8 border border-white/10 bg-[#007BFF]/10 rounded-sm flex items-center justify-center">
               <h3 className="text-2xl font-bold text-center" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                 We envision a world where:
               </h3>
            </div>

            {visionPoints.map((point, idx) => (
              <div key={idx} className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors rounded-sm group">
                 <div className="text-4xl font-bold text-[#007BFF]/30 mb-4 font-mono group-hover:text-[#007BFF] transition-colors">
                   0{idx + 1}
                 </div>
                 <p className="text-lg text-gray-200" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                   {point}
                 </p>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}