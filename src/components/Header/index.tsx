import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@images/logoMindMeet-removebg-preview.png";
const Index = () => {
  return (
    <div className="w-full sticky top-0 left-0 right-0 z-50 ">
      <div className="w-full py-1 bg-mainC text-white font-bold font-mono">
        <p className="text-center">Online Free mental health Test </p>
      </div>
      <div className="w-full py-2  bg-white/60 flex justify-between items-center border-b-2 border-black shadow-md  h-[80px]   ">
        <div className=" text-center py-2 w-[200px] px-5">
          <Image
            src={Logo}
            alt="mind meet logo"
            style={{ width: "100px", height: "100px" }}
          />
        </div>

        <div className=" text-center py-2 flex-1 flex items-center justify-end px-5">
          <div className="flex gap-5 items-center justify-start ">
            <Link href={"/"}>
              <div className="py-2 text-mainFontColor text-small w-[100px] bg-slate-100 rounded-md cursor-pointer hover:text-white hover:bg-mainC hover:border-1 hover:border-white  hover:shadow-md">
                Home
              </div>
            </Link>

            <Link href={"/sub/articles"}>
              <div className="py-2 text-mainFontColor  text-small w-[100px] bg-slate-100 rounded-md cursor-pointer hover:text-white hover:bg-mainC hover:border-1 hover:border-white  hover:shadow-md">
                Articles
              </div>
            </Link>
            <Link href={"/sub/doctors"}>
              <div className="py-2 text-mainFontColor text-small w-[100px] bg-slate-100 rounded-md cursor-pointer hover:text-white hover:bg-mainC hover:border-1 hover:border-white  hover:shadow-md">
                Partners
              </div>
            </Link>
            <Link href={"/contact"}>
              <div className="py-2 text-mainFontColor  text-small w-[100px] bg-slate-100 rounded-md cursor-pointer hover:text-white hover:bg-mainC hover:border-1 hover:border-white  hover:shadow-md">
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
