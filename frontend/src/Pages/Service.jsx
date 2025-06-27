import React from 'react';

const services = [
  {
    title: 'Smart Job Matching',
    description: 'AI-based recommendations that match you to jobs faster.',
    icon: (
      <svg
        className="w-10 h-10 text-purple-400 group-hover:scale-110 transition"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
      </svg>
    ),
  },
  {
    title: 'Resume Builder',
    description: 'Design professional resumes in minutes.',
    icon: (
      <svg
        className="w-10 h-10 text-blue-400 group-hover:scale-110 transition"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16" />
      </svg>
    ),
  },
  {
    title: 'Verified Listings',
    description: 'Only real, trusted job listings from top employers.',
    icon: (
      <svg
        className="w-10 h-10 text-green-400 group-hover:scale-110 transition"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Career Guidance',
    description: 'Mentorship, tips, and advice to help you grow.',
    icon: (
      <svg
        className="w-10 h-10 text-yellow-400 group-hover:scale-110 transition"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" />
      </svg>
    ),
  },
  {
    title: 'Employer Dashboard',
    description: 'Manage postings and applicants with ease.',
    icon: (
      <svg
        className="w-10 h-10 text-pink-400 group-hover:scale-110 transition"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
  },
  {
    title: 'Real-time Notifications',
    description: 'Never miss an opportunity with instant alerts.',
    icon: (
      <svg
        className="w-10 h-10 text-red-400 group-hover:scale-110 transition"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405M19 13v-3a7 7 0 00-14 0v3l-1.405 1.405L5 17h5m0 0v1a3 3 0 006 0v-1m-6 0h6" />
      </svg>
    ),
  },
];

const Service = () => {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 via-white -500 to-red-500 text-transparent bg-clip-text drop-shadow-lg">
          Our  Services
        </h2>
        <p className="text-center text-gray-300 max-w-xl mx-auto mb-16 text-lg">
          We blend technology, design, and opportunity into one powerful job platform.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 hover:border-pink-500 transition-all duration-300 shadow-lg"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-4 text-center text-white">{service.title}</h3>
              <p className="text-gray-300 text-sm text-center mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
