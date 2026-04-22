"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "শান্তি-হাব আমাকে এমন এক জায়গা দিয়েছে যেখানে আমি বিচারহীনভাবে নিজের কথা বলতে পারি। এটি সত্যিই অসাধারণ!",
    role: "অজ্ঞাত ব্যবহারকারী",
  },
  {
    text: "এআই চ্যাটবটটি খুবই সংবেদনশীল। আমি যখন বিষণ্ণ ছিলাম, এটি আমাকে অনেক সাহায্য করেছে।",
    role: "অজ্ঞাত ব্যবহারকারী",
  },
  {
    text: "বাংলাদেশের প্রেক্ষাপটে মানসিক স্বাস্থ্য নিয়ে এমন কাজ আগে দেখিনি। প্রাউড অফ ইউ!",
    role: "অজ্ঞাত ব্যবহারকারী",
  },
  {
    text: "পরিচয় গোপন রেখে কথা বলার সুযোগটি আমাকে অনেক সাহস দিয়েছে।",
    role: "অজ্ঞাত ব্যবহারকারী",
  },
  {
    text: "গ্রুপ চ্যাটগুলোতে মেম্বাররা অনেক সাপোর্টিভ। খুব ভালো লাগে সবার সাথে কথা বলতে।",
    role: "অজ্ঞাত ব্যবহারকারী",
  },
];

// Marquee ইফেক্টের জন্য ডাবল লিস্ট ব্যবহার করা হয়েছে
const fullList = [...testimonials, ...testimonials];

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 overflow-hidden bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black font-bengali tracking-tight text-zinc-900 dark:text-white"
        >
          মানুষ যা বলছে
        </motion.h2>
        <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      <div className="relative flex overflow-hidden">
        {/* Infinite Marquee Wrapper */}
        <motion.div
          animate={{
            x: [0, -1035], // আপনার কার্ডের উইডথ অনুযায়ী এই ভ্যালু অ্যাডজাস্ট করা যায়
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 py-4"
        >
          {fullList.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, borderColor: "var(--primary)" }}
              className="min-w-[320px] md:min-w-[400px] p-8 bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm relative transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10" />

              <p className="text-zinc-600 dark:text-zinc-400 italic mb-8 font-bengali leading-relaxed text-lg">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center font-bold text-primary">
                  {item.role[0]}
                </div>
                <div>
                  <span className="font-bold block text-zinc-900 dark:text-zinc-100 font-bengali">
                    {item.role}
                  </span>
                  <span className="text-xs text-zinc-400 uppercase tracking-widest">
                    ভেরিফাইড ইউজার
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Side Gradients for Smooth Fading Effect */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};
