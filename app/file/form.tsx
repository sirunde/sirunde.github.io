'use client';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRef, useState } from "react"
import {useDropzone} from 'react-dropzone'
import React, {useCallback} from 'react'

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const formSchema = z.object({
  imagefile: z
    .any()
    .refine((files) => files?.length == 1, `Image is required.`)
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  folder: z.string(),
  filename: z.string().min(2, {
    message: "Filename must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be in 2 - 200 characters.",
  }).max(200, {
    message: "Description must be at most 200 characters.",
  })
})

export default function ProfileForm({folders}: { folders: { contents: { label: string }[] } }) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      folder: "",
      filename: "",
      description: "",
    },
  })
  const fileRef = form.register('imagefile', { required: true });
  const inputFile = useRef(null);
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // This will be type-safe and validated.
    console.log("test")
    console.log(values)
    const formData = new FormData();
    formData.append("imagefile", values.imagefile[0])
    formData.append("folder", values.folder)
    formData.append("filename", values.filename)
    formData.append("description", values.description)
    // const a = await fetch('/api/putimage', { method: 'POST', body: formData });
    // const repo = await a.json()
    alert("This is a test, it does not upload")
  }

  const [urls, setFile] = useState<string|null>(null);
  const [files,setList] = useState<File|null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    setList(acceptedFiles[0]);
    const listFiles = acceptedFiles.map(file => (URL.createObjectURL(file)));
    setFile(listFiles[0]);
    form.setValue('imagefile',acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="imagefile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select File</FormLabel>
                <FormControl>
                  <section className="container">
                  <div {...getRootProps({className: 'dropzone'})}>
                    <input type='file' {...fileRef} {...getInputProps()} />
                    {
                      <p>Drag and drop a file here or {"click"}</p>
                    }
                    </div>
                  {/* <Input type="file" {...fileRef} onChange={handleChange} /> */}
                  </section>
                </FormControl>
                <FormDescription>
                  This is the name of your file.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {urls && <li>{files?.name}</li>
          }
          {/* <FolderSearch form = {form}/> */}
          <FormField control={form.control} name="folder" render={({ field }) => (
            <FormItem>
              <FormLabel>Folder</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={"test"} />
                  </SelectTrigger>
                  <SelectContent>
                    {folders.contents.map((foldering, index) => (
                      <SelectItem key={index} value={foldering.label}>
                        {foldering.label}
                      </SelectItem>
                    ))}
          </SelectContent>
                </Select>
              </FormControl>

              <FormDescription>
                This is the name of your folder.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )} />

          <FormField
            control={form.control}
            name="filename"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Filename</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Type name of your Item" />
                </FormControl>

                <FormDescription>
                  This is the name of your file.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="descripton of image" {...field} />
                </FormControl>
                <FormDescription>
                  This is the description of your file.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}