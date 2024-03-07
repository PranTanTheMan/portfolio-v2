"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/dot-pattern";
import details from "@/utils/details.json";

export default function Hero() {
  return (
    <>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg  md:shadow-2xl">
        <div className="z-10 flex flex-col whitespace-pre-wrap text-[55px] md:text-8xl lg:text-9xl tracking-tight text-white">
          <span>Pranith</span>
          <span>Molakalapalli</span>
          <div
            className={`font-gopher flex  justify-between pt-4 text-3xl md:text-5xl tracking-wide`}
          >
            {/* @ts-ignore */}
            {details.detail.map((item: string, i: number) => (
              <span className="font-thin italic" key={i}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <DotPattern
          width={20}
          height={20}
          cx={2}
          cy={2}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
        <DotPattern
          width={20}
          height={20}
          cx={2}
          cy={2}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)] "
          )}
        />
      </div>
    </>
  );
}
