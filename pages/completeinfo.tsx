import React, { useState } from "react";
import logo from "../src/images/mindmeetlogo.png";
import Image from "next/image";

const Index: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  return (
    <div className="min-h-screen flex">
      <div
        className="w-1/2 bg-cover bg-center bg-slate-200"
        style={{ backgroundImage: "url('path/to/your/background/image.jpg')" }}
      >
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <Image alt="mindmeetlogo" src={logo} />
            <h1 className="text-4xl text-black mb-6">Welcome to Mind Meet</h1>
            <p className="text-xl text-black">Almost there</p>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center">
        {step === 2 && (
          <>
            <h2 className="text-2xl mb-4">Step 2: Select your gender</h2>
            <form
              className="w-96"
              onSubmit={(e) => {
                e.preventDefault();
                nextStep();
              }}
            >
              <div className="flex justify-around mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Next
              </button>
            </form>
          </>
        )}
        {step === 3 && (
          <>
            <h2 className="text-2xl mb-4">Step 3: Select your date of birth</h2>
            <form
              className="w-96"
              onSubmit={(e) => {
                e.preventDefault();
                nextStep();
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="dateOfBirth"
                  className="block text-gray-700 mb-2"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Next
              </button>
            </form>
          </>
        )}
        {step === 1 && (
          <>
            <h2 className="text-2xl mb-4">Step 1: Provide your home address</h2>
            <form
              className="w-96"
              onSubmit={(e) => {
                e.preventDefault();
                nextStep();
              }}
            >
              <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="addressCountry"
                  className="block text-gray-700 mb-2"
                >
                  Country
                </label>
                <select
                  id="country"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                >
                  {/* Add your list of countries here */}
                  <option value="usa">United States</option>
                  <option value="canada">Canada</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="zipCode" className="block text-gray-700 mb-2">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="state" className="block text-gray-700 mb-2">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="homePhone" className="block text-gray-700 mb-2">
                  Home Phone
                </label>
                <input
                  type="tel"
                  id="homePhone"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Next
              </button>
            </form>
          </>
        )}
        {step === 4 && (
          <>
            <h2 className="text-2xl mb-4">Step 4: Verify your phone number</h2>
            <form
              className="w-96"
              onSubmit={(e) => {
                e.preventDefault();
                nextStep();
              }}
            >
              <div className="mb-4">
                <label htmlFor="otp" className="block text-gray-700 mb-2">
                  Enter the OTP received on your phone
                </label>
                <input
                  type="text"
                  id="otp"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Next
              </button>
            </form>
          </>
        )}
        {step === 5 && (
          <>
            <h2 className="text-2xl mb-4">Step 4: Verify your Email</h2>
            <form
              className="w-96"
              onSubmit={(e) => {
                e.preventDefault();
                nextStep();
              }}
            >
              <div className="mb-4">
                <label htmlFor="otp" className="block text-gray-700 mb-2">
                  Enter the code received on your Email
                </label>
                <input
                  type="text"
                  id="otp"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Finish
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
