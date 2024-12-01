import SellerNavbar from "@/components/admin/Navbar";
import { ReactNode } from "react";
import "../globals.css"

export default function Layout({children}:{children:ReactNode}){
    return(
        <html lang="en">
        <body>
          <SellerNavbar />
          <div className="px-16">{children}</div>
        </body>
      </html>
    )
}