// import { Mail, MessageSquare } from 'lucide-react';
// import backgroundImage from '../assets/background.jpg';

// // Import the specialized sections
// import WhoWeAre from '../components/Home/WhoWeAre';
// import TechSolutions from '../components/Home/TechSolutions';
// import WhyChooseUs from '../components/Home/WhyChooseUs';
// import EngineeringSolutions from '../components/Home/EngineeringSolutions';
// import EngagementModels from '../components/Home/EngagementModels';

// export default function Home() {
//   return (
//     <main className="bg-white overflow-x-hidden">
      
//       {/* =========================================
//           1. HERO SECTION
//           High-impact introduction with 'Ultra-Low-Power' focus
//       ========================================= */}
//       <section
//         id="home"
//         className="relative min-h-[95vh] flex items-center pt-20 pb-20 overflow-hidden"
//         style={{
//           backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.85) 50%, rgba(0, 0, 0, 0.92) 100%), url(${backgroundImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed',
//         }}
//       >
//         <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
//             {/* Left Content */}
//             <div className="lg:col-span-9 space-y-10 fade-in-up">
//               <div className="space-y-6">
//                 <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1]" style={{ 
//                   color: '#FFFFFF',
//                   fontFamily: 'Rajdhani, sans-serif',
//                 }}>
//                   We Build Next-Gen<br />
//                   <span style={{ color: '#007BFF' }}>Smart</span>, Connected,<br />
//                   <span style={{ color: '#E60000' }}>Ultra-Low-Power</span><br />
//                   Electronic Products
//                 </h2>
                
//                 <p className="text-xl md:text-2xl leading-relaxed max-w-3xl border-l-4 pl-6 border-[#007BFF] text-gray-200" style={{ 
//                   fontFamily: 'IBM Plex Sans, sans-serif',
//                 }}>
//                   We design, build, and scale next-generation embedded systems, connected platforms, and intelligent devices with industry standard compliance from concept to production.
//                 </p>
//               </div>

//               {/* Hero Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-5 pt-8">
//                 <a
//                   href="#contact"
//                   className="px-8 py-5 text-lg font-bold flex items-center justify-center space-x-3 transition-all duration-300 shadow-[0_0_20px_rgba(230,0,0,0.4)] hover:shadow-[0_0_40px_rgba(230,0,0,0.6)] group rounded-sm hover:-translate-y-1"
//                   style={{
//                     backgroundColor: '#E60000',
//                     color: '#FFFFFF',
//                     fontFamily: 'Rajdhani, sans-serif',
//                     letterSpacing: '0.05em'
//                   }}
//                 >
//                   <MessageSquare size={24} />
//                   <span>TALK TO OUR EXPERTS</span>
//                 </a>

//                 <a
//                   href="mailto:info@valliam.com"
//                   className="px-8 py-5 text-lg font-bold flex items-center justify-center space-x-3 transition-all duration-300 hover:bg-white hover:text-black rounded-sm group hover:-translate-y-1"
//                   style={{
//                     border: '2px solid #FFFFFF',
//                     color: '#FFFFFF',
//                     fontFamily: 'Rajdhani, sans-serif',
//                     letterSpacing: '0.05em'
//                   }}
//                 >
//                   <Mail size={24} />
//                   <span>EMAIL US</span>
//                 </a>
//               </div>
//             </div>
            
//             {/* Right Side - Kept minimal for visual balance */}
//             <div className="hidden lg:block lg:col-span-3"></div>
//           </div>
//         </div>

//         {/* Bottom Gradient Line */}
//         <div className="absolute bottom-0 left-0 right-0 h-1" style={{
//           background: 'linear-gradient(90deg, #E60000 0%, #007BFF 50%, #E60000 100%)'
//         }}></div>
//       </section>

//       {/* =========================================
//           2. WHO WE ARE
//           Bento Grid Layout: Intelligent, Connected, Efficient, Secure
//       ========================================= */}
//       <WhoWeAre />

//       {/* =========================================
//           3. TECHNOLOGY SOLUTIONS
//           Smart Sensors, Edge AI, IoT Platforms (Light Grey BG)
//       ========================================= */}
//       <TechSolutions />

//       {/* =========================================
//           4. WHY CHOOSE US
//           Dark Section: End-to-End, Deep Expertise, Real-World Deployment
//       ========================================= */}
//       <WhyChooseUs />

//       {/* =========================================
//           5. ENGINEERING SOLUTIONS
//           Specific Services: R&D, V&V, Mobile Apps, OTA (White BG)
//       ========================================= */}
//       <EngineeringSolutions />

//       {/* =========================================
//           6. ENGAGEMENT MODELS
//           How We Partner: Project, Dedicated Team, Co-Innovation
//       ========================================= */}
//       <EngagementModels />

//     </main>
//   );
// }




import { Mail, MessageSquare } from 'lucide-react';
// import backgroundImage from '../assets/background.jpg'; // <--- No longer needed
// Import your video file here if using local file, or use a URL
import heroVideo from '../assets/hero-tech.mp4'; 

// Import the specialized sections
import WhoWeAre from '../components/home/WhoWeAre';
import TechSolutions from '../components/home/TechSolutions';
import WhyChooseUs from '../components/home/WhyChooseUs';
import EngineeringSolutions from '../components/home/EngineeringSolutions';
import EngagementModels from '../components/home/EngagementModels';

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      
      {/* =========================================
          1. HERO SECTION (VIDEO BACKGROUND)
      ========================================= */}
      <section
        id="home"
        // UPDATED: Changed 'pt-20' to 'pt-12 md:pt-20' to reduce mobile gap
        className="relative min-h-[95vh] flex items-center pt-12 md:pt-20 pb-20 overflow-hidden"
      >
        {/* VIDEO BACKGROUND LAYER */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            {/* If using a local file: */}
            <source src={heroVideo} type="video/mp4" />
            
            {/* OR Placeholder for testing (Uncomment to see effect immediately): */}
            {/* <source src="https://assets.mixkit.co/videos/preview/mixkit-motherboard-microchip-technology-close-up-1193-large.mp4" type="video/mp4" /> */}
          </video>

          {/* DARK GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40"></div>
        </div>

        {/* HERO CONTENT */}
        <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-9 space-y-8 md:space-y-10 fade-in-up">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1]" style={{ 
                  color: '#FFFFFF',
                  fontFamily: 'Rajdhani, sans-serif',
                }}>
                  We Build Next-Gen<br />
                  <span style={{ color: '#007BFF' }}>Smart</span>, Connected,<br />
                  <span style={{ color: '#E60000' }}>Ultra-Low-Power</span><br />
                  Electronic Products
                </h2>
                
                <p className="text-xl md:text-2xl leading-relaxed max-w-3xl border-l-4 pl-6 border-[#007BFF] text-gray-200" style={{ 
                  fontFamily: 'IBM Plex Sans, sans-serif',
                }}>
                  We design, build, and scale next-generation embedded systems, connected platforms, and intelligent devices with industry standard compliance from concept to production.
                </p>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 pt-4 md:pt-8">
                <a
                  href="#contact"
                  className="px-8 py-5 text-lg font-bold flex items-center justify-center space-x-3 transition-all duration-300 shadow-[0_0_20px_rgba(230,0,0,0.4)] hover:shadow-[0_0_40px_rgba(230,0,0,0.6)] group rounded-sm hover:-translate-y-1"
                  style={{
                    backgroundColor: '#E60000',
                    color: '#FFFFFF',
                    fontFamily: 'Rajdhani, sans-serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  <MessageSquare size={24} />
                  <span>TALK TO OUR EXPERTS</span>
                </a>

                <a
                  href="mailto:info@valliam.com"
                  className="px-8 py-5 text-lg font-bold flex items-center justify-center space-x-3 transition-all duration-300 hover:bg-white hover:text-black rounded-sm group hover:-translate-y-1"
                  style={{
                    border: '2px solid #FFFFFF',
                    color: '#FFFFFF',
                    fontFamily: 'Rajdhani, sans-serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  <Mail size={24} />
                  <span>EMAIL US</span>
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block lg:col-span-3"></div>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{
          background: 'linear-gradient(90deg, #E60000 0%, #007BFF 50%, #E60000 100%)'
        }}></div>
      </section>

      {/* =========================================
          2. WHO WE ARE
      ========================================= */}
      <WhoWeAre />

      {/* =========================================
          3. TECHNOLOGY SOLUTIONS
      ========================================= */}
      <TechSolutions />

      {/* =========================================
          4. WHY CHOOSE US
      ========================================= */}
      <WhyChooseUs />

      {/* =========================================
          5. ENGINEERING SOLUTIONS
      ========================================= */}
      <EngineeringSolutions />

      {/* =========================================
          6. ENGAGEMENT MODELS
      ========================================= */}
      <EngagementModels />

    </main>
  );
}