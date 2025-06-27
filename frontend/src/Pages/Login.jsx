import React, { useState } from 'react'; // ⛔ You forgot to import useState!
import { useNavigate, NavLink } from 'react-router-dom'; // ⛔ Use `useNavigate` instead of `Navigate`
import { toast } from 'react-toastify'; // ✅ Make sure this is imported
import axiosClient from '../Utils/Utils';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ Correct hook to navigate

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post('/Login', {
        email,
        password
      });
      const data = response.data;

      if (data.data === 'success') {
        toast.success(data?.msg || 'Login successfully');
        navigate('/'); // ✅ Proper navigation after successful login
      } else {
        toast.error(data?.msg || 'Login failed');
      }
    } catch (error) {
      toast.error(error.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-xl p-8">
        <div className="flex flex-col items-center">
          <img
            className="h-20 w-auto mb-4"
            src="https://images.squarespace-cdn.com/content/v1/5941dba2b3db2bab435fa5a7/c47baec4-8fde-4e41-a2f8-7bb6fe0ac913/hiring+icon.png"
            alt="Your Company"
          />
          <h2 className="text-2xl font-bold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={submitHandler}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              onChange={(e) => setEmail(e.target.value)} // ✅ Update email state
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              onChange={(e) => setPassword(e.target.value)} // ✅ Update password state
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500 font-medium">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Not a member?{' '}
          <NavLink to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            Register here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
