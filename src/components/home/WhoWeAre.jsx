// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Brain, Wifi, Zap, ShieldCheck } from 'lucide-react';

// // ==========================================
// // IMAGE PATHS CONFIGURATION
// // ==========================================
// // To use your local images, uncomment these lines and place images in src/assets/
// import imgIntelligent from '../../assets/slide-intelligent.jpg';
// import imgConnected from '../../assets/slide-connected.jpg';
// import imgEfficient from '../../assets/slide-efficient.jpg';
// import imgSecure from '../../assets/slide-secure.jpg';

// export default function WhoWeAre() {
//   const [current, setCurrent] = useState(0);

//   // Data Array for the Slides
//   const slides = [
//     {
//       id: 1,
//       // Use imported variable here (e.g., imgIntelligent) or URL
//       image: imgIntelligent, 
//       icon: <Brain size={48} />,
//       title: "INTELLIGENT",
//       subtitle: "Sensing & Processing",
//       desc: "We build systems capable of real-time decision making, signal processing, and adaptive learning at the edge.",
//       color: "#007BFF"
//     },
//     {
//       id: 2,
//       image: imgConnected,
//       icon: <Wifi size={48} />,
//       title: "CONNECTED",
//       subtitle: "Seamless Integration",
//       desc: "Bridging physical devices with the cloud through robust IoT protocols, mesh networking, and 5G connectivity.",
//       color: "#E60000"
//     },
//     {
//       id: 3,
//       image: imgEfficient,
//       icon: <Zap size={48} />,
//       title: "ENERGY EFFICIENT",
//       subtitle: "Ultra-Low Power",
//       desc: "Optimized hardware and firmware architectures designed to maximize battery life and performance per watt.",
//       color: "#00BFFF"
//     },
//     {
//       id: 4,
//       image: imgSecure,
//       icon: <ShieldCheck size={48} />,
//       title: "SECURE & RELIABLE",
//       subtitle: "Industrial Grade",
//       desc: "Engineered for functional safety (FuSa) and cybersecurity to ensure long-term reliability in critical environments.",
//       color: "#FFD700"
//     }
//   ];

//   // Auto-Play Logic
//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 5000); // Change slide every 5 seconds
//     return () => clearInterval(timer);
//   }, [current]);

//   const nextSlide = () => {
//     setCurrent(current === slides.length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? slides.length - 1 : current - 1);
//   };

//   return (
//     <section className="relative bg-black py-24 overflow-hidden" id="who-we-are">
      
//       {/* Container */}
//       <div className="max-w-[1440px] mx-auto px-0 md:px-6 relative h-[600px] md:h-[700px]">
        
//         {/* Section Title (Absolute Top) */}
//         <div className="absolute top-0 left-6 md:left-10 z-30 pt-8">
//            <div className="flex items-center gap-4 mb-2">
//               <div className="w-12 h-1 bg-[#E60000]"></div>
//               <span className="text-xl font-bold tracking-widest text-white uppercase shadow-black drop-shadow-md" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
//                 WHO WE ARE
//               </span>
//            </div>
//         </div>

//         {/* SLIDER WRAPPER */}
//         <div className="w-full h-full relative rounded-none md:rounded-sm overflow-hidden shadow-2xl">
          
//           {slides.map((slide, index) => (
//             <div 
//               key={slide.id}
//               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//                 index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
//               }`}
//             >
//               {/* Background Image with Scale Animation */}
//               <div className="absolute inset-0">
//                 <img 
//                   src={slide.image} 
//                   alt={slide.title} 
//                   className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
//                     index === current ? 'scale-110' : 'scale-100'
//                   }`}
//                 />
//                 {/* Gradient Overlay for Text Readability */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
//               </div>

//               {/* Content Box */}
//               <div className="absolute inset-0 flex items-center p-6 md:p-16">
//                 <div className="max-w-3xl space-y-6 slide-in-up">
                  
//                   {/* Icon */}
//                   <div 
//                     className="w-20 h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6"
//                     style={{ color: slide.color }}
//                   >
//                     {slide.icon}
//                   </div>

//                   {/* Text Content */}
//                   <div>
//                     <h3 className="text-2xl md:text-3xl font-bold text-[#E60000] mb-2 tracking-wide" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
//                       {slide.subtitle}
//                     </h3>
//                     <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
//                       {slide.title}
//                     </h2>
//                   </div>

//                   <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-2xl border-l-4 pl-6" 
//                      style={{ fontFamily: 'IBM Plex Sans, sans-serif', borderColor: slide.color }}>
//                     {slide.desc}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Navigation Controls */}
//           <div className="absolute bottom-8 right-8 z-30 flex gap-4">
//             <button 
//               onClick={prevSlide}
//               className="p-4 bg-white/10 hover:bg-[#E60000] text-white backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 group"
//             >
//               <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
//             </button>
//             <button 
//               onClick={nextSlide}
//               className="p-4 bg-white/10 hover:bg-[#E60000] text-white backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 group"
//             >
//               <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>

//           {/* Progress Bar / Indicators */}
//           <div className="absolute bottom-8 left-8 md:left-16 z-30 flex gap-3">
//             {slides.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrent(idx)}
//                 className={`h-1 transition-all duration-500 rounded-full ${
//                   current === idx ? 'w-16 bg-[#E60000]' : 'w-8 bg-white/30 hover:bg-white'
//                 }`}
//               />
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Brain, Wifi, Zap, ShieldCheck } from 'lucide-react';

// ==========================================
// IMAGE PATHS CONFIGURATION
// ==========================================
import imgIntelligent from '../../assets/slide-intelligent.jpg';
import imgConnected from '../../assets/slide-connected.jpg';
import imgEfficient from '../../assets/slide-efficient.jpg';
import imgSecure from '../../assets/slide-secure.jpg';

export default function WhoWeAre() {
  const [current, setCurrent] = useState(0);

  // Data Array for the Slides
  const slides = [
    {
      id: 1,
      image: imgIntelligent, 
      icon: <Brain size={64} />,
      title: "INTELLIGENT",
      desc: "Capable of sensing, processing, and adapting to real-world environments.",
      color: "#38bdf8" // Sky Blue for better contrast
    },
    {
      id: 2,
      image: imgConnected,
      icon: <Wifi size={64} />,
      title: "CONNECTED",
      desc: "Seamlessly integrated with devices, networks, and cloud platforms.",
      color: "#fb7185" // Light Red for better contrast
    },
    {
      id: 3,
      image: imgEfficient,
      icon: <Zap size={64} />,
      title: "ENERGY-EFFICIENT",
      desc: "Optimized for ultra-low-power operation to maximize battery life.",
      color: "#22d3ee" // Cyan
    },
    {
      id: 4,
      image: imgSecure,
      icon: <ShieldCheck size={64} />,
      title: "SECURE & RELIABLE",
      desc: "Designed for safety, cybersecurity, and long product lifecycles.",
      color: "#fbbf24" // Amber
    }
  ];

  // Auto-Play Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black" id="who-we-are">
      
      {/* ==========================================
          BACKGROUND LAYER (Crossfading Images)
      ========================================== */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image - Lighter overlay so image is visible */}
          <img 
            src={slide.image} 
            alt={slide.title} 
            className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${
              index === current ? 'scale-110' : 'scale-100'
            }`}
          />
          {/* Lighter Gradient: Allows image to be seen, but darkens left side for text safety */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30"></div>
        </div>
      ))}

      {/* ==========================================
          CONTENT GRID
      ========================================== */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* LEFT COLUMN: Static Content */}
        <div className="h-full flex flex-col justify-center py-12 lg:pr-12">
           {/* HIGH CONTRAST CARD 
              - bg-zinc-950: Very dark solid grey/black
              - opacity-95: Almost opaque to hide background noise
              - border-l-4: Bright red accent
           */}
           <div className="bg-zinc-950/95 p-8 md:p-12 border-l-4 border-[#E60000] rounded-r-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] border-y border-r border-white/10">
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl md:text-5xl font-bold tracking-[0.05em] text-[#E60000] uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  WHO WE ARE
                </span>
              </div>

              {/* Text Content - Bright White & Sky Blue Highlights */}
              <div className="space-y-6 text-white text-base md:text-lg leading-relaxed font-medium" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                <p>
                  We are a <strong className="text-sky-400 font-bold">technology-driven engineering company</strong> specializing in the design and development of smart, connected, and ultra-low-power electronic products.
                </p>
                <p className="hidden md:block">
                  Our team brings together expertise in <span className="text-sky-400 font-bold">electronics design</span>, <span className="text-sky-400 font-bold">embedded software</span>, and <span className="text-sky-400 font-bold">intelligent systems</span> to help organizations transform ideas into production-ready, scalable, and reliable products.
                </p>
                <p className="hidden lg:block text-gray-300">
                  We work closely with startups, product companies, and enterprises to accelerate innovation while meeting real-world constraints such as power efficiency, performance, security, safety, cost, and long-term maintainability.
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/20 my-8"></div>

              {/* Bottom Tagline */}
              <p className="text-sm md:text-base font-bold text-white tracking-widest uppercase flex items-center gap-3">
                <span className="w-2 h-2 bg-[#E60000] rounded-full inline-block shadow-[0_0_10px_#E60000]"></span>
                FUTURE-READY ELECTRONIC PLATFORMS
              </p>
           </div>
        </div>

        {/* RIGHT COLUMN: Dynamic Slider */}
        <div className="h-full flex flex-col justify-center items-center lg:items-start pl-0 lg:pl-16 pb-12 lg:pb-0 pointer-events-none">
          
          <div className="relative w-full max-w-xl pointer-events-auto">
             {/* Icon Circle */}
             <div 
               className="mb-8 p-6 inline-block rounded-full bg-black/80 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500"
               style={{ color: slides[current].color }}
             >
               {slides[current].icon}
             </div>

             {/* Dynamic Title */}
             <h3 className="text-xl font-bold text-[#E60000] mb-2 tracking-widest uppercase fade-in-up" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                WE BUILD PLATFORMS THAT ARE
             </h3>
             <h2 
               className="text-6xl md:text-8xl font-bold text-white mb-6 leading-none tracking-tight transition-all duration-500 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]" 
               style={{ fontFamily: 'Rajdhani, sans-serif' }}
             >
               {slides[current].title}
             </h2>

             {/* Dynamic Description */}
             <p className="text-xl md:text-2xl text-white font-medium border-l-4 pl-6 transition-all duration-500 drop-shadow-md bg-black/40 py-2 pr-4 rounded-r-sm" 
                style={{ fontFamily: 'IBM Plex Sans, sans-serif', borderColor: slides[current].color }}>
               {slides[current].desc}
             </p>

             {/* Slider Controls */}
             <div className="flex items-center gap-6 mt-12">
                <div className="flex gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        current === idx ? 'w-12 bg-[#E60000]' : 'w-4 bg-gray-500 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => setCurrent(current === 0 ? slides.length - 1 : current - 1)}
                    className="p-3 rounded-full border border-white/30 text-white hover:bg-[#E60000] hover:border-[#E60000] transition-colors bg-black/50 backdrop-blur-sm"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => setCurrent(current === slides.length - 1 ? 0 : current + 1)}
                    className="p-3 rounded-full border border-white/30 text-white hover:bg-[#E60000] hover:border-[#E60000] transition-colors bg-black/50 backdrop-blur-sm"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}