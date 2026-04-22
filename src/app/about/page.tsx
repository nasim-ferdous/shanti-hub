"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ShieldCheck, Target, Zap } from "lucide-react";

const values = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "গোপনীয়তা",
    desc: "আপনার প্রতিটি কথা আমাদের কাছে আমানত। আমরা সর্বোচ্চ স্তরের এনক্রিপশন নিশ্চিত করি।",
  },
  {
    icon: <Heart className="w-6 h-6 text-red-500" />,
    title: "সহমর্মিতা",
    desc: "আমাদের AI এবং কমিউনিটি আপনার আবেগকে গুরুত্ব দেয়, বিচার করে না।",
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: "তাৎক্ষণিক সহায়তা",
    desc: "রাত ৩টা হোক বা দুপুর ২টা, শান্তি-হাব সবসময় আপনার পাশে আছে।",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-20">
      {/* 1. Header Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 rounded-full blur-[120px] -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-black font-bengali leading-tight">
            আমরা এখানে এসেছি <br />
            <span className="text-primary">মানসিক প্রশান্তি</span> ছড়িয়ে দিতে
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-bengali max-w-2xl mx-auto">
            শান্তি-হাব হলো বাংলাদেশের প্রথম এআই-পাওয়ারড প্ল্যাটফর্ম যা আপনার
            মানসিক স্বাস্থ্যের কথা মাথায় রেখে তৈরি করা হয়েছে।
          </p>
        </motion.div>
      </section>

      {/* 2. Our Story / Vision Section */}
      <section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=870&auto=format&fit=crop"
              alt="Mental Health Awareness"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-sm">
              <Target className="w-5 h-5" /> আমাদের ভিশন
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-bengali">
              প্রযুক্তির ছোঁয়ায় মানসিক <br /> স্বাস্থ্যের বিপ্লব
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-bengali leading-relaxed">
              বাংলাদেশে মানসিক স্বাস্থ্য নিয়ে কথা বলা এখনো অনেকের কাছে সংকোচের
              বিষয়। আমাদের লক্ষ্য হলো এমন একটি ইকোসিস্টেম তৈরি করা যেখানে যে কেউ
              পরিচয় গোপন রেখে এআই এবং অভিজ্ঞ কমিউনিটির সাথে কথা বলতে পারবে। আমরা
              বিশ্বাস করি, কথা বলাই হলো সুস্থ হওয়ার প্রথম ধাপ।
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h3 className="text-3xl font-black text-primary">১০০%</h3>
                <p className="text-sm text-zinc-500 font-bengali">
                  গোপনীয়তা সুরক্ষা
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-primary">২৪/৭</h3>
                <p className="text-sm text-zinc-500 font-bengali">
                  এআই সাপোর্ট
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Values Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black font-bengali">
            আমাদের মূল্যবোধ
          </h2>
          <p className="text-zinc-500 font-bengali">
            যে তিনটি স্তম্ভের ওপর ভিত্তি করে শান্তি-হাব দাঁড়িয়ে আছে
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-[2.5rem] shadow-xl shadow-zinc-200/50 dark:shadow-none transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                {v.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-bengali">
                {v.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-bengali">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
