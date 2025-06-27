import React from 'react';
import '../../App.css'

const Jobs = () => {
  return (
    <>
      {/* Services Section */}
      <div className="bg-[#111827] bg-opacity-95 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-20">
            <h2 className="text-4xl font-bold text-center mb-4"id='vardan'>Our Services</h2>
            <h3 className="text-2xl font-semibold text-center mb-10" id='vardan'>
              We bridge the gap between talent and opportunity
            </h3>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="group relative bg-[#1F2937] p-4 rounded-lg shadow-lg">
                <img
                  src="https://static.toiimg.com/thumb/msid-106098609,width-1280,height-720,resizemode-4/106098609.jpg"
                  alt="Work from home"
                  className="w-full rounded-lg object-cover group-hover:opacity-75 h-60"
                />
                <h3 className="mt-4 text-lg text-purple-400 font-medium"id='vardan'>Job Opportunities</h3>
                <p className="text-base font-semibold"id='vardan'>Work from home opportunities for everyone.</p>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-[#1F2937] p-4 rounded-lg shadow-lg">
                <img
                  src="https://www.manpower.com/-/media/project/manpowergroup/manpower/a-manpower-global/callout-bars/image-wide-callout-bar/man-callout-img-705x436-call-center.jpg"
                  alt="Call Center Job"
                  className="w-full rounded-lg object-cover group-hover:opacity-75 h-60"
                />
                <h3 className="mt-4 text-lg text-purple-400 font-medium" id='vardan'>Self-Improvement</h3>
                <p className="text-base font-semibold"id='vardan'>
                  Easy application process with one-click apply, resume attachment, and more.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-[#1F2937] p-4 rounded-lg shadow-lg">
                <img
                  src="https://jobs.mcarthur.com.au/images/search-for-a-job.jpg"
                  alt="Job Listings"
                  className="w-full rounded-lg object-cover group-hover:opacity-75 h-60"
                />
                <h3 className="mt-4 text-lg text-purple-400 font-medium"id='vardan'>Job Listings</h3>
                <p className="text-base font-semibold"id='vardan'>Browse categorized and up-to-date job listings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Logos & Categories */}
      <section className="py-16 text-center bg-gray-500 ">
        <h1 className="text-4xl font-bold text-white-500 mb-4"id='vardan'>Big opportunities, local jobs</h1>
        <p className="text-color-white-100 text-lg mb-10"id='vardan'>
          From top companies to local businesses, find a job that fits your lifestyle.
        </p>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8 px-4">
          {/* Replace with actual logo images */}
          <img
            src="https://media.assettype.com/outlookbusiness/import/uploadimage/library/16_9/16_9_5/Accenture_1661863817.webp?w=801&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0"
            alt="TCS"
            className="h-25 object-fit-cover"
          />
              <img
            src="https://contentstatic.techgig.com/thumb/msid-115265176,width-800,resizemode-4/TCS-walk-in-drive-for-tech-professionals-on-November-16-in-Bengaluru-and-Chennai-apply-now.jpg?9624"
            alt="TCS"
            className="h-25 object-contain"
          />
          <img
            src="https://1000logos.net/wp-content/uploads/2021/05/Wipro-logo.png"
            alt="Wipro"
            className="h-25 object-contain"
          />
           <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbJ1jbtWkn5faoeIGVyhsg13SRLZmy0agng&s"
            alt="Wipro"
            className="h-25 object-contain"
          />
          <img
            src="data:image/jpeg;base64,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"
            alt="Capgemini"
            className="h-25 object-contain"
          />
          <img
            src="https://www.infosys.com/content/dam/infosys-web/en/about/images/esg-policies.jpg"
            alt="Infosys"
            className="h-25 object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default Jobs;
