import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MessageSquare } from 'lucide-react';
import logoImage from '../assets/logo_in_black_in_home_page_part_2.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Updated Order: Home, Tech, Eng, Company, Career
  const navData = [
    { name: 'Home', href: '#home' },
    {
      name: 'Technology Solution',
      children: [
        'Edge AI', 'Low Power AI', 'IoT', 'Connectivity', 'Smart HMI',
        'Cybersecurity', 'FuSa', 'Digital Twins', 'Next-Gen Mobility'
      ]
    },
    {
      name: 'Engineering Services',
      children: [
        'POC', 'Embedded Platform', 'HMI/UI', 'Linux/Android/RTOS Porting',
        'Autosar', 'ECU Software Platform', 'IoT Cloud', 'FOTA',
        'Mobile App (Android/iOS)', 'Process Compliance',
        'Verification and Validation', 'R&D/Co-Innovation Lab', 'End-of-Line'
      ]
    },
    { name: 'Company', href: '/company' },
    { name: 'Career', href: '#career' }
  ];

  return (
    <nav className="navbar sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
      
      {/* Top Colorful Border Accent */}
      <div className="h-1 w-full" style={{
        background: 'linear-gradient(90deg, #E60000 0%, #007BFF 50%, #E60000 100%)'
      }}></div>

      {/* Main Content Container - Reduced padding to py-4 */}
      <div className="max-w-[1440px] mx-auto px-6 py-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4 cursor-pointer group flex-shrink-0">
            <img
              src={logoImage}
              alt="Valliam Logo"
              className="w-16 h-16 object-contain" 
            />
            <div className="flex flex-col justify-center">
              <span className="text-3xl font-bold tracking-tight leading-none" style={{ 
                color: '#E60000',
                fontFamily: 'Rajdhani, sans-serif'
              }}>
                VALLIAM
              </span>
              <p className="text-sm font-medium tracking-wide text-gray-600 leading-tight" style={{ 
                fontFamily: 'IBM Plex Sans, sans-serif'
              }}>
                Technical Centre
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-6">
            {navData.map((item) => (
              <div 
                key={item.name} 
                className="relative group h-20 flex items-center"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center gap-1 px-3 py-2 text-[20px] font-bold transition-all duration-300 rounded hover:bg-gray-50" 
                    style={{
                      color: activeDropdown === item.name ? '#007BFF' : '#000000',
                      fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                    {item.name}
                    <ChevronDown size={20} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a 
                    href={item.href} 
                    className="px-3 py-2 text-[20px] font-bold transition-all duration-300 rounded relative group"
                    style={{
                      color: '#000000',
                      fontFamily: 'IBM Plex Sans, sans-serif'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#007BFF'}
                    onMouseLeave={(e) => e.target.style.color = '#000000'}
                  >
                    {item.name}
                    <span className="absolute bottom-4 left-3 right-3 h-0.5 bg-[#007BFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <div className={`absolute top-full left-0 w-80 bg-white shadow-2xl transition-all duration-200 ease-in-out transform origin-top ${
                    activeDropdown === item.name 
                      ? 'opacity-100 scale-y-100 visible' 
                      : 'opacity-0 scale-y-95 invisible'
                  }`}
                  style={{
                    borderTop: '3px solid #007BFF',
                    borderRadius: '0 0 4px 4px'
                  }}>
                    <div className="py-2">
                      {item.children.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-6 py-3 text-base font-medium transition-all duration-200 border-l-4 border-transparent hover:bg-gray-50 hover:border-[#007BFF] hover:text-[#007BFF]"
                          style={{
                            color: '#333333',
                            fontFamily: 'IBM Plex Sans, sans-serif'
                          }}
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* "Contact Us" - Styled as Unique CTA Button */}
            <a 
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 ml-4 text-[18px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg rounded relative overflow-hidden group"
              style={{
                backgroundColor: '#E60000',
                fontFamily: 'Rajdhani, sans-serif'
              }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                <MessageSquare size={20} />
                <span>CONTACT US</span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(true)} 
              className="p-2 transition-colors hover:text-[#007BFF]"
              style={{ color: '#000000' }}
            >
              <Menu size={36} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      <div 
        className={`fixed inset-0 z-[60] bg-white transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
             <div className="flex items-center gap-3">
                <img src={logoImage} alt="Logo" className="w-12 h-12 object-contain" />
                <span className="text-2xl font-bold tracking-tight text-[#E60000]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>MENU</span>
             </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 text-gray-500 hover:text-black transition-colors"
            >
              <X size={36} strokeWidth={2} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-8 px-6">
            <div className="flex flex-col space-y-4">
              {navData.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-none pb-4">
                  {item.children ? (
                    <div>
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="w-full flex justify-between items-center py-2 text-2xl font-bold text-black"
                        style={{ fontFamily: 'Rajdhani, sans-serif' }}
                      >
                        {item.name}
                        <ChevronDown 
                          size={24} 
                          className={`transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180 text-[#007BFF]' : ''
                          }`}
                        />
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          activeDropdown === item.name ? 'max-h-[800px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="flex flex-col space-y-3 pl-4 border-l-2 border-[#007BFF] ml-2 my-2">
                          {item.children.map((subItem) => (
                            <a 
                              key={subItem} 
                              href="#" 
                              onClick={() => setIsOpen(false)}
                              className="text-lg font-medium text-gray-600 hover:text-[#007BFF]"
                              style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-2xl font-bold text-black hover:text-[#007BFF]"
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 w-full py-4 mt-4 text-xl font-bold text-white rounded shadow-lg bg-[#E60000]"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                <MessageSquare size={24} />
                <span>CONTACT US</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}