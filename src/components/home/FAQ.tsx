"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "আমার ডাটা কি সত্যিই নিরাপদ থাকবে?",
    answer:
      "হ্যাঁ, আমরা আপনার গোপনীয়তাকে সর্বোচ্চ অগ্রাধিকার দিই। আপনার প্রতিটি চ্যাট এন্ড-টু-এন্ড এনক্রিপ্টেড এবং আমাদের AI আপনার ব্যক্তিগত তথ্য কোথাও সেভ করে রাখে না।",
  },
  {
    question: "এআই কি বিশেষজ্ঞ ডাক্তারের বিকল্প?",
    answer:
      "না, আমাদের এআই 'শান্তি' একটি তাৎক্ষণিক মানসিক সহায়তা এবং গাইডেন্স টুল মাত্র। গুরুতর সমস্যায় আমরা সবসময় সরাসরি বিশেষজ্ঞের পরামর্শ নিতে উৎসাহিত করি।",
  },
  {
    question: "আমি কি সম্পূর্ণ পরিচয় গোপন রাখতে পারব?",
    answer:
      "অবশ্যই! আমাদের প্ল্যাটফর্মের মূল বৈশিষ্ট্যই হলো পরিচয় গোপন রেখে কথা বলা। আপনি আপনার ইউজারনেম ছাড়াই এননিমাসলি চ্যাট করতে পারবেন।",
  },
  {
    question: "এই সেবাটি কি সবার জন্য ফ্রি?",
    answer:
      "হ্যাঁ, আমাদের বেসিক এআই চ্যাট এবং কমিউনিটি গ্রুপগুলোতে যুক্ত হওয়া সবার জন্য সম্পূর্ণ ফ্রি।",
  },
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-white dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <HelpCircle className="w-6 h-6 text-primary" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black font-bengali tracking-tight">
            প্রশ্ন ও উত্তর
          </h2>
          <p className="mt-4 text-zinc-500 font-bengali">
            আপনার মনে থাকা সাধারণ কিছু প্রশ্নের উত্তর এখানে দেওয়া হলো
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                activeIndex === index
                  ? "border-primary bg-primary/[0.02] dark:bg-primary/[0.05]"
                  : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
              }`}
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
              >
                <span
                  className={`text-lg font-bold font-bengali ${activeIndex === index ? "text-primary" : "text-zinc-800 dark:text-zinc-200"}`}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    className={`w-5 h-5 ${activeIndex === index ? "text-primary" : "text-zinc-400"}`}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 font-bengali leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
