import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from 'next/image'
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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRef, useState } from "react"
import ImageForm from "@/app/file/form"
import FolderSearch from "@/app/file/foldersearch"


export default function ProfileForm() {
  const folderslist = FolderSearch();
  console.log(folderslist)
  return (
    <div>
        <ImageForm folders={folderslist}/>
    </div>
  )
}