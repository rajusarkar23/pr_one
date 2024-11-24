import SellerNavbar from "@/components/admin/Navbar";
import { ReactNode } from "react";

export default function Layout({children}:{children:ReactNode}){
    return(
        <>
        <SellerNavbar />
        <main className="px-20">{children}</main>
        </>
    )
}