import Image from "next/image";
import React, { useState } from "react";
import logo from "../src/images/mindmeetlogo.png";
import Link from "next/link";

const SignupPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="min-h-screen flex">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('path/to/your/background/image.jpg')" }}
      >
        <div className="flex justify-center items-center h-full bg-slate-200">
          <div className="text-center">
            <Image alt="mindmeetlogo" src={logo} />
            <h1 className="text-4xl text-black mb-6">Welcome to Mind Meet</h1>
            <p className="text-xl text-black">
              SignUp with your information to start
            </p>
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
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex items-center mb-6">
            <input type="checkbox" id="agree" className="mr-2" />
            <label htmlFor="agree" className="text-gray-700 text-sm">
              I agree to the{" "}
              <span
                onClick={toggleModal}
                className="text-blue-600 cursor-pointer"
              >
                policies
              </span>
              .
            </label>
          </div>
          <Link href={"/completeinfo"}>
            <button className="w-full bg-blue-600 text-white py-2 rounded">
              Sign up
            </button>
          </Link>

          <div className="flex flex-col gap-4 mt-8 justify-between items-center ">
            <Link href={"/login"}>
              <p className=" text-xl underline">
                {" "}
                already have an account login{" "}
              </p>
            </Link>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 p-6 rounded shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl text-gray-800">Policies</h2>
              <button
                onClick={toggleModal}
                className="text-gray-600 hover:text-gray-800"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="text-gray-700 overflow-y-auto max-h-72">
              {/* Replace with the actual policies text */}
              <p>Bla bla bla bla policies</p>
            </div>
          </div>
          <div
            className="fixed inset-0 bg-black opacity-10"
            onClick={toggleModal}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
