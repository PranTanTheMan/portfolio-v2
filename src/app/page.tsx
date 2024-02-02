import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="col-span-1 bg-white h-[327px] rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-15"></div>
        <div className="col-span-1 bg-white h-[327px] rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-15"></div>
        <div className="col-span-2 bg-white h-auto rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-15"></div>

        <div className="col-span-3 bg-white h-[550px] rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-15"></div>
        <div className="col-span-1 bg-white h-[550px] rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-15"></div>
      </div>
    </div>
  );
}
