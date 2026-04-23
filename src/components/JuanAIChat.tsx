import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ArrowUp } from "lucide-react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const JuanAIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hi, I'm Juan, the Membership Engagement Officer AI Agent for FCHCC! How may I assist you today?",
    },
  ]);

  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: inputText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        sender: "ai",
        text: getAIResponse(inputText),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("help") || lowerInput.includes("grow")) {
      return "Hello! It seems like you want to contribute to FCHCC. You can Donate to Our Scholarship Program or join as a volunteer. How can I help you further?";
    }
    if (lowerInput.includes("join") || lowerInput.includes("member")) {
      return "Joining FCHCC is easy! We have various membership levels. Would you like to see the benefits of each level?";
    }
    if (lowerInput.includes("contact") || lowerInput.includes("email")) {
      return "You can reach us at fchcc@fchcc.com or call our office during business hours. We'd love to hear from you!";
    }
    return "That's interesting! Tell me more about that, or ask me anything about FCHCC memberships and events.";
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] sm:h-[600px] bg-white rounded-[32px] shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e88e5] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 border-2 border-white/20">
                  <AvatarImage src="/images/Juan.png" alt="Juan AI" className="object-cover" />
                  <AvatarFallback>J</AvatarFallback>
                </Avatar>
                <div className="text-white">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-[16px]">Juan</span>
                    <span className="bg-[#1E88E5] border border-white/40 text-[10px] px-1 rounded uppercase font-bold">AI</span>
                  </div>
                  <p className="text-[11px] opacity-90 leading-tight">FCHCC Membership Engagement ...</p>
                </div>
              </div>
              <button onClick={toggleChat} className="text-white/80 hover:text-white transition-all hover:scale-110">
                <div className="bg-white/10 p-1 rounded-md">
                  <X size={18} />
                </div>
              </button>
            </div>

            {/* Chat Body */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 space-y-6 bg-white custom-scrollbar"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-[20px] text-[14px] leading-relaxed shadow-sm ${msg.sender === "user"
                        ? "bg-[#E3F2FD] text-[#1E3A8A] rounded-tr-none"
                        : "bg-white border border-gray-100 text-gray-800 rounded-tl-none"
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-50 border border-gray-100 p-3 rounded-[20px] rounded-tl-none">
                    <div className="flex gap-1">
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Input */}
            <form onSubmit={handleSendMessage} className="p-5 bg-white border-t border-gray-50">
              <div className="relative flex items-center bg-[#F1F5F9] rounded-2xl px-4 py-2">
                <div className="text-[#1E3A8A]/50 mr-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.51a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="bg-transparent border-none outline-none flex-1 text-[14px] text-gray-700 placeholder:text-gray-400 py-3"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="bg-[#A5F3FC] p-2.5 rounded-xl text-white hover:bg-[#22D3EE] shadow-md transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowUp size={20} strokeWidth={3} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized Bubble */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleChat}
          className="w-16 h-16 bg-gradient-to-tr from-[#1E3A8A] to-[#1E88E5] rounded-full shadow-lg flex items-center justify-center text-white relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <MessageCircle size={32} />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full" />
        </motion.button>
      )}
    </div>
  );
};

export default JuanAIChat;
