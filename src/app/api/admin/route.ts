import dbConnection from "@/lib/db";
import { Admin } from "@/models/admin.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(req: Request) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: "All fields are required" });
  }
  await dbConnection();

  const find = await Admin.findOne({ email });

  if (!find) {

    const hashPassword = bcrypt.hashSync(password, 10)

    try {
      const admin = await Admin.create({
        email,
        password: hashPassword,
        isAdmin: true,
      });
      console.log(admin);
      return NextResponse.json({ success: "Created" });
    } catch (error) {
      console.log(error);
      return;
    }
  } else{
    return NextResponse.json({error: "User already available with this email."})
  }
}
