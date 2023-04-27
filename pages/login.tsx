import React from "react";
import logo from "../src/images/mindmeetlogo.png";
import Image from "next/image";
import Link from "next/link";
const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      <div
        className="w-1/2 bg-cover bg-center bg-"
        style={{ backgroundImage: "url('')" }}
      >
        <div className="flex justify-center items-center h-full bg-slate-200">
          <div className="text-center">
            <Image alt="mindmeetlogo" src={logo} />
            <h1 className="text-4xl text-black mb-6">Welcome to Mind Meet</h1>
            <p className="text-xl text-black">Please login to start</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <form className="w-96">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded mb-6"
          >
            Login
          </button>
          <div className="flex flex-col gap-4 mt-8 justify-between items-center">
            <button
              type="button"
              className="bg-red-500 w-full  text-white px-4 py-2 rounded"
            >
              Login with Google
            </button>
            <button
              type="button"
              className="bg-blue-800 w-full text-white px-4 py-2 rounded"
            >
              Login with Facebook
            </button>
          </div>

          <div className="flex flex-col gap-4 mt-8 justify-between items-center ">
            <Link href={"/signup"}>
              <p className=" text-xl underline">or juin us</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
