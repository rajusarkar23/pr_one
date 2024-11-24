import dbConnection from "@/lib/db";
import { Admin } from "@/models/admin.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: "All fields are required" });
  }
  await dbConnection();

  const find = await Admin.findOne({ email });
  if (!find) {
    return NextResponse.json({ error: "Admin not found" });
  }
  const dbpass = find.password;
  const comparePassword = bcrypt.compareSync(password, dbpass);
  const token = jwt.sign(
    { adminId: find._id },
    `${process.env.ADMIN_JWT_SECRET}`
  );
  if (comparePassword) {
    (await cookies()).set("access", token);
    return NextResponse.json({ success:true });
  } else {
    return NextResponse.json({ error: "Wrong crdentials" });
  }
}
