import { Target } from 'lucide-react';

export default function CompanyMission() {
  
  const missions = [
    "To help organizations build next-generation electronic products faster and with confidence.",
    "To provide end-to-end product engineering from concept to production.",
    "To create ultra-low-power, reliable, and secure embedded platforms.",
    "To bridge innovation with industry-grade quality, safety, and compliance.",
    "To build long-term partnerships, not just deliver projects."
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Title Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                OUR <br /><span className="text-[#E60000]">MISSION</span>
              </h2>
              <div className="w-20 h-2 bg-[#007BFF] mb-6"></div>
              <p className="text-gray-500 text-lg">
                Driving the future of electronics with precision and purpose.
              </p>
            </div>
          </div>

          {/* List Column */}
          <div className="lg:col-span-8 space-y-4">
            {missions.map((mission, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-6 p-8 bg-white shadow-sm border-l-4 border-transparent hover:border-[#E60000] hover:shadow-lg transition-all duration-300 group rounded-r-sm"
              >
                <div className="mt-1 flex-shrink-0 text-gray-300 group-hover:text-[#E60000] transition-colors">
                  <Target size={32} />
                </div>
                <div>
                  <p className="text-xl text-gray-700 font-medium leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    {mission}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}