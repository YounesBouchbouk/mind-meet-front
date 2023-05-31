import React from "react";
import ActivleCmp from "@components/Articles";
import Filter from "@components/Filter";
import { MainLayout } from "@/layout/Main";
import { ReactElement } from "react";
import { motion } from "framer-motion";

const Articles = () => {
  const variantsRightToLeft = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 50 },
  };

  return (
    <div className="w-full h-screen bg-slate-50 gap-8  flex justify-center items-center px-10 ">
      <div className=" p-4 flex-1 h-screen flex items-start justify-center   overflow-scroll no-scrollbar">
        <ActivleCmp />
      </div>
      <motion.div
        initial="hidden"
        transition={{ duration: 1, delay: 0.3 }}
        animate="visible"
        variants={variantsRightToLeft}
        className="border-l-2 p-4 w-[400px] h-screen"
      >
        <Filter />
      </motion.div>
    </div>
  );
};

export default Articles;

Articles.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
