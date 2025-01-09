import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
export default function CardWithForm() {
  return (
<div className="flex flex-row justify-center px-4 py-8 sm:px-6">
  <Card className="w-[65vh] h-[70vh] flex flex-col">
    <CardHeader>
      <CardTitle>Chat</CardTitle>
      <CardDescription>going to store and load all the chats in AWS DynamoDB.</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <ScrollArea className="rounded-md border h-[90%] overflow-y-auto">
        <form>
          <div className="grid w-full items-center px-4 py-4 gap-4">
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
              test
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
              test
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
              test
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
              test
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
              test
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
              test
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
              test
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
              test
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
              test
            </div>
          </div>
        </form>
      </ScrollArea>
    </CardContent>
    <CardFooter className="flex justify-between gap-3">
      <Input />
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
</div>

  )
  
}
