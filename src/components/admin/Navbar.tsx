import Link from "next/link";

export default function SellerNavbar() {
  return (
    <nav className="flex justify-between px-20 bg-blue-100 h-10 items-center">
      <div className="space-x-2">
        <Link href={"/admin/add-products"} className="border border-gray-400 p-1 rounded-xl px-2 font-semibold hover:bg-blue-50 transition-all">Add Products</Link>
        <Link href={"/admin/all-products"} className="border border-gray-400 p-1 rounded-xl px-2 font-semibold hover:bg-blue-50 transition-all">View Products</Link>
        <Link href={"/admin/orders"} className="border border-gray-400 p-1 rounded-xl px-2 font-semibold hover:bg-blue-50 transition-all">Manage orders</Link>
      </div>
      <div>
      <Link href={"/admin/profile"} className="p-1 rounded-xl px-2 font-bold bg-blue-300 hover:bg-blue-50 transition-all">Hello,admin!</Link>

      </div>
    </nav>
  );
}
