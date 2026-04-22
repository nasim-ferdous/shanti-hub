"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "সন্তুষ্ট ইউজার", value: "১০কে+", description: "সারাদেশে ছড়িয়ে আছে" },
  { label: "সাপোর্ট", value: "২৪/৭", description: "সবসময় আপনার পাশে" },
  { label: "গোপনীয়তা", value: "১০০%", description: "সম্পূর্ণ পরিচয় গোপন" },
  { label: "মেন্টর ও এক্সপার্ট", value: "৫০+", description: "অভিজ্ঞ টিমের পরামর্শ" },
];

export const Stats = () => {
  return (
    <section className="py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto relative overflow-hidden bg-primary rounded-[3rem] p-10 md:p-20 shadow-2xl shadow-primary/30"
      >
        {/* Background Decorative Patterns */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center text-white"
            >
              {/* Stat Value */}
              <motion.h4 
                whileHover={{ scale: 1.1 }}
                className="text-4xl md:text-6xl font-black mb-2 tracking-tighter"
              >
                {stat.value}
              </motion.h4>
              
              {/* Stat Label */}
              <p className="text-lg md:text-xl font-bold font-bengali mb-1 opacity-100">
                {stat.label}
              </p>
              
              {/* Sub-description */}
              <p className="text-xs md:text-sm font-light opacity-70 max-w-[120px]">
                {stat.description}
              </p>

              {/* Separator for Desktop (Except last item) */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/20" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};