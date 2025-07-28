import React, { useState } from 'react'
import Logo from '../img/logo.png';
import SupIcon from '../img/supporticon.png';
import {Link} from 'react-router-dom';

function Header({ activeIndex = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Quickstart', path: '/docs' },
    { label: 'Examples', path: '/examples' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: 'mailto:zine.falouti@gmail.com' }, // external link or route
  ];

  return (
    <div className="Header">
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-6 lg:col-span-4 xl:col-span-2">
          <Link to="/"><img src={Logo} alt="Logo" className="Logo" /></Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:col-span-6 xl:col-span-8 justify-center">
          <ul className="flex space-x-6">
            {menuItems.map((item, index) => (
              <li key={index} className={index === activeIndex ? 'Active' : ''}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Button (Desktop) */}
        <div className="hidden lg:block lg:col-span-2">
          <a href="https://paypal.me/zinefalouti" target="_blank" rel="noopener noreferrer">
          <button>
            Donate
            <img src={SupIcon} alt="Support Icon"/>
          </button>
          </a>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="lg:hidden col-span-2 col-start-11 text-right">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen 
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-2 MobileMenu">
          <ul className="flex flex-col space-y-2">
            {menuItems.map((item, index) => (
              <li key={index} className={index === activeIndex ? 'Active' : ''}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
            <li>
              <a href="https://paypal.me/zinefalouti" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded">
                Donate
                <img src={SupIcon} alt="Support Icon"/>
              </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header
