import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const AddProducts = async () => {

  if (!(await cookies()).get("access")) {
    redirect("/admin/signin")
  }

  return (
    <div>
      AddProducts
    </div>
  );
};

export default AddProducts;
