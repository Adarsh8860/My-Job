import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axiosClient from '../Utils/Utils';
import { toast } from 'react-toastify'; // ✅ Ensure you import toast

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post('/signup', {
                name,
                email,
                phone,
                password
            });
            const data = response.data;
            toast.success(data?.msg || 'Signup successful');
        } catch (error) {
            toast.error(error.response?.data?.msg || 'Signup failed');
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
                    <h2 className="text-2xl font-bold text-gray-900">Register your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center bg-indigo-600 text-white px-4 py-2 mb-3 rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                    >
                        Register
                    </button>

                    <p className="text-sm text-center text-gray-600">
                        Already have an account? <NavLink to="/login" className="text-indigo-600 hover:underline">Login</NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
