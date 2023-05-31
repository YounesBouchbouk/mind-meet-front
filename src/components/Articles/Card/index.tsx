/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import UserNot from "@images/userNot.jpg";
import Image from "next/image";
import { ArticleType } from "..";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

type Props = {
  article: ArticleType;
};
const squareVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  hidden: { opacity: 0, y: 5 },
};

const Index = ({ article }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="flex items-center gap-4 justify-between w-full py-4 bg-white rounded-lg"
    >
      <div className="flex-shrink-0 w-[300px]">
        <Image
          src={article.image}
          style={{ width: "100%", height: "200px" }}
          alt="stress"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <a href={article.link}>
          <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
        </a>
        <p className="  text-gray-400 mb-2 text-small">{article.subTitle}</p>
        <div className="flex items-center w-full justify-end px-5">
          <a
            href={article.link}
            className=" py-2 px-10 hover:bg-mainC2 bg-mainC rounded-lg text-white"
          >
            Read more
          </a>
        </div>

        <div className="flex items-center w-full justify-start px-5">
          <Image
            src={UserNot}
            style={{ width: "40px", height: "40px", borderRadius: "100%" }}
            alt="stress"
          />

          <div className="flex-col px-2">
            <p className="text-mainFontColor text-xs font-bold">
              {article.authors}
            </p>
            <p className="text-gray-500 text-xs">{article.createdAt}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
