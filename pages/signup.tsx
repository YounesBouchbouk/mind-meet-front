import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import logo from "@images/logoMindMeet-removebg-preview.png";

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
          <div className="flex flex-col  justify-center items-center h-full bg-f9">
            <p className="text-2xl font-bold text-center px-4 text-mainC2">
              Embrace a new beginning. Sign up and embark on a journey of
              self-care and personal growth, one step at a time.
            </p>
            <div className="text-center">
              <Image alt="mindmeetlogo" src={logo} />
            </div>
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
              <ul>
                <li>
                  Privacy Policy: Outlining how user data is collected, stored,
                  and protected, as well as how it may be used for providing
                  personalized services and improving the user experience.
                </li>
                <li>
                  Terms of Service: Defining the rights, responsibilities, and
                  acceptable use of the platform, including guidelines for user
                  behavior, content sharing, and intellectual property rights.
                </li>
                <li>
                  Cookie Policy: Explaining the use of cookies or similar
                  technologies for tracking user preferences, enhancing website
                  functionality, and delivering targeted advertisements.
                </li>
                <li>
                  Data Retention Policy: Detailing the duration for which user
                  data will be stored, the purpose of retention, and the
                  processes for data deletion or anonymization.
                </li>
                <li>
                  Communication Policy: Describing how the platform may
                  communicate with users, including email notifications,
                  newsletters, or important service updates, and providing
                  options for opting in or out of such communications.
                </li>
                <li>
                  User Conduct Policy: Establishing guidelines for appropriate
                  user behavior, prohibiting harassment, discrimination, or any
                  form of harmful or unlawful activity on the platform.
                </li>
                <li>
                  Refund and Cancellation Policy: Outlining the conditions,
                  procedures, and timelines for refunds or cancellations of any
                  paid services or subscriptions.
                </li>
                <li>
                  Dispute Resolution Policy: Explaining the methods for
                  resolving disputes between the platform and the user, such as
                  mediation, arbitration, or legal proceedings.
                </li>
                <li>
                  Disclaimer of Liability: Clarifying that the platform is not
                  responsible for any damages, losses, or liabilities arising
                  from the use of the services or reliance on the provided
                  information.
                </li>
                <li>
                  Modification of Policies: Indicating that the platform
                  reserves the right to update or modify the policies, and
                  informing users about the process of notifying them about any
                  changes made.
                </li>
              </ul>
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
