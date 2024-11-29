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
      // console.log(resData.fetchProducts);
      setProduct(resData.fetchProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProd();
  }, []);

  return (
    <div>
      {product.length > 0 ? (
        product.map((products, index) => (
          <Link key={index} href={"/"}>
            <h2>{products.title}</h2>
            <img src={products.imageUrl} alt="img" />
            <h3>{products.description}</h3>
            <h4>$ {products.price}</h4>
          </Link>
        ))
      ) : (
        <p>There is nothing to show</p>
      )}
    </div>
  );
}
