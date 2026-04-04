"use client";
import { motion } from "framer-motion";

export const Features = () => (
  <section className="py-24 bg-slate-50 dark:bg-slate-900/20 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10 }}
          className="p-8 bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm h-full"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-xl mb-6" />
          <h3 className="text-2xl font-bold mb-4">ফিচার নাম {i}</h3>
          <p className="text-slate-500">
            আপনার মানসিক প্রশান্তির জন্য আমাদের এই বিশেষ টুলটি ডিজাইন করা হয়েছে।
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);
