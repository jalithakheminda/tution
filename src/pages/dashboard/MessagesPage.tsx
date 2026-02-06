import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Send, Phone, Video, MoreVertical, Paperclip, Smile } from "lucide-react";

const conversations = [
  { id: 1, name: "Dr. Sarah Johnson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", lastMessage: "Please submit your assignment by Friday", time: "2m ago", unread: 2 },
  { id: 2, name: "Alex Thompson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", lastMessage: "Thank you for the feedback!", time: "1h ago", unread: 0 },
  { id: 3, name: "Prof. Michael Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael", lastMessage: "The lab session is rescheduled", time: "3h ago", unread: 1 },
  { id: 4, name: "Maria Garcia", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria", lastMessage: "Can we discuss the project?", time: "1d ago", unread: 0 },
  { id: 5, name: "Ms. Emily Davis", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily", lastMessage: "Great work on the essay!", time: "2d ago", unread: 0 },
];

const messages = [
  { id: 1, sender: "Dr. Sarah Johnson", content: "Hello! How are you doing with the calculus problems?", time: "10:30 AM", isSelf: false },
  { id: 2, sender: "You", content: "Hi Dr. Johnson! I'm working through them now. I had a question about problem 5.", time: "10:32 AM", isSelf: true },
  { id: 3, sender: "Dr. Sarah Johnson", content: "Sure, what's your question?", time: "10:33 AM", isSelf: false },
  { id: 4, sender: "You", content: "I'm not sure how to approach the integration. Should I use substitution or integration by parts?", time: "10:35 AM", isSelf: true },
  { id: 5, sender: "Dr. Sarah Johnson", content: "For that particular problem, I'd recommend trying u-substitution first. Let u = x² + 1, and see where that leads you.", time: "10:38 AM", isSelf: false },
  { id: 6, sender: "Dr. Sarah Johnson", content: "Please submit your assignment by Friday", time: "10:40 AM", isSelf: false },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-6">
      {/* Conversations List */}
      <Card className="w-80 shrink-0">
        <CardHeader className="border-b p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search messages..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardHeader>
        <ScrollArea className="h-[calc(100%-5rem)]">
          <div className="p-2">
            {filteredConversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors ${
                  selectedConversation.id === conv.id
                    ? "bg-primary/10"
                    : "hover:bg-muted"
                }`}
              >
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={conv.avatar} />
                    <AvatarFallback>{conv.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {conv.unread > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                      {conv.unread}
                    </span>
                  )}
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{conv.name}</span>
                    <span className="text-xs text-muted-foreground">{conv.time}</span>
                  </div>
                  <p className="truncate text-sm text-muted-foreground">
                    {conv.lastMessage}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </Card>

      {/* Chat Area */}
      <Card className="flex flex-1 flex-col">
        {/* Chat Header */}
        <CardHeader className="flex flex-row items-center justify-between border-b p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={selectedConversation.avatar} />
              <AvatarFallback>{selectedConversation.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base">{selectedConversation.name}</CardTitle>
              <p className="text-sm text-muted-foreground">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isSelf ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                    message.isSelf
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p>{message.content}</p>
                  <p
                    className={`mt-1 text-xs ${
                      message.isSelf
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1"
            />
            <Button variant="ghost" size="icon">
              <Smile className="h-5 w-5" />
            </Button>
            <Button variant="hero" size="icon">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
