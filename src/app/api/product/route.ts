import dbConnection from "@/lib/db";
import { Product } from "@/models/product.model";
import { NextRequest, NextResponse } from "next/server";
import { getCurrentLogedInPerson } from "@/lib/get-current-loggedin-user";
import { Admin } from "@/models/admin.model";

//add product
export async function POST(req: NextRequest) {
  const userId = await getCurrentLogedInPerson();
  console.log("ROUTE.TS");

  console.log(userId);

  const { price, description, title, imageUrl } = await req.json();
  await dbConnection();

  const findAdmin = await Admin.findById(userId);
  if (!findAdmin) {
    return NextResponse.json({ message: "Please login and try again again" });
  }

  try {
    const product = await Product.create({
      price,
      description,
      title,
      imageUrl,
      createdBy: userId,
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
// fetch product for admin
export async function GET(req: NextRequest) {

  const adminId = await getCurrentLogedInPerson();
  if (!adminId) {
    return NextResponse.json({
      success: false,
      message: "Id is not defined, Login again.",
    });
  }

  await dbConnection();

  try {
    const fetchProducts = await Product.find({ createdBy: adminId });
    if (!fetchProducts) {
      return NextResponse.json({
        success: false,
        message: "You don't have any products yet.",
      });
    }
    return NextResponse.json({
      success: true,
      message: "Products fetched successfully",
      fetchProducts,
    });
  } catch (error) {
    console.log(error);
  }
}
