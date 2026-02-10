import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import profilePic from 'figma:asset/4d3a20915779a0aa9be4b813fd1f75dbed9f11b3.png';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col font-sans">
      {/* Top Banner */}
      <div className="bg-[#ff4d00] text-white text-center py-2.5 px-4">
        <p className="font-serif italic text-sm sm:text-base tracking-wide whitespace-nowrap overflow-hidden text-ellipsis leading-none">
          Bootstrapped to $100M+ in revenue. It's time to share how.
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo / Profile */}
            <Link to="/" className="flex items-center group">
              <div className="relative mr-3 overflow-hidden rounded-full border-2 border-orange-100 group-hover:border-orange-600 transition-colors">
                <img 
                  src={profilePic} 
                  alt="Jeremy Cabral" 
                  className="w-10 h-10 object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none text-gray-900 group-hover:text-orange-600 transition-colors">
                  Jeremy Cabral
                </span>
                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mt-1 group-hover:text-orange-500 transition-colors">
                  Growth Advisor
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/about" className="text-gray-700 font-medium hover:text-orange-600 transition-colors">About</Link>
              <Link to="/coaching" className="text-gray-700 font-medium hover:text-orange-600 transition-colors">Advisory</Link>
              <Link to="/case-studies" className="text-gray-700 font-medium hover:text-orange-600 transition-colors">Results</Link>
              <Link to="/speaking" className="text-gray-700 font-medium hover:text-orange-600 transition-colors">Speaking</Link>
              <Link to="/media" className="text-gray-700 font-medium hover:text-orange-600 transition-colors">Media</Link>
              <Link to="/blog" className="text-gray-700 font-medium hover:text-orange-600 transition-colors">Blog</Link>
              <Link to="/newsletter" className="text-gray-700 font-medium hover:text-orange-600 transition-colors">Newsletter</Link>
              
              <Link 
                to="/apply" 
                className="px-6 py-2.5 bg-gray-900 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Work with Me
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col gap-4">
                <Link to="/about" className="text-lg font-medium text-gray-700 hover:text-orange-600 px-2" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link to="/coaching" className="text-lg font-medium text-gray-700 hover:text-orange-600 px-2" onClick={() => setMobileMenuOpen(false)}>Advisory</Link>
                <Link to="/case-studies" className="text-lg font-medium text-gray-700 hover:text-orange-600 px-2" onClick={() => setMobileMenuOpen(false)}>Results</Link>
                <Link to="/speaking" className="text-lg font-medium text-gray-700 hover:text-orange-600 px-2" onClick={() => setMobileMenuOpen(false)}>Speaking</Link>
                <Link to="/media" className="text-lg font-medium text-gray-700 hover:text-orange-600 px-2" onClick={() => setMobileMenuOpen(false)}>Media</Link>
                <Link to="/blog" className="text-lg font-medium text-gray-700 hover:text-orange-600 px-2" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                <Link to="/newsletter" className="text-lg font-medium text-gray-700 hover:text-orange-600 px-2" onClick={() => setMobileMenuOpen(false)}>Newsletter</Link>
                
                <Link 
                  to="/apply" 
                  className="mt-2 w-full flex justify-center py-3 bg-orange-600 text-white rounded-xl font-bold text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work with Me
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
