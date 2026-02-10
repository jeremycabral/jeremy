"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import profilePic from "../../../Advisory Services/src/assets/4d3a20915779a0aa9be4b813fd1f75dbed9f11b3.png";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "system" | "user"; text: string }[]
  >([
    {
      role: "system",
      text: "Hi! I'm part of Jeremy's team. How can we help you scale today?",
    },
  ]);
  const [input, setInput] = useState("");
  const profileSrc = typeof profilePic === "string" ? profilePic : profilePic.src;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", text: input }]);
    setInput("");

    // Simulate auto-response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          text: "Thanks for reaching out! A member of our team will be with you shortly.",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 sm:w-96 mb-4 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-orange-500 overflow-hidden border-2 border-white">
                    <img
                      src={profileSrc}
                      alt="Jeremy's Team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></div>
                </div>
                <div>
                  <div className="font-bold text-sm">Jeremy&apos;s Team</div>
                  <div className="text-xs text-gray-400">
                    Typically replies in 5m
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 h-80 overflow-y-auto bg-gray-50 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-orange-600 text-white self-end rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 self-start rounded-bl-none shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-3 bg-white border-t border-gray-100 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-sm"
              />
              <button
                type="submit"
                className="p-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-all hover:scale-105 flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}
