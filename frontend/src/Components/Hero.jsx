import React from 'react'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const Skills = ['java', 'python', 'React js', 'MySql', 'Node js'];
  
    const initialstates = {
      title: '',
      skills: [],
      Company_name: '',
      Sallery: '',
      extended_date: '',
      job_url: '',
      Company_profile_pic: '',
    };
  
    const validationSchema = yup.object({
      title: yup.string().required('Title is required'),
      skills: yup.array().min(1, 'Select at least one skill').required('Skills are required'),
      Company_name: yup.string().required('Company name is required'),
      Sallery: yup.number().typeError('Salary must be a number').required('Salary is required'),
      extended_date: yup.date().typeError('Invalid date').required('Extended date is required'),
      job_url: yup.string().url('Enter a valid URL').required('Job URL is required'),
      Company_profile_pic: yup.string().url('Enter a valid URL').required('Profile pic URL is required'),
    });
  
    const submithandler = (values, helpers) => {
      try {
        console.log(values);
        setIsOpen(false); // close dialog after submit
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
  
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
  
  return (
    <>
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center" />
  <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}} />
  </div>
  <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}} />
  </div>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Find your Dream Job</h2>
      <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">Find management,IT job opportunities perfect for you.</p>
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="#">Open roles <span aria-hidden="true">→</span></a>
        <a href="#">Internship program <span aria-hidden="true">→</span></a>
        <a href="#">Our values <span aria-hidden="true">→</span></a>
        <a href="#">Meet our leadership <span aria-hidden="true">→</span></a>
      </div>
       <Button  className="rounded-sm bg-blue-500 px-3 mt-8 py-4 ml-45 text-sm font-medium text-white"><NavLink to={'./postjobs'}> Find your  Dream job →</NavLink>
       
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-10" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <DialogTitle as="h3" className="text-lg font-semibold text-gray-900">
                  Post Job
                </DialogTitle>
                <button onClick={close} className="text-gray-500 hover:text-red-500">
                  <ImCross />
                </button>
              </div>

              <Formik
                initialValues={initialstates}
                validationSchema={validationSchema}
                onSubmit={submithandler}
              >
                <Form className="space-y-4">
                  <div>
                    <Field
                      name="title"
                      className="w-full p-2 border rounded"
                      placeholder="Enter job title"
                    />
                    <ErrorMessage name="title" component="p" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <p className="font-medium mb-1">Select Skills</p>
                    {Skills.map((skill, index) => (
                      <label key={index} className="block text-sm mb-1">
                        <Field
                          type="checkbox"
                          name="skills"
                          value={skill}
                          className="mr-2"
                        />
                        {skill}
                      </label>
                    ))}
                    <ErrorMessage name="skills" component="p" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field
                      name="Company_name"
                      className="w-full p-2 border rounded"
                      placeholder="Enter company name"
                    />
                    <ErrorMessage name="Company_name" component="p" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field
                      name="Sallery"
                      className="w-full p-2 border rounded"
                      placeholder="Enter salary"
                    />
                    <ErrorMessage name="Sallery" component="p" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field
                      type="date"
                      name="extended_date"
                      className="w-full p-2 border rounded"
                    />
                    <ErrorMessage name="extended_date" component="p" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field
                      name="job_url"
                      className="w-full p-2 border rounded"
                      placeholder="Enter job URL"
                    />
                    <ErrorMessage name="job_url" component="p" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field
                      name="Company_profile_pic"
                      className="w-full p-2 border rounded"
                      placeholder="Enter company profile pic URL"
                    />
                    <ErrorMessage name="Company_profile_pic" component="p" className="text-red-500 text-sm" />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  >
                    Submit
                  </Button>
                </Form>
              </Formik>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-300">Latest New Job Today</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">15+</dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-300">Full-time Jobs</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">300+</dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-300">Hours per week</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">40</dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-300">Paid time off</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">Unlimited</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
    </>
  )
}

export default Hero