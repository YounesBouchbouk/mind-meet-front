import React from "react";
import ActivleCmp from "@components/Articles";
import Filter from "@components/Filter";

const Articles = () => {
  return (
    <div className="w-full h-screen bg-slate-50 gap-8  flex justify-center items-center px-10 ">
      <div className=" p-4 flex-1 h-screen flex items-start justify-center   overflow-scroll ">
        <ActivleCmp />
      </div>
      <div className="border-l-2 p-4 w-[400px] h-screen">
        <Filter />
      </div>
    </div>
  );
};

export default Articles;
