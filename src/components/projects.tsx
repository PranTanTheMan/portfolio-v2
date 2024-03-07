"use client";
import React from "react";
import { Chip } from "@nextui-org/react";

export default function Projects() {
  const projects = [
    {
      title: "Tech Optimum's Dashboard",
      description:
        "An education platform hosting courses on programming and technology.",
      website: "https://dashboard.techoptimum.org",
      github: "",
      tags: ["Next.js", "ChakraUI", "JavaScript", "MongoDB"],
    },
    {
      title: "CodeDevils Website",
      description: "Student-run engineering organization at ASU",
      website: "https://codedevils.org/",
      github: "https://github.com/ASU-CodeDevils/codedevils.org",
      tags: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "Perceptify Dashboard",
      description: "Data analytics and visualization web app",
      website: "https://www.joinperceptify.com",
      github: "",
      tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    },
    {
      title: "Resumate",
      description: "A resume builder and feedback full-stack web app",
      website: "",
      github: "https://github.com/siddharthd0/resumate",
      tags: ["Next.js", "JavaScript", "Chakra UI", "NLP"],
    },
    {
      title: "Igrader",
      description: "Grade assignments and provide feedback",
      website: "https://igrader.vercel.app/",
      github: "https://github.com/PranTanTheMan/ai-in-education-frontend",
      tags: ["Next.js", "Tailwind", "JavaScript", "OpenAI", "OCR"],
    },
    {
      title: "MedSched AI",
      description: "AI-powered hospital/clinic scheduling",
      website: "https://medsched.vercel.app/",
      github: "https://github.com/siddharthd0/med-ai",
      tags: ["Next.js", "Tailwind", "JavaScript", "OpenAI", "MongoDB"],
    },
    {
      title: "SuperStream",
      description: "Optmized google classroom view",
      website: "",
      github: "https://github.com/thegu5/superstream",
      tags: ["Next.js", "CSS", "JavaScript", "GoogleAPI", "Python"],
    },
  ];
  return (
    <>
      <div
        id="projects"
        className="min-h-screen md:mb-18 lg:mb-10 mb-20 px-[2rem] lg:px-[14rem]"
      >
        <h1 className="font-gopher font-black text-5xl pl-[1rem] mt-20 mb-14">
          Here&apos;s what I&apos;ve made
        </h1>
        {/* project container */}
        <div className="flex w-full gap-8 justify-center items-center flex-wrap">
          {/* project card */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 border-2 border-white/30 rounded-lg bg-black"
            >
              <div className="flex w-full items-center justify-between">
                <div>
                  <div className="flex gap-1 items-center">
                    <h1 className="text-xl font-gopher">{project.title}</h1>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a href={`${project.github}`} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 hover:opacity-45 transition-opacity"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                        />
                      </svg>
                    </a>
                  )}

                  {project.website && (
                    <a href={`${project.website}`} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 hover:opacity-45 transition-opacity"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <p className="max-w-sm pt-3">{projects[0].description}</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {project.tags.map((tag, index) => (
                  <Chip key={index} color="secondary" size="sm" variant="flat">
                    {tag}
                  </Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
