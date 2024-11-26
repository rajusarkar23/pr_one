import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const CheckoutPage = async () => {
  if (!(await cookies()).get("u-session")) {
    redirect("/u/signin")
  }

  return <div>CheckoutPage</div>;
};

export default CheckoutPage;
