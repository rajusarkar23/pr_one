import { CircleUserRound, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between shadow-sm py-2 px-16">
      <div className="flex">
        <div className="mr-20">
          <Link href={"/"} className="font-bold">
            GREENMIND
          </Link>
        </div>
        <div className="flex gap-9">
          <p>Home</p>
          <p>Products</p>
          <p>Contacts</p>
        </div>
      </div>
      <div className="flex gap-8">
        <ShoppingCart />
        <CircleUserRound />
      </div>
    </nav>
  );
}
