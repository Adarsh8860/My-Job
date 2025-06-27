import React from 'react';

const About = () => {
  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-white to-red-500 text-transparent bg-clip-text drop-shadow-lg">
          About Us
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-16">
          At <span className="font-semibold text-white">Open Jobs</span>, we believe opportunity should be accessible, discoverable, and tailored to you. We're a modern job platform built to connect seekers with employers—faster, smarter, and easier.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 hover:border-pink-500 transition-all duration-300 shadow-lg">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Our Mission</h3>
            <p className="text-gray-300">
              To bridge the gap between talent and companies by delivering a streamlined, intelligent job-matching experience. We help professionals grow and businesses thrive.
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 hover:border-pink-500 transition-all duration-300 shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">What We Offer</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Smart job matching algorithms</li>
              <li>Verified job listings and employers</li>
              <li>Mobile-first experience</li>
              <li>Career development tools</li>
              <li>Diversity-first hiring practices</li>
            </ul>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 hover:border-pink-500 transition-all duration-300 shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Our Vision</h3>
            <p className="text-gray-300">
              To be the go-to career partner for individuals and the most reliable hiring ally for organizations—worldwide.
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 hover:border-pink-500 transition-all duration-300 shadow-lg">
            <h3 className="text-xl font-semibold text-green-400 mb-2">Why Choose Us?</h3>
            <p className="text-gray-300">
              From resume-building tips to real-time job alerts, we provide everything you need to take control of your career journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
