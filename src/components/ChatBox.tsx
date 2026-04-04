"use client";
import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import Swal from "sweetalert2";

interface MessageType {
  _id: string;
  senderAlias: string;
  senderAvatar: string;
  text: string;
  createdAt: string;
}

export default function ChatBox({
  groupId,
  initialMessages,
}: {
  groupId: string;
  initialMessages: any[];
}) {
  const [messages, setMessages] = useState<MessageType[]>(initialMessages);
  const [inputText, setInputText] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // নতুন মেসেজ আসলে নিচে স্ক্রল করবে
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || sending) return;

    setSending(true);
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ groupId, text: inputText }),
      });

      if (res.ok) {
        Swal.fire("success", "মেসেজ পাঠানো হয়েছে!", "success");
        const newMessage = await res.json();
        setMessages([...messages, newMessage]);
        setInputText("");
      } else {
        Swal.fire("error", "মেসেজ পাঠানো যায়নি।", "error");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] bg-base-100 rounded-2xl border border-base-300 shadow-inner">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div key={msg._id} className="chat chat-start animate-fade-in">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full border border-primary/20">
                  <img
                    src={msg.senderAvatar || "https://via.placeholder.com/150"}
                    alt="Avatar"
                  />
                </div>
              </div>
              <div className="chat-header text-xs opacity-50 mb-1">
                {msg.senderAlias}
              </div>
              <div className="chat-bubble bg-base-200 text-neutral text-sm border border-base-300">
                {msg.text}
              </div>
            </div>
          ))
        ) : (
          <div className="h-full flex items-center justify-center text-neutral/30 italic">
            কথোপকথন শুরু করুন...
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Input Area */}
      <form
        onSubmit={handleSendMessage}
        className="p-4 bg-base-200/50 border-t border-base-300 flex gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="আপনার অনুভূতি শেয়ার করুন..."
          className="input input-bordered flex-1 rounded-xl focus:outline-none focus:border-primary"
        />
        <button
          type="submit"
          disabled={sending}
          className="btn btn-primary btn-circle shadow-lg"
        >
          {sending ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            <Send size={20} />
          )}
        </button>
      </form>
    </div>
  );
}
