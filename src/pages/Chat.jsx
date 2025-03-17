import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { AppLayout } from "../components/layout/AppLayout";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you?", sender: "bot" },
    { id: 2, text: "I need information about staff.", sender: "user" },
  ]);

  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: input, sender: "user" },
      ]);
      setInput("");
    }
  };

  return (
    <AppLayout className="h-full">
      <Card className="w-full h-[92vh] flex flex-col justify-between mx-auto p-4 border rounded-lg shadow-md">
        <div className="h-[100%] overflow-y-auto space-y-3 p-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-2 max-w-xs ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white ml-auto rounded-l-lg rounded-br-lg"
                  : "bg-gray-200 text-black rounded-r-lg rounded-bl-lg"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-4 border-t pt-2">
          <Input
            className="flex-1"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            onClick={handleSendMessage}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </Card>
    </AppLayout>
  );
};

export default Chat;
