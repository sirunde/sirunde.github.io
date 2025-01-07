// import { z } from "zod"
// import {
//   S3Client,
//   ListObjectsV2Command,
//   // PutObjectCommand,
// } from "@aws-sdk/client-s3";

// const MAX_FILE_SIZE = 5_000_000;
// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
// const formSchema = z.object({
//   imagefile: z
//     .any()
//     .refine((files) => files?.length == 1, `Image is required.`)
//     .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
//     .refine(
//       (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
//       ".jpg, .jpeg, .png and .webp files are accepted."
//     ),
//   folder: z.string(),
//   filename: z.string().min(2, {
//     message: "Filename must be at least 2 characters.",
//   }),
//   description: z.string().min(2, {
//     message: "Description must be in 2 - 200 characters.",
//   }).max(200, {
//     message: "Description must be at most 200 characters.",
//   })
// })

// export async function POST(req: Request) {
//   const parsed = await req.formData();
//   const validation = formSchema.safeParse({
//     imagefile: parsed.getAll('imagefile'),
//     folder: parsed.getAll('folder')[0],
//     filename: parsed.getAll('filename')[0],
//     description: parsed.getAll('description')[0],
//   });
//   //   const file = parsed.getAll('imagefile')[0]
//   //   const description = parsed.getAll('description')
//   //   const filename = parsed.getAll('filenmae')
//   console.log(validation)
//   console.log(parsed.get('imagefile')?.toString());
//   if (validation.success) {
    
//     const a = JSON.stringify({ tes: 'Successfully uploaded!' })
//     console.log(a)
//     return new Response(a)
//   }
//   else {
//     const a = JSON.stringify({ tes: `Failed to upload!\n${validation.error.message["message"]}` })
//     console.log(a)
//     return new Response(a)
//   }

// }
// export async function GET() {
//   const s3 = new S3Client({
//     region: process.env.region,
//     credentials: {
//       'accessKeyId': process.env.showLIstkey,
//       'secretAccessKey': process.env.showLIstSecret
//     }
//   })
//   const command = new ListObjectsV2Command({
//     Bucket: "udalia",
//     // The default and maximum number of keys returned is 1000. This limits it to
//     // one for demonstration purposes.
//     MaxKeys: 10,
//     Delimiter: "/"
//   });
//   let contents = [];

//   try {
//     let isTruncated = true;

//     console.log("Your bucket contains the following folders:\n");

//     while (isTruncated) {
//       const results =
//         await s3.send(command);
//       // console.log(results)
//       const contentsList = results.CommonPrefixes?.map((c) => { return { "value": "folder", "label": c.Prefix } });
//       contents.push.apply(contents, contentsList);
//       isTruncated = results.IsTruncated;
//       command.input.ContinuationToken = results.NextContinuationToken;
//     }
//   } catch (err) {
//     console.error(err);
//     return new Response(JSON.stringify({ error: `invalid request, ${err}` }))
//   }
//   return await new Response(JSON.stringify({contents}))

// }