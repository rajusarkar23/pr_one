import dbConnection from "@/lib/db";
import { Product } from "@/models/product.model";
import { NextRequest, NextResponse } from "next/server";

//add product
export async function POST(req: NextRequest) {
  const { price, description, title, imageUrl } = await req.json();
  await dbConnection();
  try {
    const product = await Product.create({
      price,
      description,
      title,
      imageUrl,
    });
    if (!product) {
      return NextResponse.json({ message: "Unable to add product." });
    }
    console.log(product);
    
    return NextResponse.json({
      success: true,
      message: "Product added successfully,",
    });
  } catch (error) {
    console.log(error);
  }
}
