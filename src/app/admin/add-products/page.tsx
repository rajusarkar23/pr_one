import AddProductsForm from "@/components/admin/AddProducts";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const AddProducts = async () => {
  if (!(await cookies()).get("access")) {
    redirect("/admin/signin");
  }

  return (
    <div>
      <div className="mt-10">
        <AddProductsForm />
      </div>
    </div>
  );
};

export default AddProducts;
