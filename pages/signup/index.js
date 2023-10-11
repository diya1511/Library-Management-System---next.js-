'use client';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
export default function signup() {
  const [user, setUser] = useState({ email: '', password: '', name: '' });

  const router = useRouter();
  const SignUp = async (e) => {
    e.preventDefault();
    if (
      user.email.length == 0 ||
      user.password.length == 0 ||
      user.name.length == 0
    ) {
      return toast.error('Please fill all the fields below');
    }

    try {
      const res = await axios.post(
        'https://library-management-system-next-6ifgyqxl0-diya1511.vercel.app/api/users/signup',
        user
      );
      toast.success('User created Successfully', res.name);
      router.push('/login');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">Logo</h1>
        <form className="mt-6">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={user.email}
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="username"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-2">
            <button
              onClick={SignUp}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Signin
            </button>
          </div>
        </form>

        <p className="mt-4 text-sm text-center text-gray-700">
          Login to your account
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
