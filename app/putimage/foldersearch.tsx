// 'use server'
// import { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// import { z } from "zod"
// import {
//   S3Client,
//   ListObjectsV2Command,
//   PutObjectCommand,
// } from "@aws-sdk/client-s3";

// const s3 = new S3Client({
//   region: process.env.region,
//   credentials: {
//     'accessKeyId': process.env.showLIstkey,
//     'secretAccessKey': process.env.showLIstSecret
//   }
// })

export default function folderForm() {
  // 2. Define a submit handler.
  // const response = await fetch('http://localhost:3000/api/putimage', { method: 'GET' });
  // if (!response.ok) {
  //   throw new Error('Failed to fetch data');
  // }
  // return response.json();
  const folders = {
    contents: [
      { label: "Folder 1" },
      { label: "Folder 2" },
      { label: "Folder 3" }
    ]
  };
  return folders
}