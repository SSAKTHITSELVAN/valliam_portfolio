import { Routes, Route } from 'react-router-dom';
import { Mail, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Company from './pages/Company'; // Import the new page

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      
      {/* Route Container: Determines which page to show */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
      </Routes>

      <Footer />

      {/* Fixed Right-Side Action Buttons (Visible on all pages) */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        {/* Email Button */}
        <a 
          href="mailto:info@valliam.com" 
          className="group flex items-center justify-end"
          title="Send us an email"
        >
          <span className="mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
            Email Us
          </span>
          <div className="w-14 h-14 bg-[#007BFF] text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-110 hover:bg-blue-600">
            <Mail size={24} />
          </div>
        </a>

        {/* Text/Chat Button */}
        <a 
          href="#contact" 
          className="group flex items-center justify-end"
          title="Talk to our experts"
        >
          <span className="mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
            Chat with Expert
          </span>
          <div className="w-14 h-14 bg-[#E60000] text-white rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-110 hover:bg-red-700 animate-bounce-subtle">
            <MessageSquare size={24} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;