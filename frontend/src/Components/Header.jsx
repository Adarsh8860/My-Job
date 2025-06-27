import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
      <header className="bg-[#111827] bg-opacity-95 shadow-md text-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row mt-0 items-center">
          <NavLink to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/5941dba2b3db2bab435fa5a7/c47baec4-8fde-4e41-a2f8-7bb6fe0ac913/hiring+icon.png" 
              alt="Open Job Logo" 
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-3 text-xl">Open Job</span>
          </NavLink>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to="/" className="mr-5 hover:text-indigo-400">Home</NavLink>
            <NavLink to="/postjobs" className="mr-5 hover:text-indigo-400">Jobs</NavLink>
            <NavLink to="/about" className="mr-5 hover:text-indigo-400">About</NavLink>
            <NavLink to="/contact" className="mr-5 hover:text-indigo-400">Contact Us</NavLink>
            <NavLink to="/service" className="mr-5 hover:text-indigo-400">Service</NavLink>
          </nav>

          <NavLink 
            to="/login" 
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-500 border-0 py-1 px-3 rounded text-white text-base mt-4 md:mt-0"
          >
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NavLink>
        </div>
      </header>
  );
};
