// import { Routes, Route } from 'react-router-dom';
// import { Mail, MessageSquare } from 'lucide-react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Company from './pages/Company'; // Import the new page

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col relative">
//       <Navbar />
      
//       {/* Route Container: Determines which page to show */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/company" element={<Company />} />
//       </Routes>

//       <Footer />

//       {/* Fixed Right-Side Action Buttons (Visible on all pages) */}
//       <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
//         {/* Email Button */}
//         <a 
//           href="mailto:info@valliam.com" 
//           className="group flex items-center justify-end"
//           title="Send us an email"
//         >
//           <span className="mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
//             Email Us
//           </span>
//           <div className="w-14 h-14 bg-[#007BFF] text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-110 hover:bg-blue-600">
//             <Mail size={24} />
//           </div>
//         </a>

//         {/* Text/Chat Button */}
//         <a 
//           href="#contact" 
//           className="group flex items-center justify-end"
//           title="Talk to our experts"
//         >
//           <span className="mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
//             Chat with Expert
//           </span>
//           <div className="w-14 h-14 bg-[#E60000] text-white rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-110 hover:bg-red-700 animate-bounce-subtle">
//             <MessageSquare size={24} />
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default App;
import { Routes, Route } from 'react-router-dom';
import { Mail, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Company from './pages/Company';
import EdgeAI from './pages/EdgeAI'; // New Import
import LowPowerAI from './pages/LowPowerAI';
import IoT from './pages/IoT';
import Connectivity from './pages/Connectivity';
import SmartHMI from './pages/SmartHMI';
import Cybersecurity from './pages/Cybersecurity';
import FuSa from './pages/FuSa';
import DigitalTwins from './pages/DigitalTwins';
import NextGenMobility from './pages/NextGenMobility';
// src/App.jsx
import POC from './pages/POC'; // Ensure Autosar.jsx exists in src/pages/

import ECUSoftwarePlatform from './pages/ECUSoftwarePlatform';
import HmiUiEngineering from './pages/HmiUiEngineering';
import Autosar from './pages/Autosar';
import IoTCloud from './pages/IoTCloud';
// import Autosar from './pages/Autosar';
import LinuxAndroidRTOS from './pages/LinuxAndroidRTOS';
import EmbeddedPlatform from './pages/EmbeddedPlatform';
import FOTA from './pages/FOTA';
import MobileApp from './pages/MobileApp';
import ProcessCompliance from './pages/ProcessCompliance';
import VerificationValidation from './pages/VerificationValidation';
import RnDCoInnovation from './pages/RnDCoInnovation';
import EOL from './pages/EOL';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/edge-ai" element={<EdgeAI />} /> {/* New Route */}
        <Route path="/low-power-ai" element={<LowPowerAI />} /> {/* New Route */}
        <Route path="/iot" element={<IoT />} />
      <Route path="/connectivity" element={<Connectivity />} />
      <Route path="/smart-hmi" element={<SmartHMI />} />
      <Route path="/cybersecurity" element={<Cybersecurity />} />
      <Route path="/fusa" element={<FuSa />} />
      <Route path="/digital-twins" element={<DigitalTwins />} />
      <Route path="/next-gen-mobility" element={<NextGenMobility />} />
      <Route path="/poc" element={<POC />} />
      <Route path="/ecu-software-platform" element={<ECUSoftwarePlatform />} />
      <Route path="/hmi-ui-engineering" element={<HmiUiEngineering />} />
      <Route path="/autosar" element={<Autosar />} />
      <Route path="/iot-cloud" element={<IoTCloud />} />
      <Route path="/linux-android-rtos" element={<LinuxAndroidRTOS />} />
      <Route path="/embedded-platform" element={<EmbeddedPlatform />} />
      <Route path="/fota" element={<FOTA />} />
      <Route path="/mobile-app" element={<MobileApp />} />
      <Route path="/process-compliance" element={<ProcessCompliance />} />
      <Route path="/verification-validation" element={<VerificationValidation />} />
      <Route path="/rnd-co-innovation" element={<RnDCoInnovation />} />
      <Route path="/eol" element={<EOL />} />
      </Routes>

      <Footer />
      

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <a href="mailto:info@valliam.com" className="group flex items-center justify-end">
          <span className="mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Email Us</span>
          <div className="w-14 h-14 bg-[#007BFF] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"><Mail size={24} /></div>
        </a>
        <a href="#contact" className="group flex items-center justify-end">
          <span className="mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Chat</span>
          <div className="w-14 h-14 bg-[#E60000] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"><MessageSquare size={24} /></div>
        </a>
      </div>
    </div>
  );
}

export default App;