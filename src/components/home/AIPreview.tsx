"use client";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, BrainCircuit } from "lucide-react";

export const AIPreview = () => {
  return (
    <section className="py-24 bg-[#050505] text-white px-4 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side: Animated Chat Interface */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          {/* AI Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-600/50 rounded-[2.5rem] blur opacity-30 animate-pulse" />

          <div className="relative p-8 md:p-12 bg-zinc-900/80 border border-zinc-800 rounded-[2.5rem] backdrop-blur-xl">
            {/* Header of Chat Preview */}
            <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-wide">
                  শান্তি (AI Assistant)
                </p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    অনলাইন
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Bubbles */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-start"
              >
                <div className="max-w-[80%] p-4 bg-zinc-800 rounded-2xl rounded-tl-none text-sm md:text-base text-zinc-300">
                  আজকের দিনটি কেমন কাটল আপনার?
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col items-end"
              >
                <div className="max-w-[80%] p-4 bg-primary/20 border border-primary/30 rounded-2xl rounded-tr-none text-sm md:text-base text-primary-foreground font-bengali">
                  সত্যি বলতে, খুব একটা ভালো লাগছে না... একটু মানসিক চাপে আছি।
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="flex flex-col items-start"
              >
                <div className="max-w-[90%] p-5 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-2xl rounded-tl-none shadow-2xl">
                  <p className="text-primary text-xs font-bold mb-2 flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4" /> এআই উত্তর দিচ্ছে
                  </p>
                  <p className="text-base md:text-lg italic font-bengali leading-relaxed text-zinc-100">
                    "আমি বুঝতে পারছি আপনার আজকের দিনটি কঠিন যাচ্ছে। আপনি কি এই
                    বিষয়ে বিস্তারিত কথা বলতে চান? আমি আপনার কথা শুনছি।"
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <div className="space-y-8 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-black font-bengali leading-tight">
              বুদ্ধিমান <span className="text-primary">AI চ্যাট</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 font-bengali leading-relaxed">
              আমাদের AI মডেলটি বাংলা ভাষার ইমোশন এবং কন্টেক্সট বুঝতে বিশেষভাবে
              সক্ষম। এটি শুধু উত্তর দেয় না, বরং আপনার অনুভূতিগুলো অনুভব করে।
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <h4 className="text-primary font-bold mb-1">
                ইমোশন অ্যানালাইসিস
              </h4>
              <p className="text-xs text-zinc-500">
                আপনার কথার সুর বুঝে এটি উত্তর দেয়।
              </p>
            </div>
            <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <h4 className="text-primary font-bold mb-1">সম্পূর্ণ নিরাপদ</h4>
              <p className="text-xs text-zinc-500">
                আপনার কোনো চ্যাট ডাটা সেভ করা হয় না।
              </p>
            </div>
          </div>

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" /> এআই-এর সাথে কথা বলুন
          </motion.button> */}
        </div>
      </div>
    </section>
  );
};
