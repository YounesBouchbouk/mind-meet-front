/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import WaysToEaseStress from "@images/WaysToEaseStress.jpg";
import Image from "next/image";
import { ArticleType } from "..";
import Link from "next/link";
type Props = {
  article: ArticleType;
};

const index = ({ article }: Props) => {
  return (
    <div className="flex items-center gap-4 justify-between w-full py-4 bg-white rounded-lg">
      <div className="flex-shrink-0 w-[300px]">
        {/* <img src={image} alt={title} className="w-16 h-16 rounded-full" /> */}
        <Image
          src={WaysToEaseStress}
          style={{ width: "100%", height: "200px" }}
          alt="stress"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <Link href={"#"}>
          <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
        </Link>
        <p className="  text-gray-400 mb-2 text-small">{article.subTitle}</p>
        <div className="flex items-center w-full justify-end px-5">
          <a
            href={"url"}
            className=" py-2 px-10 bg-blue-400 hover:bg-blue-400/60 rounded-lg text-white"
          >
            Read more
          </a>
        </div>

        <div className="flex items-center w-full justify-start px-5">
          <Image
            src={WaysToEaseStress}
            style={{ width: "40px", height: "40px", borderRadius: "100%" }}
            alt="stress"
          />

          <div className="flex-col px-2">
            <p className="text-gray-500 text-xs">{article.authors}</p>
            <p className="text-gray-500 text-xs">{article.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
