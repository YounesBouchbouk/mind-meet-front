/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from "react";
import Card from "@components/DoctorsList/Card";
import FirstDoc from "@images/2.jpg";
import DSecondDoc from "@images/3.jpg";
import DoctorWho from "@images/DoctorWho.jpg";
import { StaticImageData } from "next/image";

type Props = {};

export type DoctorType = {
  name: string;
  yearsOfExperience: string;
  rating: string;
  speciality: string[];
  disponible: string;
  from: string;
  image: StaticImageData;
};
const Index = (props: Props) => {
  const [doctors] = useState<DoctorType[]>([
    {
      name: "Dr. John Smith",
      yearsOfExperience: "10",
      rating: "4.5",
      speciality: ["Cardiology", "Internal Medicine"],
      disponible: "Yes",
      from: "09:00 AM",
      image: FirstDoc,
    },
    {
      name: "Dr. Sarah Johnson",
      yearsOfExperience: "8",
      rating: "4.2",
      speciality: ["Dermatology"],
      disponible: "Yes",
      from: "10:30 AM",
      image: DSecondDoc,
    },
    {
      name: "Dr. Michael Brown",
      yearsOfExperience: "15",
      rating: "4.9",
      speciality: ["Orthopedics", "Sports Medicine"],
      disponible: "Yes",
      from: "08:00 AM",
      image: DoctorWho,
    },
  ]);

  return (
    <div className="w-full grid container grid-cols-1 md:grid-cols-3 gap-3">
      {doctors.map((doctor) => (
        <Card key={doctor.name} doctor={doctor} />
      ))}
    </div>
  );
};

export default Index;
