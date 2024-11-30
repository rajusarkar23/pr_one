"use client";
import { useState, useEffect } from "react";
import { Sparkles, ShoppingCart } from "lucide-react";
import { useParams } from "next/navigation";

interface ProductDetails {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  createdBy: string;
  _id: string;
}

export default function ProductDetails() {
 
  const params = useParams();
  const [product, setProduct] = useState<ProductDetails>({
    _id: "",
    title: "",
    description: "",
    price: "",
    imageUrl: "",
    createdBy: "",
  });
  const [loading, setLoading] = useState(true);

  const getProductById = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/product/by-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: params.id }),
      });
      const resData = await res.json();
      if (resData.success === true) {
        setProduct(resData.product);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductById();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse text-2xl flex items-center">
          <Sparkles className="mr-2 animate-spin" />
          Loading Product...
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-xl p-8 flex justify-center items-center">
          <img
            src={product.imageUrl || "/placeholder-image"}
            alt={product.title}
            className="max-h-96 w-full object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.title}
          </h1>

          <div className="flex items-center space-x-4">
            <span className="text-2xl font-semibold text-green-600">
              ${product.price}
            </span>
            <span className="text-sm text-gray-500">
              Sold by: {product.createdBy}
            </span>
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
              <ShoppingCart className="mr-2" />
              Add to Cart
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
