"use client";

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
  console.log(product);

  const getProd = async () => {
    try {
      const res = await fetch("/api/product");
      const resData = await res.json();
      setProduct(resData.fetchProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProd();
  }, []);

  return (
    <div className="flex justify-center mt-4 gap-4 space-x-2">
      {product.length > 0 ? (
        product.map((products, index) => (
          <Link
            className="border rounded px-6 space-x-3 mt-2"
            key={index}
            href={`/product/${products.title}/${products._id}`}
          >
            <img src={products.imageUrl} alt="img" className="mt-6" />
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
