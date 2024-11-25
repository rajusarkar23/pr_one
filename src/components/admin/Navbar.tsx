"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SellerNavbar() {
  const pathname = usePathname();
  const navLinks = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Add Products", href: "/admin/add-products" },
    { name: "View Products", href: "/admin/all-products" },
    { name: "Orders", href: "/admin/orders" },
  ];

  return (
    <nav className="flex justify-between px-20 bg-blue-100 h-10 items-center">
      <div className="space-x-2">
        {navLinks.map((links, index) => (
          <Link
            href={links.href}
            key={index}
            className={`border border-gray-400 p-1 rounded-xl px-2 font-semibold transition-all ${
              pathname === links.href ? "bg-blue-400" : "bg-blue-100"
            } `}
          >
            {links.name}
          </Link>
        ))}
      </div>
      <div>
        <Link
          href={"/admin/profile"}
          className="p-1 rounded-xl px-2 font-bold bg-blue-300 hover:bg-blue-50 transition-all"
        >
          Hello,admin!
        </Link>
      </div>
    </nav>
  );
}
