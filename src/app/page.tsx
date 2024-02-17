import { cn } from "@/lib/utils";
import DotPattern from "@/components/dot-pattern";

export default function Home() {
  return (
    <>
      <div className="bg-background relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg p-[20rem] md:shadow-2xl">
        <div className="z-10 flex flex-col whitespace-pre-wrap text-9xl tracking-tight text-white">
          <span>Pranith</span>
          <span>Molakalapalli</span>
          <div
            className={`font-gopher flex w-full justify-between pt-10 text-5xl tracking-wide`}
          >
            {/* <span>18</span>
            <span>Full-Stack</span>
            <span>Arizona</span> */}
          </div>
        </div>
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
          )}
        />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)] ",
          )}
        />
      </div>
    </>
  );
}
