"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface productsDetails {
  _id: string;
  createdBy: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export default function GetProducts() {
  const [product, setProduct] = useState<productsDetails[]>([]);
  const [loading, setLoading] = useState(false);
  console.log(product);

  const getProd = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/product");
      const resData = await res.json();
      if (resData.success === true) {
        setProduct(resData.fetchProducts);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProd();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center">
        <div className="flex gap-3">
          <Sparkles className="animate-spin" />{" "}
          <span className="text-xl font-semibold">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-4 gap-4 space-x-2">
      {product.length > 0 ? (
        product.map((products, index) => (
          <Link
            className="border rounded px-6 space-x-3 mt-2"
            key={index}
            href={`/product/${products.title}/${products._id}`}
          >
            <img
              src={products.imageUrl}
              alt="img"
              className="mt-6 hover:scale-105 transition-all"
            />
            <h2 className="mt-2">{products.title}</h2>
            <h4>$ {products.price}</h4>
          </Link>
        ))
      ) : (
        <p>There is nothing to show yet.</p>
      )}
    </div>
  );
}
