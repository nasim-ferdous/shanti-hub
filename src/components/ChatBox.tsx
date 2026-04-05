"use client";
import { useState, useEffect, useRef } from "react";
import { Send, MessageCircle, Users } from "lucide-react"; // Users আইকন যোগ করা হয়েছে
import { io } from "socket.io-client";
import Swal from "sweetalert2";

// সকেট কানেকশন ইনিশিয়েলাইজ করা (সার্ভার পোর্ট ৩০০১)
const socket = io("http://localhost:3001");

export default function ChatBox({
  groupId,
  initialMessages,
}: {
  groupId: string;
  initialMessages: any[];
}) {
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState("");
  const [activeCount, setActiveCount] = useState(0); // লাইভ ইউজার কাউন্ট স্টেট
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ১. নির্দিষ্ট গ্রুপ রুমে জয়েন করা
    socket.emit("join-group", groupId);

    // ২. নতুন মেসেজ আসার লিসেনার
    socket.on("receive-message", (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    // ৩. লাইভ ইউজার কাউন্ট আপডেট লিসেনার
    socket.on("update-user-count", (count: number) => {
      setActiveCount(count);
    });

    // কম্পোনেন্ট আনমাউন্ট হলে লিসেনারগুলো বন্ধ করা
    return () => {
      socket.off("receive-message");
      socket.off("update-user-count");
    };
  }, [groupId]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    try {
      // প্রথমে ডাটাবেজে মেসেজটি সেভ করার জন্য API কল করা
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ groupId, text: inputText }),
      });

      if (res.ok) {
        // এখানে Swal.fire সরিয়ে ফেলাই ভালো কারণ প্রতি মেসেজে পপআপ বিরক্তিকর হতে পারে
        // তবে আপনি চাইলে ছোট টোস্ট ব্যবহার করতে পারেন
        const savedMessage = await res.json();

        // ডাটাবেজে সেভ সফল হলে সকেটের মাধ্যমে সবাইকে জানানো
        socket.emit("send-message", savedMessage);
        setInputText("");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex flex-col h-[550px] bg-base-100 rounded-2xl border border-base-300 shadow-sm overflow-hidden">
      
      {/* Header Area with Active Count */}
      <div className="p-4 border-b border-base-300 bg-base-100 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-lg">
          <MessageCircle className="text-primary" />
          <span>কমিউনিটি ডিসকাশন</span>
        </div>
        
        {/* লাইভ অনলাইন ইন্ডিকেটর */}
        <div className="flex items-center gap-2 bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium animate-pulse">
          <span className="w-2 h-2 bg-success rounded-full"></span>
          {activeCount} জন অনলাইনে
        </div>
      </div>

      {/* Messages List Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-base-200/20">
        {messages.length > 0 ? (
          messages.map((msg: any) => (
            <div key={msg._id} className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full border border-primary/10 shadow-sm">
                  <img src={msg.senderAvatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=neutral"} alt="avatar" />
                </div>
              </div>
              <div className="chat-header text-xs opacity-50 mb-1 ml-1">
                {msg.senderAlias}
              </div>
              <div className="chat-bubble bg-base-100 text-neutral border border-base-300 shadow-sm">
                {msg.text}
              </div>
            </div>
          ))
        ) : (
          <div className="h-full flex items-center justify-center text-neutral/30 italic">
            এখনো কোনো মেসেজ নেই... কথাবার্তা শুরু করুন!
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Input Area */}
      <form
        onSubmit={handleSendMessage}
        className="p-4 bg-base-100 border-t border-base-300 flex gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="আপনার মেসেজ লিখুন..."
          className="input input-bordered flex-1 rounded-xl focus:outline-none focus:border-primary transition-all"
        />
        <button type="submit" className="btn btn-primary btn-circle shadow-md hover:scale-105 transition-transform">
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}