import BottomSheet from "@/components/BottomSheet";
import PlaceBox from "@/components/PlaceBox";
import { useState } from "react";

export default function likeproduct() {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="h-screen w-screen bg-black">
      <div className="w-screen rounded-b-[50px] bg-[#f52c56] p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col font-bold text-white">
            <span>Book Mark</span>
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
        <div className="mx-auto mt-16 mb-10 flex w-3/4 justify-between rounded-full bg-gray-50 px-2 py-1">
          <div className="rounded-full bg-gray-200 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#f52c56"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-14 space-y-5 px-6">
        <PlaceBox rate={4.5} title="Forious Place" id={1} />
        <PlaceBox rate={4.8} title="Forious Place" id={2} />
        <PlaceBox rate={3} title="Forious Place" id={3} />
      </div>
      <BottomSheet type="like" />
    </div>
  );
}
