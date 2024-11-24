import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = async () => {

  if (!(await cookies()).get("access")) {
    redirect("/admin/signin")
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
