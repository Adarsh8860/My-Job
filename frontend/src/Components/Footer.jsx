import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#111827] bg-opacity-95 shadow-md text-white border-blue">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img 
            src="https://images.squarespace-cdn.com/content/v1/5941dba2b3db2bab435fa5a7/c47baec4-8fde-4e41-a2f8-7bb6fe0ac913/hiring+icon.png" 
            alt="Open Job Logo" 
            className="w-10 h-10 rounded-full"
          />
            <span className="ml-3 text-xl hover:text-gray-300">Open job</span>
          </a>
          <p className="mt-2 text-sm text-gray-400">The Open Job App provides a variety of services designed to help both job seekers and employers achieve their goals efficiently.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-2sm mb-3 text-gray-300">Users/Jobseekers</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-400 hover:text-indigo-400 cursor-pointer">Companies</a></li>
              <li><a className="text-gray-400 hover:text-indigo-400 cursor-pointer">Reviews</a></li>
              <li><a className="text-gray-400 hover:text-indigo-400 cursor-pointer">Salaries</a></li>
              <li><a className="text-gray-400 hover:text-indigo-400 cursor-pointer">Jobs</a></li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-2sm mb-3 text-gray-300">Employers</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-400 hover:text-indigo-400 cursor-pointer">Create a new company</a></li>
              <li><a className="text-gray-400 hover:text-indigo-400 cursor-pointer">Update company information</a></li>
              <li><a className="text-gray-400 hover:text-indigo-400 cursor-pointer">Respond to reviews</a></li>
              <li><a className="text-gray-400 hover:text-indigo-400 cursor-pointer">Invite employees to review</a></li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-2sm mb-3 text-gray-300">Open jobs</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-400 hover:text-indigo-400 cursor-pointer">About Us</a></li>
              <li><a className="text-gray-400 hover:text-indigo-400 cursor-pointer">Contact Us</a></li>
              <li><a className="text-gray-400 hover:text-indigo-400 cursor-pointer">FAQ</a></li>
              <li><a className="text-gray-400 hover:text-indigo-400 cursor-pointer">Services</a></li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-2sm mb-3 text-gray-300">Terms & Policies</h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-400 hover:text-indigo-400 cursor-pointer">Privacy</a></li>
              <li><a className="text-gray-400 hover:text-indigo-400 cursor-pointer">Grievances</a></li>
              <li><a className="text-gray-400 hover:text-indigo-400 cursor-pointer">Terms of Use</a></li>
              <li><a className="text-gray-400 hover:text-indigo-400 cursor-pointer">Community Guidelines</a></li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-[#111827] bg-opacity-95 shadow-md text-white border-t border-gray-700">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row text-gray-400 text-sm">
          <p className="text-center sm:text-left">© 2025 Open jobs 
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-indigo-400 ml-1" target="_blank">@knyttneve</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start space-x-4">
            <a className="text-gray-400 hover:text-indigo-400 cursor-pointer" aria-label="Facebook">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-400 hover:text-indigo-400 cursor-pointer" aria-label="Twitter">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-400 hover:text-indigo-400 cursor-pointer" aria-label="Instagram">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="text-gray-400 hover:text-indigo-400 cursor-pointer" aria-label="LinkedIn">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
