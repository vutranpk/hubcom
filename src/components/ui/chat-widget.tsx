"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { usePathname } from "next/navigation";

interface Message {
  id: string;
  text: string;
  isAi: boolean;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hello! I'm Hubi, Hubcom's AI assistant. How can I help you today?", isAi: true }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Hide if in the first 80% of the screen height (Hero section)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMsg: Message = { id: Date.now().toString(), text: inputValue, isAi: false };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue("");

    // Simulate AI typing and response
    setTimeout(() => {
      const aiResponse: Message = { 
        id: (Date.now() + 1).toString(), 
        text: "Thanks for reaching out! This is a demo interface. Our team will connect a live AI backend here soon.", 
        isAi: true 
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  if (pathname.startsWith("/another-me")) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-[9999] pointer-events-none transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-24 right-6 w-[350px] h-[500px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-8rem)] bg-[#0A0D14] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-[#05070B] border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[#3B82F6]/20 flex items-center justify-center border border-[#3B82F6]/30">
                  <Bot className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#05070B] rounded-full"></div>
              </div>
              <div>
                <h3 className="font-serif text-sm text-white font-medium">Hubi AI</h3>
                <p className="text-[10px] text-green-400 font-mono tracking-widest uppercase">Online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-[#94A3B8] hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.isAi ? "self-start" : "self-end ml-auto flex-row-reverse"}`}>
                <div className="w-6 h-6 shrink-0 rounded-full flex items-center justify-center mt-1">
                  {msg.isAi ? (
                    <div className="w-full h-full rounded-full bg-[#3B82F6]/20 flex items-center justify-center border border-[#3B82F6]/30">
                      <Bot className="w-3 h-3 text-[#3B82F6]" />
                    </div>
                  ) : (
                    <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center border border-white/5">
                      <User className="w-3 h-3 text-white/70" />
                    </div>
                  )}
                </div>
                <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.isAi 
                    ? "bg-white/5 border border-white/5 text-[#E2E8F0] rounded-tl-none" 
                    : "bg-[#3B82F6] text-white rounded-tr-none shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-[#05070B] border-t border-white/10">
            <form onSubmit={handleSend} className="relative flex items-center">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Hubi anything..." 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#3B82F6]/50 focus:ring-1 focus:ring-[#3B82F6]/50 transition-all"
              />
              <button 
                type="submit" 
                disabled={!inputValue.trim()}
                className="absolute right-2 w-8 h-8 rounded-full bg-[#3B82F6] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
              >
                <Send className="w-4 h-4 -ml-0.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute bottom-6 right-6 pointer-events-auto w-14 h-14 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-110 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 group"
      >
        {isOpen ? (
          <X className="w-6 h-6 animate-in spin-in duration-300" />
        ) : (
          <MessageSquare className="w-6 h-6 animate-in zoom-in duration-300" />
        )}
      </button>
    </div>
  );
}
