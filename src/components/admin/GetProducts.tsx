"use client"

import { useEffect } from "react";

export default function GetProducts() {

    const getProd = async () => {
        try {
          const res = await fetch("/api/product")
          const resData = await res.json()
          console.log(resData);
        } catch (error) {
          console.log(error);
          
        }
      }

      useEffect(() => {
        getProd()
      }, [])

    return(
        <div>
                <p>logging all prods</p>
        </div>
    )
}