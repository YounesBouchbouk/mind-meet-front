import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DoctorType } from "..";
import Star from "@images/Star-Icon-987hjfd.png";
type Props = {
  doctor: DoctorType;
};

const Index = ({ doctor }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4 justify-between w-full py-2 bg-white rounded-lg">
      <div className="flex-shrink-0 w-full">
        <Image
          src={doctor.image}
          style={{ width: "100%", height: "400px" }}
          alt="stress"
        />
      </div>
      <div className="items-start flex-grow w-full px-4">
        <Link href={"#"}>
          <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
        </Link>
        <div className="flex gap-2 items-center justify-center">
          <Image
            alt="star"
            src={Star}
            style={{ width: "30px", height: "30px" }}
          />
          <p className="  text-gray-400 mb-2 text-small text-end mt-3">
            {doctor.rating}
          </p>
        </div>
        <div className="flex items-center w-full justify-end px-5"></div>

        <div className="flex items-center w-full justify-start ">
          <div className="flex-col px-2">
            <p className="text-gray-500 text-small">
              Years of experince : {doctor.yearsOfExperience}
            </p>

            <div className="flex justify-start items-center gap-3 flex-wrap mt-3">
              {doctor.speciality.map((sp) => (
                <p
                  key={sp}
                  className="min-w-[100px] px-3 hover:bg-gray-100 cursor-pointer rounded-2xl text-center py-2 bg-gray-200 text-xs"
                >
                  {sp}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
