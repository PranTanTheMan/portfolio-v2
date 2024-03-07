"use client";
import React, { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
import Skills from "./skills";

interface GithubActivity {
  author: {
    login: string;
    avatar_url: string;
  };
  commit: {
    author: {
      date: string;
      time: string;
    };
    message: string;
  };
  html_url: string;
  repo_name: string;
  private: boolean;
}

export default function AboutV2() {
  const [linkColor, setLinkColor] = useState("#6B6B6D");
  const [latestActivity, setLatestActivity] = useState<GithubActivity | null>(
    null
  );

  const colors = ["#F1BB8A", "#D7BCED", "#EBB1B1", "#DCEBB1", "#B1CFEB"];

  const changeColor = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setLinkColor(newColor);
  };

  useEffect(() => {
    const fetchGithubActivity = async () => {
      // Replace '/api/github-activity' with your actual API endpoint
      const response = await fetch("/api/github/");
      const data = await response.json();

      if (data && data.items && data.items.length > 0) {
        // Accessing the first object of the items array
        const activity = data.items[0];
        const repositoryData = activity.repository;
        console.log(repositoryData);
        setLatestActivity({
          author: {
            login: activity.author.login,
            avatar_url: activity.author.avatar_url,
          },
          commit: {
            author: {
              date: new Date(activity.commit.author.date).toLocaleDateString(),
              time: new Date(activity.commit.author.date).toLocaleTimeString(
                [],
                { hour: "2-digit", minute: "2-digit" }
              ),
            },
            message: activity.commit.message,
          },
          html_url: repositoryData.html_url,
          repo_name: repositoryData.name,
          private: repositoryData.private,
        });
      }
    };
    fetchGithubActivity();
  }, []);
  return (
    <>
      <BentoGrid className="md:mx-auto mx-[1rem] md:auto-rows-auto">
        <BentoGridItem className="p-6 sm:col-span-2">
          <div className="flex flex-col justify-start">
            <Image
              src={"/Pranith.webp"}
              alt="Pranith Molakalapalli Portrait Image"
              width={104}
              height={104}
              draggable={false}
              rel="preload"
              className="rounded-full block md:hidden overflow-hidden filter grayscale contrast-100 hover:filter-none transition-all duration-300 ease-in-out"
            />
            <Image
              src={"/Pranith.webp"}
              alt="Pranith Molakalapalli Portrait Image"
              width={120}
              height={120}
              draggable={false}
              rel="preload"
              className="rounded-full hidden md:block overflow-hidden filter grayscale contrast-100 hover:filter-none transition-all duration-300 ease-in-out"
            />
          </div>
          <h1 className="pt-4 text-[30px] lg:text-[50px] tracking-normal leading-tight text-white font-satoshi font-bold">
            Pranith is a Full-Stack Developer {""}
            <p className="text-[#666666]">
              currently developing at{" "}
              <a
                href="https://www.joinperceptify.com"
                onMouseEnter={changeColor} // Change color on hover
                style={{ color: linkColor, transition: "color 0.5s" }}
                target="_blank"
                className="md:block hidden"
              >
                Perceptify.
              </a>
              <a
                href="https://www.joinperceptify.com"
                style={{ color: "#D7BCED", transition: "color 0.5s" }}
                target="_blank"
                className="md:hidden block"
              >
                Perceptify.
              </a>
            </p>
          </h1>
        </BentoGridItem>
        <BentoGridItem className="sm:col-span-1 p-6">
          <div className="flex w-full flex-row gap-6 items-center justify-center">
            <Github className="w-28 h-28" />
            <div className="flex flex-col justify-start items-start gap-4">
              <h1 className="text-[30px] w-full font-bold font-gopher text-white">
                Latest Commit
              </h1>
              <div>
                {latestActivity ? (
                  <>
                    <div className="flex flex-row">
                      <a
                        href={latestActivity.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-satoshi font-bold text-md bg-white/20 py-2 px-6 rounded-full text-white/60 hover:text-white transition-colors"
                      >
                        {latestActivity.repo_name}
                      </a>
                      <div className="-ml-3 -mt-1">
                        <Tooltip
                          content={`${
                            latestActivity.private ? "Private" : "Public"
                          }`}
                          color="foreground"
                          className="capitalize"
                        >
                          <div className="bg-white/0 border border-white/30 rounded-full p-[5px]">
                            <div className="bg-green-500 rounded-full relative w-2 h-2" />
                          </div>
                        </Tooltip>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="font-satoshi font-bold text-sm bg-white/20 py-2 px-6 rounded-full text-white/60 animate-pulse">
                    Loading latest activity...
                  </p>
                )}
              </div>
            </div>
          </div>
          <div>
            {latestActivity ? (
              <>
                <h1 className="font-satoshi font-bold text-3xl text-white/95 text-left mt-12 mb-4 line-clamp-4">
                  {latestActivity.commit.message}
                </h1>
                <p className="font-satoshi font-bold text-3xl text-[#595959] text-left">
                  @ {latestActivity.commit.author.date},{" "}
                  {latestActivity.commit.author.time}
                </p>
              </>
            ) : (
              <p className="text-white/70 animate-pulse font-satoshi font-bold text-5xl text-left mt-12 leading-snug">
                What did this bro commit? {""} 🤔
              </p>
            )}
          </div>
        </BentoGridItem>
        <BentoGridItem className="sm:col-span-1 p-6">
          <Skills />
        </BentoGridItem>
        <BentoGridItem className="sm:col-span-2 p-6">
          <p className="px-6 py-2 text-[25px] md:text-[40px] tracking-normal leading-tight text-white font-satoshi font-bold ">
            First and foremost, I am a{" "}
            <a href="/biryani" className="text-[#EBB1B1]">
              Biryani Enthusiast.{" "}
            </a>
            Otherwise, I specialize in creating Full-Stack web applications
            using{" "}
            <span className="text-[#666666]">
              Next.js, Tailwind, Typescript, and Supabase.{" "}
            </span>
            I always look forward to finding ways on having{" "}
            <span className="text-[#666666]">impact</span>,{" "}
            <span className="text-[#666666]">fun</span>, and{" "}
            <span className="text-[#666666]">learning new things</span>.
          </p>
        </BentoGridItem>
      </BentoGrid>
    </>
  );
}

const Github = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="github"
      className={className}
    >
      <g data-name="Github 1">
        <g data-name="Group">
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 .5A11.5 11.5 0 0 0 .5 12a11.82 11.82 0 0 0 9 11.5v-3h-1c-2.62 0-3.54-4-5-4 2.79 0 3.33 2 5 2a.89.89 0 0 0 1-1v-.35c-2.91-.82-5-3-5-5.65a5.26 5.26 0 0 1 1.57-3.66A3.16 3.16 0 0 1 6.5 4.5 5.26 5.26 0 0 1 8.88 6a9.14 9.14 0 0 1 6.24 0 5.26 5.26 0 0 1 2.38-1.5 3.16 3.16 0 0 1 .43 3.34 5.26 5.26 0 0 1 1.57 3.66c0 2.74-2.29 5-5.42 5.76a4.68 4.68 0 0 1 .42 2.24v4a11.82 11.82 0 0 0 9-11.5A11.5 11.5 0 0 0 12 .5Z"
            data-name="Path"
          ></path>
        </g>
      </g>
    </svg>
  );
};
