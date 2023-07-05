import Image from "next/image";
import { useRouter } from "next/router";

interface IProduct {
  id: number;
  title: string;
  rate: number;
}

export default function PlaceBox(items: IProduct) {
  const router = useRouter();
  return (
    <div
      className="flex items-center space-x-3 border-b pb-6"
      onClick={() => router.push(`../${items.id}`)}
    >
      <div className="relative">
        <Image
          className="h-36 w-56 rounded-2xl object-cover"
          src={"/images/001.jpg"}
          alt=""
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="absolute top-2 left-2 h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
      <div className="flex w-64 flex-col space-y-1 text-sm text-white">
        <span className="text-xl font-bold">{items.title}</span>
        <span>- Location Here</span>
        <span>- 2 Persone</span>
        <span>- 1 Deluxe Room</span>
        <div className="flex justify-between pt-2">
          <span className="rounded-md bg-[#f52c56] px-4 py-[1px]">$250</span>
          <span>Rating : {items.rate}</span>
        </div>
      </div>
    </div>
  );
}
