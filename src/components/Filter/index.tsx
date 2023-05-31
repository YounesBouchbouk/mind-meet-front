/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const Index = (props: Props) => {
  const [gender] = useState(["male", "female"]);
  const [categories] = useState([
    "stress",
    "anxiety",
    "depression",
    "relationships",
    "self-esteem",
  ]);

  const variantsRightToLeft = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 50 },
  };

  return (
    <motion.div
      initial="hidden"
      transition={{ duration: 1, delay: 0.3 }}
      animate="visible"
      variants={variantsRightToLeft}
      className="w-full p-2"
    >
      <div className="w-full flex gap-3 justify-start  items-center py-4 border-b-2">
        {gender.map((gr) => {
          return (
            <p
              key={gr}
              className="min-w-[100px]  hover:bg-gray-100 cursor-pointer rounded-2xl font-bold text-center py-2 bg-gray-200 text-small"
            >
              {gr}
            </p>
          );
        })}
      </div>

      <div className="w-full flex flex-wrap gap-3 justify-start  items-center py-4 border-b-2">
        {categories.map((cat) => {
          return (
            <p
              key={cat}
              className="min-w-[100px] hover:bg-gray-100 font-bold cursor-pointer rounded-2xl text-center py-2 bg-gray-200 text-small"
            >
              {cat}
            </p>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Index;
