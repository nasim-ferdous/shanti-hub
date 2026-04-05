"use client";
import { useState, useRef, useEffect } from "react";
import { Bot, Send, User } from "lucide-react";

export default function AiChat() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    [],
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      // ডাটা আসছে কি না তা কনসোলে চেক করার জন্য (F12 চেপে দেখুন)
      console.log("AI Response Data:", data);

      if (res.ok && data.text) {
        setMessages((prev) => [...prev, { role: "ai", text: data.text }]);
      } else {
        // যদি এরর মেসেজ থাকে তবে সেটি দেখানো
        const errorMsg =
          data.details || data.error || "আমি উত্তর খুঁজে পাচ্ছি না।";
        setMessages((prev) => [
          ...prev,
          { role: "ai", text: `এরর: ${errorMsg}` },
        ]);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "সার্ভারের সাথে কানেক্ট করা যাচ্ছে না।" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl border border-primary/20 h-[500px] flex flex-col">
      <div className="bg-primary p-4 text-primary-content flex items-center gap-2 rounded-t-2xl font-bold">
        <Bot size={24} /> AI শান্তিসঙ্গী
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <p className="text-center text-neutral/40 mt-10">
            আমি আপনাকে কীভাবে সাহায্য করতে পারি?
          </p>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat ${msg.role === "user" ? "chat-end" : "chat-start"}`}
          >
            <div className="chat-bubble">{msg.text}</div>
          </div>
        ))}
        {loading && (
          <div className="loading loading-dots loading-sm ml-4"></div>
        )}
        <div ref={scrollRef} />
      </div>

      <form onSubmit={handleSend} className="p-4 border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="আপনার কথা লিখুন..."
          className="input input-bordered flex-1 rounded-xl focus:outline-none"
        />
        <button
          type="submit"
          className="btn btn-primary btn-circle shadow-lg"
          disabled={loading}
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}
