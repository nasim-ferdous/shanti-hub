"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const About = () => {
  const points = [
    "শতভাগ গোপনীয়তা ও নিরাপত্তা",
    "২৪/৭ এআই চ্যাট অ্যাসিস্ট্যান্ট",
    "বিচারহীন মুক্ত আলোচনার পরিবেশ",
    "বিশেষজ্ঞদের পরামর্শ ও গাইডেন্স",
  ];

  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black font-bengali tracking-tight text-zinc-900 dark:text-white leading-tight">
              শান্তি-হাব: আপনার <br />
              <span className="text-primary italic">
                একান্ত ব্যক্তিগত আশ্রয়
              </span>
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full" />
          </div>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-bengali">
            আমরা শুধু একটি ওয়েবসাইট নই, আমরা আপনার মনের গোপন কথা বলার একটি
            নিরাপদ ঠিকানা। আমাদের উন্নত এআই অ্যাসিস্ট্যান্ট আপনার কথা শোনে কোনো
            বিচার ছাড়াই এবং আপনাকে দেয় সঠিক পথনির্দেশনা।
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="font-bengali">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Side: Image with Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1 relative w-full"
        >
          <div className="relative aspect-square md:aspect-[4/5] w-full max-w-[500px] mx-auto overflow-hidden rounded-[3rem] shadow-2xl shadow-zinc-400/20 dark:shadow-none border-8 border-white dark:border-zinc-800">
            <Image
              src="https://images.unsplash.com/photo-1514081618247-f6fdfa22ed86?q=80&w=876&auto=format&fit=crop"
              alt="Peaceful Mind"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

          {/* Floating Card for Added Professionalism */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 md:-left-12 bg-white dark:bg-zinc-800 p-6 rounded-3xl shadow-xl border border-zinc-100 dark:border-zinc-700 max-w-[200px] hidden sm:block"
          >
            <p className="text-sm font-bold text-zinc-500 mb-1">সফল সেশন</p>
            <p className="text-3xl font-black text-primary font-inter">৫০০০+</p>
            <p className="text-xs text-zinc-400 mt-2">
              মানুষ খুঁজে পেয়েছে প্রশান্তি
            </p>
          </motion.div>

          {/* Decorative Background Blob */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
