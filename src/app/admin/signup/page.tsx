import React from 'react'
import SignupForm from '@/components/admin/SignupForm'
import Link from 'next/link'

const Signup = () => {
  return (
    <div>
        <SignupForm />
        
        <div className='text-center mt-3 text-blue-600 font-semibold'>
          <Link href={"/admin/signin"}>
          Login
          </Link>
          </div>
    </div>
  )
}

export default Signup