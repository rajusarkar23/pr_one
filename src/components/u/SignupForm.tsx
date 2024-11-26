"use client"
import { ChangeEvent, FormEvent, useState } from "react";

export default function SignupForm() {
const [formData, setFormData] = useState({})

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.id]: e.target.value
  })
}

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  try {
    const res = await fetch("/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    const resData = await res.json()
    
  } catch (error) {
    console.log(error);
    
  }
}
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-3 items-center justify-center mt-24">
        <div>
          <label className="flex">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="border px-1"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="flex">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="border px-1"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 px-10 py-1 rounded-full text-white hover:bg-blue-500 transition-all"
        >
          Signup
        </button>
      </div>
    </form>
  );
}
