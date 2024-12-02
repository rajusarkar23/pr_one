import dbConnection from "@/lib/db";
import { Product } from "@/models/product.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    await dbConnection()
    const latestProducts = await Product.find().sort({createdAt: -1}).limit(3)
    console.log(latestProducts);
    return NextResponse.json({success: true, latestProducts})
}