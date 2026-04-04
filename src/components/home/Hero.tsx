"use client";
import { motion } from "framer-motion";

export const Hero = () => (
  <section className="min-h-[70vh] flex flex-col items-center justify-center text-center mt-2 px-4 bg-dot-pattern dark:bg-zinc-900">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        শান্তি হাব: মনের কথা <br /> প্রকাশ হোক নির্ভয়ে
      </h1>
      <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
        বাংলাদেশের প্রথম AI-পাওয়ারড মেন্টাল হেলথ প্ল্যাটফর্ম। আমরা আপনার
        গোপনীয়তাকে সর্বোচ্চ গুরুত্ব দিই।
      </p>
      <div className="flex gap-4 justify-center">
        <button className="px-8 py-4 bg-primary  rounded-2xl font-bold hover:shadow-xl transition-all">
          শুরু করুন
        </button>
        <button className="px-8 py-4 border-2 border-slate-200 rounded-2xl font-bold hover:bg-slate-50">
          ভিডিও ডেমো
        </button>
      </div>
    </motion.div>
  </section>
);
