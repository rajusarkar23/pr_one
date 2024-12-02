"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface productDetails {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  createdBy: string;
}

export default function FetchProducts() {
  const [product, setProduct] = useState<productDetails[]>([]);
  const [loading, setLoading] = useState(false)
  console.log(product);

  const getLatestProducts = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/product/get-latest-products");
      const resData = await res.json();
      if (resData.success === true) {
        setProduct(resData.latestProducts);
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    getLatestProducts();
  }, []);

  if (loading) {
    return (
        <div className="flex">
          <div className="text-2xl flex items-center">
            <Sparkles className="mr-2 animate-spin" />
            Loading Product...
          </div>
        </div>
      );
  }

  return (
    <div className="flex gap-10 justify-between">
      {product.map((products, index) => (
        <Link
          href={`/product/${products.title}/${products._id}`}
          key={index}
          className="mt-2"
        >
          <div>
            <img
              src={products.imageUrl}
              alt={products.title}
              className="hover:scale-105 transition-all"
            />
          </div>
          <div className="mt-2">
            <p className="font-bold ml-1">{products.title}</p>
            <p className="ml-1 text-green-600 font-semibold">
              ${products.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
