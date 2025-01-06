'use server'

import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod"
import {
  S3Client,
  ListObjectsV2Command,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.region,
  credentials: {
    'accessKeyId': process.env.showLIstkey,
    'secretAccessKey': process.env.showLIstSecret
  }
})

const command = new ListObjectsV2Command({
  Bucket: "udalia",
  // The default and maximum number of keys returned is 1000. This limits it to
  // one for demonstration purposes.
  MaxKeys: 10,
  Delimiter: "/"
});
let contents = [];

export default async function folderForm() {
  // 2. Define a submit handler.
  const response = await fetch('http://localhost:3000/api/putimage', { method: 'GET' });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}