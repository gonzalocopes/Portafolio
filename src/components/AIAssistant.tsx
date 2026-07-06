"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, Bot, User, Minimize2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");

  const chatHook = useChat();
  const { messages, status, sendMessage } = chatHook;

  const isLoading = status === "streaming" || status === "submitted";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    console.log("chatHook keys:", Object.keys(chatHook));
    console.log("Current messages:", messages);
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("open-chat", handleOpenChat);
    return () => window.removeEventListener("open-chat", handleOpenChat);
  }, []);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;
    
    if (sendMessage) {
      sendMessage({ id: Date.now().toString(), role: "user", parts: [{ type: 'text', text: input }] });
    }
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 group flex items-center gap-3 z-50"
          >
            <div className="hidden md:block px-4 py-2 bg-white/10 backdrop-blur-md border border-[var(--color-neon-purple)]/50 text-white text-sm rounded-full shadow-[0_0_15px_rgba(168,85,247,0.3)] whitespace-nowrap overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
              ¡Habla con mi IA! ✨
            </div>
            <div className="p-4 rounded-full bg-[var(--color-neon-purple)] text-white shadow-[0_0_20px_var(--color-neon-purple)] group-hover:shadow-[0_0_30px_var(--color-neon-purple)] group-hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 animate-pulse" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] glass rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden z-50 backdrop-blur-xl bg-[#0a0a14]/90"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[var(--color-neon-purple)]/20 to-[var(--color-neon-blue)]/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-[var(--color-neon-purple)]/20 text-[var(--color-neon-purple)]">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white flex items-center gap-2">
                    Gonza AI <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  </h3>
                  <p className="text-xs text-gray-400">Asistente Virtual</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/20">
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl p-3 bg-white/5 border border-white/10 text-gray-200 rounded-bl-none">
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">¡Hola! Soy Gonza AI, el asistente virtual de Gonzalo. ¿En qué te puedo ayudar hoy? Pregúntame sobre su experiencia, proyectos o cómo contactarlo.</p>
                </div>
              </div>
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-2xl p-3 ${
                    msg.role === "user" 
                      ? "bg-[var(--color-neon-blue)]/20 border border-[var(--color-neon-blue)]/30 text-white rounded-br-none" 
                      : "bg-white/5 border border-white/10 text-gray-200 rounded-bl-none"
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {msg.parts?.map((part: any) => part.type === 'text' ? part.text : '').join('') || (msg as any).content || ""}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 text-gray-200 rounded-2xl rounded-bl-none p-3 max-w-[80%]">
                    <div className="flex gap-1 items-center h-5">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/40">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pregúntame algo..."
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-2 text-sm text-white focus:outline-none focus:border-[var(--color-neon-blue)]/50 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-1.5 rounded-full text-gray-400 hover:text-[var(--color-neon-blue)] disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
