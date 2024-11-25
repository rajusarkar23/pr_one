import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const AllProducts = async () => {
  if (!(await cookies()).get("access")) {
    redirect("/admin/signin")
  }

  return (
    <div>AllProducts</div>
  )
}

export default AllProducts