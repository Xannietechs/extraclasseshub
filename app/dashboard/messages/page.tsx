"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, ArrowLeft } from "lucide-react"

const conversations = [
  {
    id: 1,
    name: "Jane Smith",
    role: "Mathematics Tutor",
    avatar: "/avatars/jane.png",
    lastMessage: "See you in tomorrow's class!",
    time: "2m ago",
    unread: true,
  },
  {
    id: 2,
    name: "John Brown",
    role: "Physics Tutor",
    avatar: "/avatars/john.png",
    lastMessage: "Great progress in today's session.",
    time: "1h ago",
    unread: false,
  },
  {
    id: 3,
    name: "Sarah Wilson",
    role: "Chemistry Tutor",
    avatar: "/avatars/sarah.png",
    lastMessage: "Don't forget to review the study material.",
    time: "2h ago",
    unread: true,
  },
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [showConversation, setShowConversation] = useState(false)

  const handleConversationSelect = (conversation: typeof conversations[0]) => {
    setSelectedConversation(conversation)
    setShowConversation(true)
  }

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-6">
      {/* Conversation List */}
      <Card className={`w-full md:w-1/3 p-4 flex flex-col ${showConversation ? 'hidden md:flex' : 'flex'}`}>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search messages..."
              className="pl-9"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-auto space-y-2">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => handleConversationSelect(conversation)}
              className={`w-full p-3 rounded-lg text-left transition-colors ${
                selectedConversation.id === conversation.id
                  ? "bg-muted"
                  : "hover:bg-muted/50"
              }`}
            >
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={conversation.avatar} />
                  <AvatarFallback>
                    {conversation.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{conversation.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {conversation.role}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {conversation.time}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Card>

      {/* Conversation View */}
      <Card className={`flex-1 p-4 flex flex-col ${showConversation ? 'flex' : 'hidden md:flex'}`}>
        {selectedConversation ? (
          <>
            <div className="flex items-center gap-4 pb-4 border-b">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setShowConversation(false)}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarImage src={selectedConversation.avatar} />
                <AvatarFallback>
                  {selectedConversation.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{selectedConversation.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {selectedConversation.role}
                </p>
              </div>
            </div>

            <div className="flex-1 py-4">
              {/* Messages will be displayed here */}
            </div>

            <div className="flex gap-2 pt-4 border-t">
              <Input placeholder="Type a message..." />
              <Button>Send</Button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            Select a conversation to start messaging
          </div>
        )}
      </Card>
    </div>
  )
}