'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const router = useRouter()
  console.log(formData);
  
  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/admin/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const resData = await res.json();
      console.log(resData);

      if (resData.success === true) {
       router.push("/admin/dashboard")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center mt-96"
    >
      <div>
        <label className="flex">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="text-black border p-1"
          onChange={handleFormDataChange}
        />
      </div>
      <div>
        <label className="flex">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="text-black border p-1"
          onChange={handleFormDataChange}
        />
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="bg-orange-400 w-44 py-1 font-bold text-xl rounded hover:bg-orange-500 text-white"
        >
          Login
        </button>
      </div>
    </form>
  );
}
