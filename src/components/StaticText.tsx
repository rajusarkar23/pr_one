import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function StaticText() {
  return (
    <div>
      <h2 className="text-3xl font-bold">
        Best Selling <br /> Plants
      </h2>
      <p className="text-gray-500 mt-3">
        Easiest way to <br /> healthy life by buying  <br /> your favorite plants.
      </p>
      <div className="mt-3">
        <Link href={"/"} className="bg-[#C1DCDC]  py-2 w-32 text-center justify-center font-semibold rounded flex">See more <MoveRight className="ml-1 mt-[2px]"/></Link>
      </div>
    </div>
  );
}
