import { Search } from "lucide-react";

export default function Top() {
  return (
    <div className=" flex justify-between bg-[#C1DCDC] rounded-lg w-full">
      <div className="ml-4 mt-4">
        <h1 className="font-extrabold text-5xl">
          Buy your <br /> dream plants
        </h1>
        <div className="flex gap-8 mt-6 divide-x divide-black">
          <div>
            <p className="text-xl font-semibold">50+</p>
            <p className="text-xl">Plant species</p>
          </div>
          <div className="px-9">
            <p className="text-xl font-semibold">100+</p>
            <p className="text-xl">Customers</p>
          </div>
        </div>
        <div className="mt-40 flex">
          <input
            type="text"
            placeholder="What are you looking for today?"
            className="w-80 h-14 rounded px-2"
          />
          <Search className="mt-3 ml-[-40px] bg-[#CADCDC] rounded w-7 h-9 px-1" />
        </div>
      </div>
      <div>
        <div>
          <img src="unsplash_cLaaxa4DSnc-removebg-preview 1 (1).png" alt="plant" width="350px"/>
        </div>
      </div>
    </div>
  );
}
