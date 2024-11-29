import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export async function getCurrentLogedInPerson() {
  const cookie = (await cookies()).get("access")?.value;
  if (!cookie) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const decode = jwt.verify(cookie, `${process.env.ADMIN_JWT_SECRET}`);
  //@ts-ignore
  const logedInPerson = decode.adminId;

  return logedInPerson;
}
