'use client'
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
import { useState,useEffect } from "react"
export default function CardWithForm() {
  const [newMessage, setNewMessage] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id,setId] = useState("user")
  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('test')
        const response = await fetch('https://4dqmu7fn6wa2pdf3irlyorc4y40lzikh.lambda-url.us-east-1.on.aws/');
        const data = await response.json();
        setMsgs(data); // Assuming 'data' is an array of messages
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once after the first render

  const sendtoServer = async (message:string,timeNow:string) => {
    try {
      const response = await fetch('https://4dqmu7fn6wa2pdf3irlyorc4y40lzikh.lambda-url.us-east-1.on.aws/', {
        method: "POST",
        body: JSON.stringify({id:id ,time: timeNow , message:message }), 
      });
      console.log('Lambda response:', response.data);
    } catch (error) {
      console.error('Error sending message to Lambda:', error);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const currentTime = Date.now().toString();
    if (newMessage.trim()) {
      setMsgs((prevMsgs) => [
        ...prevMsgs,
        { role: 'you', time:currentTime, message: newMessage},
      ]
      
    );
      await sendtoServer(newMessage, currentTime);
      setNewMessage(""); // Clear the input field
    }
  };
  return (
<div className="flex flex-row justify-center min-h-10 px-4 py-8 sm:px-6">
<Card className="h-[65vh] w-[25vw] max-w-[70vw] min-h-[500px] min-w-[300px] flex flex-col">
  <CardHeader>
    <CardTitle>Chat</CardTitle>
    <CardDescription>Chats are stored and loaded from AWS DynamoDB.</CardDescription>
  </CardHeader>
  <CardContent className="flex-grow overflow-hidden">
    {/* Removed absolute and ensured the scroll area fits the parent */}
    <ScrollArea className="rounded-md border h-full w-full overflow-y-auto">
      <div className="grid w-full items-start px-4 py-4 gap-4">
        {msgs.sort((a,b) => a.time.localeCompare(b.time)).map((msg, index) =>
          msg.message ? (
            <div
              key={index}
              className={`flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ${
                msg.role === "you" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"
              }`}
            >
              {msg.message}
            </div>
          ) : null
        )}
      </div>
    </ScrollArea>
  </CardContent>
    <CardFooter className="flex flex-col justify-between gap-3">
    <Input value = {id} onChange={(e) => setId(e.target.value)} form="chatForm" placeholder="user"/>
    <form onSubmit={sendMessage} id='chatForm' className="flex w-full items-center space-x-2">
      
      <Input value = {newMessage} onChange={(e) => setNewMessage(e.target.value)}  form="chatForm"/>
      <Button type="submit" form="chatForm">Submit</Button>
    </form>

    </CardFooter>
  </Card>
</div>

  )
  
}
