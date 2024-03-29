import { ReactElement, useState } from "react";
import { MainLayout } from "@/layout/Main";
import ChatBot from "@components/ChatBot";
import Image from "next/image";
import { motion } from "framer-motion";
import ChatPoster from "@images/ChatPoster.jpg";
export default function Home() {
  const [start, setStart] = useState(false);
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };

  return (
    <>
      <div className=" flex gap-4 justify-center items-center h-screen  ">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-[600px]  h-[700px] -mt-[120px] rounded-lg overflow-hidden"
        >
          <Image
            src={ChatPoster}
            alt="Mental Health Poster"
            style={{ width: "620px", height: "740px" }}
          />
        </motion.div>
        <div className="w-[700px] h-[700px]  -mt-[120px]">
          {start ? (
            <motion.div
              initial="hidden"
              transition={{ duration: 1, delay: 0.5 }}
              animate="visible"
              variants={variants}
              className="w-full"
            >
              <ChatBot />
            </motion.div>
          ) : (
            <div className="w-full h-full flex flex-col space-y-6 justify-center items-center">
              <motion.p
                initial="hidden"
                transition={{ duration: 1, delay: 1.7 }}
                animate="visible"
                variants={variants}
                className="text-2xl font-bold  uppercase mb-10"
              >
                Break the silence, find support with MindMeet
              </motion.p>

              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 2 }}
                onClick={() => setStart(true)}
                className="py-2 px-6 rounded-md bg-mainC2 text-white animate-bounce cursor-pointer hover:animate-none hover:bg-mainC transition-all delay-100"
              >
                Start the Test Now
              </motion.p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
