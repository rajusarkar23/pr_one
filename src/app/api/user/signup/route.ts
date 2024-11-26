import dbConnection from "@/lib/db";
import { User } from "@/models/user.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "All fields are required" });
  }
  await dbConnection();

  const find = await User.findOne({ email });
  if (!find) {
    const hashPassword = bcrypt.hashSync(password, 10);
    try {
      const user = await User.create({
        email,
        password: hashPassword,
      });
      const token = jwt.sign({userId: user._id}, `${process.env.USER_JWT_SECRET}`)

      if (user) {
        (await cookies()).set("u-session", token)
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({error: "Unable tp create user. Please try again."})
    } catch (error) {
      console.log(error);
    }
  }
  return NextResponse.json({
    message: "User already registered with this email.",
  });
}
