import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
  const formData = await request.formData()

  const file = formData.get("file") as File || null;
  console.log(file);

  const s3Client = new S3Client({
    region: "auto",
    endpoint: `${process.env.CLOUDFLARE_ENDPOINT}`,
    credentials: {
      accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY || ""
    },
    forcePathStyle: true
  })

  const files = []

  const fileName = `${Math.floor(Math.random()*100)}pr_one`

  const uploadParams = {
    Bucket: process.env.CLOUDFLARE_BUCKET_NAME,
    Key: fileName,
    Body: Buffer.from(await file.arrayBuffer()),
    ContentType: file.type
  }

  await s3Client.send(new PutObjectCommand(uploadParams))
  const url = `${process.env.CLOUDFLARE_PUBLIC_URL}/${fileName}`
files.push({fileName, url})
console.log(files);

return NextResponse.json({files})


}