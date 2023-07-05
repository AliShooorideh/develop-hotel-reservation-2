import BottomSheet from "@/components/BottomSheet";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[#f52c56]">
      <div className="w-screen rounded-b-[50px] bg-black pb-5">
        <div className="flex items-center justify-between p-6">
          <div className="flex flex-col font-bold text-white">
            <span>Hi ,</span>
            <span>Mr.sontip cheng</span>
          </div>
          <div className="rounded-md bg-gray-50 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#000"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-6 px-10 font-bold ">
          <span className="text-4xl text-[#f52c56]">Wlecome</span>
          <span className="text-center text-3xl font-normal text-white">
            the our most popular & luxurios places{" "}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 p-6">
        <div className="relative">
          <Image
            className="h-60 w-full rounded-xl object-cover shadow-2xl"
            src={"/images/003.jpg"}
            alt=""
            loading="lazy"
            width="0"
            height="0"
            sizes="100vw"
          />
          <div className="absolute flex flex-col bottom-2 left-2 shadow-2xl text-white">
            <span className="font-bold">Name Of resort</span>
            <span>- Location here</span>
          </div>
        </div>
        <Image
          className="h-60 w-full rounded-xl object-cover shadow-2xl"
          src={"/images/008.jpg"}
          alt=""
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
        />
        <Image
          className="h-60 w-full rounded-xl object-cover shadow-2xl"
          src={"/images/008.jpg"}
          alt=""
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
        />
        <Image
          className="h-60 w-full rounded-xl object-cover shadow-2xl"
          src={"/images/003.jpg"}
          alt=""
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
      <BottomSheet type={"home"}/>
    </div>
  );
}
// #F52C56
