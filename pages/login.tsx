import React from "react";
import logo from "@images/logoMindMeet-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const LoginPage: React.FC = () => {
  const variantTopToB = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };

  const variantTopToT = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div className="min-h-screen flex">
      <div
        className="w-1/2 bg-cover bg-center bg-"
        style={{ backgroundImage: "url('')" }}
      >
        <div className="flex flex-col  justify-center items-center h-full bg-f9">
          <motion.p
            initial="hidden"
            transition={{ duration: 1, delay: 0.3 }}
            animate="visible"
            variants={variantTopToB}
            className="text-2xl font-bold text-center px-4 text-mainC2"
          >
            Step into a world of self-discovery and growth. Login to embark on a
            transformative journey towards a healthier mind.
          </motion.p>
          <motion.div
            initial="hidden"
            transition={{ duration: 1, delay: 0.3 }}
            animate="visible"
            variants={variantTopToT}
            className="text-center"
          >
            <Image alt="mindmeetlogo" src={logo} />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        transition={{ duration: 1, delay: 0.3 }}
        animate="visible"
        variants={variantTopToT}
        className="w-1/2 flex justify-center items-center"
      >
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
            // onClick={() => router.push("/")}
            className="w-full bg-blue-600 text-white py-2 rounded mb-6"
          >
            <Link
              href={"/"}
              className="  bg-blue-600 text-white py-2 rounded mb-6"
            >
              Login
            </Link>
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
              <p className=" text-xl underline">or join us</p>
            </Link>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
