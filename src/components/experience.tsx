"use client";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Experience() {
  const experience = [
    {
      title: "Tech Optimum",
      img: "/Group-3.png",
      href: "https://www.techoptimum.org",
      role: "CTO",
      duration: "2021 - 2023",
      description:
        "Tech Optimum is a non-profit organization that aims to provide free technical education to underprivileged students.",
    },
    {
      title: "CodeDevils",
      img: "/Group-4.png",
      href: "https://codedevils.org",
      role: "Project Coordinator",
      duration: "2023 - Present",
      description:
        "CodeDevils is a student-run organization at ASU that aims to provide a platform for students to learn and grow in the field of technology.",
    },
    {
      title: "Perceptify",
      img: "/Group-5.png",
      href: "https://www.joinperceptify.com",
      role: "Co-founder & Developer",
      duration: "2023 - Present",
      description:
        "Data analytics and visualization for Gen z content creators. ",
    },
    {
      title: "ASU",
      img: "/Group-2.png",
      href: "https://www.asu.edu",
      role: "undergraduate student",
      duration: "2023 - 2027",
      description: "Pursuing a degree in Data Science.",
    },
    {
      title: "Effinity",
      img: "/Group-1.png",
      role: "Lead Developer",
      duration: "2024 - present",
      description: "Educational gamified financial iteracy platform.",
    },
    {
      title: "FIRST Robotics",
      img: "/Group-6.png",
      href: "https://www.trojanrobotics.com/home",
      role: "Lead Mechanical Engineer",
      duration: "2019-2023",
      description: "Part of a team that designs and builds robots.",
    },
    {
      title: "CompSciLib",
      img: "/Group-7.png",
      href: "https://www.compscilib.com/",
      role: "Software Engineer",
      duration: "Feb 2023 - Apr 2023",
      description:
        "EdTech startup that provides calculators, resources, etc for computer science students.",
    },
  ];
  return (
    <>
      <div
        id="experience"
        className="min-h-screen px-10 lg:px-[20rem] scroll-m-36 "
      >
        <h1 className="font-gopher font-black text-5xl ">
          Here&apos;s what I&apos;m involved in
        </h1>
        <div className=" flex justify-center mt-24 gap-8 flex-wrap">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="w-[32rem] h-[16rem] rounded-xl bg-white/40 group relative overflow-hidden"
            >
              <div
                className="transition-opacity duration-300 ease-in-out opacity-100 w-full h-full bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: `url(${exp.img})` }}
              >
                <div className=" bg-gradient-to-t from-black/85 to-transparent w-full h-full">
                  <div className="flex flex-col justify-end items-start p-4 w-full h-full opacity-100 group-hover:opacity-0 transition-all">
                    <h1 className="text-white flex items-center text-4xl font-bold font-faktum">
                      {exp.title}
                      <FaExternalLinkAlt className="hover:text-white/60 transition-colors transform scale-50" />
                    </h1>
                    <p className="text-white text-lg italic font-satoshi">
                      {exp.role}
                    </p>
                  </div>
                </div>
              </div>
              <a href={exp.href} target="_blank">
                {/* Provide a valid href value */}
                <div className="transition-opacity duration-500 ease-soft-spring opacity-0 group-hover:opacity-100 absolute inset-0 bg-gradient-to-t from-black/75 to-black/75 flex justify-center items-center">
                  <div className="flex flex-col gap-2 w-full h-full justify-end items-start p-4">
                    <div className="flex gap-4 items-center">
                      <h1 className="text-3xl font-gopher ">{exp.title}</h1>
                      <FaExternalLinkAlt className="transform scale-150 hover:text-white/60 transition-colors" />
                    </div>
                    <div className="flex w-full justify-between">
                      <p className="text-lg font-bold italic">{exp.role}</p>
                      <p className="text-lg italic">{exp.duration}</p>
                    </div>
                    <p className="font-satoshi">{exp.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
