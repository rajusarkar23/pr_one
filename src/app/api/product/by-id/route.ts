import dbConnection from "@/lib/db";
import { Product } from "@/models/product.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const id = await req.json();

  if (!id) {
    return NextResponse.json({
      success: false,
      message: "Invalid product id.",
    });
  }
  await dbConnection();

  try {
    const find = await Product.findById(id.productId);
    if (!find) {
      return NextResponse.json({ success: true, message: "No product found." });
    }
    return NextResponse.json({ success: true, product: find });
  } catch (error) {
    console.log(error);
  }
}
