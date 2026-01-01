"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Interfaces for chat
export interface ChatOption {
  label: string;
  value: string;
  answer: string;
}

export interface ChatMessage {
  id: number;
  question: string;
  answer?: string;
  options?: ChatOption[];
}

// Rohtak location data from @conatct.tsx
const ROHTAK_MAP = {
  label: "Rohtak (Main Centre)",
  address:
    "Narula Diagnostic Centre-MRI/ PET-CT /128 slice CT Scan/Digital X-Rays/Mammography/4D Ultrasound/ Path Lab in Rohtak",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6986.044964220024!2d76.583384!3d28.89768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d85bb4ba0c1b5%3A0x327b18fff5f1b8d9!2sNarula%20Diagnostic%20Centre-MRI%2F%20PET-%20CT%20%2F128%20slice%20CT%20Scan%2FDigital%20X-Rays%2FMammography%2F4D%20Ultrasound%2F%20Path%20Lab%20in%20Rohtak!5e0!3m2!1sen!2sin!4v1760265563977!5m2!1sen!2sin",
  mapUrl: "https://maps.app.goo.gl/6xQpkGwwxTtZvy8C9",
};

export const chatMessages: ChatMessage[] = [
  {
    id: 1,
    question: "Hi",
    answer: "Hello 👋 How can I help you today?",
    options: [
      { label: "Book a Test", value: "book_test", answer: "You can book a test by filling this chat form or calling our support team." },
      { label: "Location", value: "location", answer: "Please select your nearest location:" },
      { label: "Help", value: "help", answer: "How can we assist you? Please describe your issue below or continue chatting." }
    ],
  },
  {
    id: 2,
    question: "Location",
    answer: "Please select your nearest location:",
    options: [
      {
        label: "Rohtak",
        value: "rohtak",
        answer:
          "📍 Narula Diagnostics – Rohtak\nAddress: Narula Diagnostic Centre-MRI/ PET-CT /128 slice CT Scan/Digital X-Rays/Mammography/4D Ultrasound/ Path Lab in Rohtak\n📞 Phone: 99999 11111",
      },
      {
        label: "Gurugram",
        value: "gurugram",
        answer:
          "📍 Narula Diagnostics – Gurugram\nAddress: ABC Sector, Gurugram\n📞 Phone: 99999 22222",
      },
    ],
  },
  {
    id: 3,
    question: "How can I book a test?",
    answer:
      "You can book a test by filling this chat form or calling our support team.",
  },
];

export default function FloatingChat() {
  // === Main chat window closed by default, greeting bubble visible by default ===
  const [isOpen, setIsOpen] = useState(false); // closed by default
  const [showGreeting, setShowGreeting] = useState(true);

  // Controls if user has interacted (triggered) chat, for greeting only
  const [greeted, setGreeted] = useState(false);

  // Chat state & step
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string; stepId?: number }[]>([]);
  const [chatStep, setChatStep] = useState(1);
  const [showLocationMap, setShowLocationMap] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function t(key: string): string {
    const translations: Record<string, string> = {
      "chat.success.title": "Thank You!",
      "chat.success.description": "Your message has been sent. We will get back to you soon.",
      "chat.button.close": "Close chat",
      "chat.button.open": "Open chat",
    };
    return translations[key] || key;
  }

  // On mount, fully reset the chat and show the greeting bubble
  useEffect(() => {
    setIsOpen(false);
    setGreeted(false);
    setMessages([]);
    setChatStep(1);
    setShowLocationMap(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitted(false);
    setShowGreeting(true);
  }, []);

  // When chat is opened, close greeting bubble
  useEffect(() => {
    if (isOpen) setShowGreeting(false);
  }, [isOpen]);

  // When user starts chat, open, greet & set chat to greeted
  const toggleChat = () => {
    setIsOpen((prev) => !prev);
    if (!greeted) {
      setMessages([{ from: "bot", text: chatMessages[0].answer || "Hello 👋 How can I help you today?", stepId: 1 }]);
      setGreeted(true);
      setChatStep(1);
      setShowLocationMap(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitted(false);
    }
  };

  function handleGreeting() {
    setGreeted(true);
    setMessages([{ from: "bot", text: chatMessages[0].answer || "", stepId: 1 }]);
    setChatStep(1);
    setShowLocationMap(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitted(false);
  }

  const handleUserOption = (option: ChatOption, chatMsg: ChatMessage) => {
    // If "greeting" present, clear it and proceed with conversation
    if (!greeted) handleGreeting();

    if (chatMsg.id === 1) {
      setMessages((prev) => [
        ...prev,
        { from: "user", text: option.label, stepId: 1 },
        { from: "bot", text: option.answer, stepId: option.value === "book_test" ? 3 : option.value === "location" ? 2 : 4 },
      ]);
      if (option.value === "location") {
        setChatStep(2);
      } else if (option.value === "book_test") {
        setChatStep(3);
      } else if (option.value === "help") {
        setChatStep(4);
      }
      setShowLocationMap(false);
    } else if (chatMsg.id === 2) {
      setMessages((prev) => [
        ...prev,
        { from: "user", text: option.label, stepId: 2 },
        { from: "bot", text: option.answer, stepId: 5 },
      ]);
      setChatStep(5);
      if (option.value === "rohtak") {
        setShowLocationMap(true);
      } else {
        setShowLocationMap(false);
      }
    }
  };

  function renderChatContent() {
    let currentChatMsg: ChatMessage | undefined;
    if (chatStep === 1) {
      currentChatMsg = chatMessages[0];
    } else if (chatStep === 2) {
      currentChatMsg = chatMessages[1];
    }

    return (
      <>
        {!greeted && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#04c3ff] to-[#34bbf7] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-[#06A8E3] text-lg">
                Hi, how can I help you?
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {chatMessages[0].options?.map((option) => (
                <Button
                  variant="outline"
                  key={option.value}
                  onClick={() => handleUserOption(option, chatMessages[0])}
                  className="justify-start w-full border-[#BCE6F6] text-[#099fde] hover:bg-[#eaf7fd]"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Actual chat history shown if user responds (greeted = true) */}
        {greeted && (
          <>
            <div className="space-y-2 mb-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.from === "bot" ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.12 }}
                  className={
                    msg.from === "bot"
                      ? "bg-[#eaf7fd] rounded-lg p-2 text-sm text-[#035b83] max-w-fit"
                      : "bg-gradient-to-r from-[#34C6F9] to-[#06a7e2] text-white rounded-lg p-2 text-sm ml-auto max-w-fit font-medium"
                  }
                  style={
                    msg.from === "user"
                      ? { alignSelf: "flex-end" }
                      : { alignSelf: "flex-start" }
                  }
                >
                  {msg.text.split("\n").map((t, i) => (
                    <span key={i}>
                      {t}
                      {i < msg.text.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </motion.div>
              ))}

              {showLocationMap && (
                <div className="flex flex-col mt-3 gap-1 items-stretch">
                  <span className="font-semibold text-[#099fde] text-[15px]">
                    {ROHTAK_MAP.label}
                  </span>
                  <span className="text-xs text-gray-500">{ROHTAK_MAP.address}</span>
                  <a
                    className="text-cyan-700 text-xs underline mb-1"
                    href={ROHTAK_MAP.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View in Google Maps
                  </a>
                  <iframe
                    src={ROHTAK_MAP.mapEmbedUrl}
                    width="100%"
                    height="140"
                    loading="lazy"
                    className="rounded shadow-sm border"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Rohtak Location Map"
                  />
                </div>
              )}
            </div>
            {/* Options after step 1 */}
            {(chatStep === 1 && chatMessages[0]?.options) && (
              <div className="flex flex-col gap-2 mb-4">
                {chatMessages[0].options.map((option, optIdx) => (
                  <Button
                    variant="outline"
                    key={option.value}
                    onClick={() => handleUserOption(option, chatMessages[0])}
                    className="justify-start w-full border-[#BCE6F6] text-[#099fde] hover:bg-[#eaf7fd]"
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            )}
            {/* Location step */}
            {(chatStep === 2 && chatMessages[1]?.options) && (
              <div className="flex flex-col gap-2 mb-4">
                {chatMessages[1].options.map((option, optIdx) => (
                  <Button
                    variant="outline"
                    key={option.value}
                    onClick={() => handleUserOption(option, chatMessages[1])}
                    className="justify-start w-full border-[#BCE6F6] text-[#099fde] hover:bg-[#eaf7fd]"
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            )}
            {/* Show form if user clicked "Book a Test" (step 3) or after location answer */}
            {(chatStep === 3 || chatStep === 5) && (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-3"
              >
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="text-sm"
                  autoComplete="name"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="text-sm"
                  autoComplete="email"
                />
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="text-sm"
                  autoComplete="tel"
                />
                <Textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  className="text-sm resize-none"
                  rows={3}
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#34C6F9] to-[#06a7e2] hover:from-[#06a7e2] hover:to-[#34C6F9] text-white text-sm"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send
                </Button>
              </motion.form>
            )}
            {/* "Help" Option: free text, still show the form */}
            {chatStep === 4 && (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-3"
              >
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="text-sm"
                  autoComplete="name"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="text-sm"
                  autoComplete="email"
                />
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="text-sm"
                  autoComplete="tel"
                />
                <Textarea
                  placeholder="How can we assist you?"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  className="text-sm resize-none"
                  rows={3}
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#34C6F9] to-[#06a7e2] hover:from-[#06a7e2] hover:to-[#34C6F9] text-white text-sm"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send
                </Button>
              </motion.form>
            )}
          </>
        )}
      </>
    );
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setChatStep(1);
      setGreeted(false);
      setMessages([]);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setShowLocationMap(false);
      setShowGreeting(true); // Show greeting again after submit, as per new spec
    }, 3000);
  };

  // --- Floating chat UI LIGHT BLUE THEME ---
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* 3. The Greeting Bubble */}
      <AnimatePresence>
        {!isOpen && showGreeting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative mb-4 bg-gradient-to-br from-[#eaf7fd] to-white  text-[#097fdc] p-5 rounded-[20px] shadow-2xl border border-[#BCE6F6] max-w-[280px] cursor-pointer"
            onClick={toggleChat}
          >
            <p className="text-[17px] leading-relaxed font-medium">
              Hi there! 👋 How can we help you at Narula Diagnostics?
            </p>
            {/* The Triangle Tail */}
            <div className="absolute -bottom-2 right-6 w-5 h-5 bg-[#eaf7fd] rotate-45 border-r border-b border-[#BCE6F6]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white rounded-xl shadow-2xl w-80 max-h-[90vh] overflow-y-auto border border-[#BCE6F6]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#34C6F9] to-[#06a7e2] text-white p-4 flex justify-between items-center rounded-t-xl">
              <h3 className="font-semibold">Chat with us</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            {/* Content */}
            <div className="p-4">
              {!isSubmitted ? (
                renderChatContent()
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-green-600 text-2xl"
                    >
                      ✓
                    </motion.div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t("chat.success.title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("chat.success.description")}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. The Floating Action Button (FAB) with Blue Theme */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className="w-16 h-16 bg-gradient-to-br from-[#34C6F9] to-[#06a7e2] text-white rounded-full shadow-2xl flex items-center justify-center transition-colors duration-300 relative border-2 border-white"
        aria-label={isOpen ? t("chat.button.close") : t("chat.button.open")}
        type="button"
      >
        <MessageCircle className="w-8 h-8 fill-none stroke-[2px]" />
      </motion.button>
    </div>
  );
}
