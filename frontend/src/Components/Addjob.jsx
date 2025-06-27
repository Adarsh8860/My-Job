import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import '../App.css';
import Jobcards from './Jobcards';
import { Skills } from '../Utils/Constant';
import { toast } from 'react-toastify';
import axiosClient from '../Utils/Utils';

const Addjob = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [jobs, setJobs] = useState([]);

  const initialStates = {
    title: '',
    skills: [],
    Company_name: '',
    Sallery: '',
    extended_date: '',
    job_url: '',
    Company_profile_pic: '',
    Job_type: '', // Fix: Ensure empty by default
  };

  const validationSchema = yup.object({
    title: yup.string().required('Title is required'),
    skills: yup.array().min(1, 'Select at least one skill').required('Skills are required'),
    Company_name: yup.string().required('Company name is required'),
    Sallery: yup.number().typeError('Salary must be a number').required('Salary is required'),
    extended_date: yup.date().typeError('Invalid date').required('Extended date is required'),
    job_url: yup.string().url('Enter a valid URL').required('Job URL is required'),
    Company_profile_pic: yup.string().url('Enter a valid URL').required('Profile pic URL is required'),
    Job_type: yup.string().required('Job type is required'),
  });

  const fetchJobs = async () => {
    try {
      const response = await axiosClient.get('/jobs');
      setJobs(response.data);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const onSubmitHandler = async (values, helpers) => {
    try {
      console.log("Submitted values:", values); // Debug
      const response = await axiosClient.post('/create', values);
      const data = response.data;
      toast.success(data?.msg || "Job created successfully");
      await fetchJobs();
      helpers.resetForm();
      close();
    } catch (error) {
      toast.error(error.response?.data?.msg || "Error creating job");
    }
  };

  const deleteJob = async (id) => {
    try {
      await axiosClient.delete(`/jobs/${id}`);
      toast.success('Job deleted!');
      await fetchJobs();
    } catch (error) {
      toast.error('Error deleting job');
    }
  };

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <Button onClick={open} className="rounded-sm bg-blue-500 px-3 py-3 ml-3 mt-4 text-sm font-medium text-white">
        Post a new job
      </Button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {jobs.map((cur, i) => (
          <Jobcards key={i} data={cur} deleteJob={deleteJob} />
        ))}
      </div>

      <Dialog open={isOpen} as="div" className="relative z-10" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-5">
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
                initialValues={initialStates}
                validationSchema={validationSchema}
                onSubmit={onSubmitHandler}
              >
                <Form className="space-y-4">
                  <Field name="title" className="w-full p-2 border rounded" placeholder="Enter job title" />
                  <ErrorMessage name="title" component="p" className="text-red-500 text-sm" />

                  <div>
                    <p className="font-medium mb-1">Select Skills</p>
                    {Skills.map((skill, index) => (
                      <label key={index} className="block text-sm mb-1">
                        <Field type="checkbox" name="skills" value={skill} className="mr-2" />
                        {skill}
                      </label>
                    ))}
                    <ErrorMessage name="skills" component="p" className="text-red-500 text-sm" />
                  </div>

                  <Field name="Company_name" className="w-full p-2 border rounded" placeholder="Enter company name" />
                  <ErrorMessage name="Company_name" component="p" className="text-red-500 text-sm" />

                  <Field name="Sallery" className="w-full p-2 border rounded" placeholder="Enter salary" />
                  <ErrorMessage name="Sallery" component="p" className="text-red-500 text-sm" />

                  <Field type="date" name="extended_date" className="w-full p-2 border rounded" />
                  <ErrorMessage name="extended_date" component="p" className="text-red-500 text-sm" />

                  <Field name="job_url" className="w-full p-2 border rounded" placeholder="Enter job URL" />
                  <ErrorMessage name="job_url" component="p" className="text-red-500 text-sm" />

                  <Field name="Company_profile_pic" className="w-full p-2 border rounded" placeholder="Enter company profile pic URL" />
                  <ErrorMessage name="Company_profile_pic" component="p" className="text-red-500 text-sm" />

                  <Field as="select" name="Job_type" className="w-full p-2 border rounded">
                    <option value="">Select Job Type</option>
                    <option value="Full time">Full time</option>
                    <option value="Part time">Part time</option>
                    <option value="Internship">Internship</option>
                    <option value="Freelancer">Freelancer</option>
                  </Field>
                  <ErrorMessage name="Job_type" component="p" className="text-red-500 text-sm" />

                  <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Submit
                  </Button>
                </Form>
              </Formik>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Addjob;
