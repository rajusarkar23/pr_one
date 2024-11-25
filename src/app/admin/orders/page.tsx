import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const Orders = async () => {
  if (!(await cookies()).get("access")) {
    redirect("/admin/signin")
  }
  return (
    <div>Orders</div>
  )
}

export default Orders