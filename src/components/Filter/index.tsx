/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

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

  return (
    <div className="w-full p-2">
      <div className="w-full flex gap-3 justify-start  items-center py-4 border-b-2">
        {gender.map((gr) => {
          return (
            <p
              key={gr}
              className="min-w-[100px]  hover:bg-gray-100 cursor-pointer rounded-2xl text-center py-2 bg-gray-200 text-small"
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
              className="min-w-[100px] hover:bg-gray-100 cursor-pointer rounded-2xl text-center py-2 bg-gray-200 text-small"
            >
              {cat}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
