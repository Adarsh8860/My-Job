import React from 'react';
import { SlCalender } from 'react-icons/sl';
import { CgWorkAlt } from 'react-icons/cg';
import moment from 'moment';
import { FaArrowRightLong } from "react-icons/fa6";

const Jobcards = ({ data, deleteJob }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 bg-gradient-to-r from-blue-50 via-white to-indigo-50 rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src={data.Company_profile_pic}
        alt="Company Logo"
        className="h-12 w-12 rounded-full object-cover"
      />

      <div className="flex flex-col flex-1 w-full">
        <span className="text-sm font-semibold text-gray-900">{data.title}</span>
        <span className="text-xs text-gray-500">{data.Company_name}</span>

        <ul className="flex flex-wrap items-center gap-2 mt-1">
          {data.skills && data.skills.map((cur, i) => (
            <li
              key={i}
              className="text-xs text-gray-700 px-3 py-1 bg-gray-200 rounded-md"
            >
              {cur}
            </li>
          ))}
        </ul>

        <p className="flex items-center gap-x-2 text-sm text-blue-700 py-2">
          <SlCalender />
          <span>{moment(data.extended_date).fromNow()}</span>
        </p>

        <p className="flex items-center gap-x-2 text-sm text-blue-700 py-2">
          <CgWorkAlt />
          <span>{data.Job_type || "Remote"}</span>
        </p>

        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this job?")) {
              deleteJob(data._id);
            }
          }}
          className="text-sm text-red-600 hover:underline"
        >
          Delete
        </button>

        <div className="mt-2 text-end">
          <a href={data.job_url} target="_blank" rel="noopener noreferrer" className="text-indigo-500 inline-flex items-center gap-1">
            Apply <FaArrowRightLong />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jobcards;
