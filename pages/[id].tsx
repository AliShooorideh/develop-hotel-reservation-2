import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function place() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [floor, setFloor] = useState<number>(1);
  const [room, setRoom] = useState<number>(1);
  return (
    <div>
      <div className="relative">
        <Image
          className="w-full"
          src={"/images/002.jpg"}
          alt=""
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => router.back()}
          className="absolute top-5 left-5 h-8 w-8 rounded-md bg-gray-100 p-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </div>
      <div className="absolute -mt-14 h-screen w-screen rounded-t-[50px] bg-[#f52c56]  pt-14">
        <div className="flex items-center justify-between px-6">
          <div className="flex w-44 flex-col text-white">
            <span className="text-xl font-bold">
              Luxurious Hotel & Close To Nature
            </span>
            <span>- Location Name Here</span>
          </div>
          <div className="flex flex-col items-end space-y-3">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="none"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="none"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="none"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="none"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="none"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
            <span className="text-3xl font-bold text-white">$250.00</span>
          </div>
        </div>
        <div className="bg-[#da2a50] mt-5 p-6 flex justify-between">
          <div>
            <span className="text-2xl font-bold text-white">Floor</span>
            <div className="flex justify-between space-x-2 items-center border-t pt-3">
              <div
                className={`${
                  floor === 1 ? "bg-black" : "border border-black"
                } rounded-lg py-1 px-2 text-white whitespace-nowrap`}
                onClick={() => setFloor(1)}
              >
                1st Floor
              </div>
              <div
                className={`${
                  floor === 2 ? "bg-black" : "border border-black"
                } rounded-lg py-1 px-2 text-white whitespace-nowrap`}
                onClick={() => setFloor(2)}
              >
                2st Floor
              </div>
            </div>
          </div>
          <div>
            <span className="text-2xl font-bold text-white">Floor</span>
            <div className="flex justify-between border-t pt-2 items-center space-x-2">
              <div
                className={`${
                  room === 1 ? "bg-black" : "border border-black"
                } rounded-lg py-2 px-2 text-white whitespace-nowrap`}
                onClick={() => setRoom(1)}
              >
                A 01
              </div>
              <div
                className={`${
                  room === 2 ? "bg-black" : "border border-black"
                } rounded-lg py-2 px-2 text-white whitespace-nowrap`}
                onClick={() => setRoom(2)}
              >
                A 02
              </div>
              <div
                className={`${
                  room === 2 ? "bg-black" : "border border-black"
                } rounded-lg py-2 px-2 text-white whitespace-nowrap`}
                onClick={() => setRoom(3)}
              >
                A 03
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 text-white mt-10 space-y-3">
            <span className="font-bold text-2xl">Hotel Details : </span>
            <p className="font-light leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime non dicta exercitationem debitis atque commodi libero illum autem fugiat rem possimus voluptates totam necessitatibus, quas, quod nam harum hic.</p>
        </div>
        <div className="flex justify-center px-6 mt-10">
            <button className="bg-black rounded-full py-3 w-full text-white font-bold">Book Now</button>
        </div>
      </div>
    </div>
  );
}
