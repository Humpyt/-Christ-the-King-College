import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-indigo-100 py-0'
        : 'bg-white/90 backdrop-blur-sm shadow-lg py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled ? 'h-20' : 'h-36'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <img
                src="/202-01.png"
                alt="Christ the King Nursery Teachers' College Logo"
                className={`object-contain transition-all duration-500 ${
                  isScrolled ? 'h-16 w-16' : 'h-32 w-32'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-amber-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold text-indigo-800 group-hover:text-indigo-900 transition-colors ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>
                Christ the King
              </h1>
              <p className={`text-gray-600 group-hover:text-indigo-600 transition-colors ${
                isScrolled ? 'hidden' : 'text-sm block'
              }`}>
                Nursery Teachers' College
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
                  isActive(item.path)
                    ? 'text-indigo-800 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-800 hover:bg-indigo-50'
                } ${
                  isScrolled ? 'text-sm py-1' : ''
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-amber-500 rounded-full ${
                    isScrolled ? 'w-4 h-0.5' : 'w-6 h-0.5'
                  }`}></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-amber-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-indigo-800 hover:bg-indigo-50 transition-all duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-indigo-100">
          <div className="px-4 py-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 font-medium rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-indigo-800 bg-indigo-50 border-l-4 border-indigo-600'
                    : 'text-gray-700 hover:text-indigo-800 hover:bg-indigo-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;