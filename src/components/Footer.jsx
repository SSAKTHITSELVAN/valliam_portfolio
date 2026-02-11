// src/components/Footer.jsx
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-16" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Border Accent */}
        <div className="h-1 mb-12" style={{
          background: 'linear-gradient(90deg, #E60000 0%, #007BFF 50%, #E60000 100%)'
        }}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-2" style={{ 
              color: '#E60000',
              fontFamily: 'Rajdhani, sans-serif',
              letterSpacing: '-0.02em'
            }}>
              VALLIAM
            </h3>
            <p className="text-sm mb-6" style={{ 
              color: '#007BFF',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '0.1em'
            }}>
              Technical Centre
            </p>
            <p className="mb-6" style={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontFamily: 'IBM Plex Sans, sans-serif',
              lineHeight: '1.7'
            }}>
              Precision industrial engineering solutions from POC to production, specializing in Edge AI and Next-Gen Mobility.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border-2 transition-all duration-300"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'rgba(255, 255, 255, 0.7)',
                    borderRadius: '2px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#007BFF';
                    e.currentTarget.style.color = '#007BFF';
                    e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6" style={{ 
              color: '#FFFFFF',
              fontFamily: 'Rajdhani, sans-serif'
            }}>
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {['Home', 'Company', 'Technology Solutions', 'Engineering Services', 'Career'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center space-x-2 group transition-all duration-300"
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontFamily: 'IBM Plex Sans, sans-serif'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#007BFF';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowRight size={14} />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6" style={{ 
              color: '#FFFFFF',
              fontFamily: 'Rajdhani, sans-serif'
            }}>
              CORE SERVICES
            </h4>
            <ul className="space-y-3">
              {['Edge AI', 'IoT Cloud', 'Autosar', 'Digital Twins', 'FuSa Compliance', 'ECU Software'].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="flex items-center space-x-2 group transition-all duration-300"
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontFamily: 'IBM Plex Sans, sans-serif'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#007BFF';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowRight size={14} />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6" style={{ 
              color: '#FFFFFF',
              fontFamily: 'Rajdhani, sans-serif'
            }}>
              GET IN TOUCH
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 flex items-center justify-center" style={{
                  backgroundColor: 'rgba(0, 123, 255, 0.1)',
                  borderRadius: '2px'
                }}>
                  <Mail size={18} style={{ color: '#007BFF' }} />
                </div>
                <a
                  href="mailto:info@valliam.com"
                  className="transition-colors duration-300"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontFamily: 'IBM Plex Sans, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007BFF'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  info@valliam.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 flex items-center justify-center" style={{
                  backgroundColor: 'rgba(0, 123, 255, 0.1)',
                  borderRadius: '2px'
                }}>
                  <Phone size={18} style={{ color: '#007BFF' }} />
                </div>
                <a
                  href="tel:+1234567890"
                  className="transition-colors duration-300"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontFamily: 'IBM Plex Sans, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007BFF'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{
                  backgroundColor: 'rgba(0, 123, 255, 0.1)',
                  borderRadius: '2px'
                }}>
                  <MapPin size={18} style={{ color: '#007BFF' }} />
                </div>
                <span style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: 'IBM Plex Sans, sans-serif'
                }}>
                  123 Business St, City, Country
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t pt-8 mt-8" style={{ 
          borderTopColor: 'rgba(255, 255, 255, 0.1)' 
        }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm" style={{ 
              color: 'rgba(255, 255, 255, 0.5)',
              fontFamily: 'IBM Plex Sans, sans-serif'
            }}>
              &copy; {currentYear} Valliam Technical Centre and Services Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition-colors duration-300"
                  style={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontFamily: 'IBM Plex Sans, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#007BFF'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.5)'}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px flex-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
            <p className="text-xs font-bold" style={{ 
              color: '#007BFF',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '0.15em'
            }}>
              PRECISION INDUSTRIAL ENGINEERING
            </p>
            <div className="h-px flex-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
          </div>
        </div>
      </div>
    </footer>
  );
}