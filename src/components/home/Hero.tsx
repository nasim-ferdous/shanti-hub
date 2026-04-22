"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  // Animation variants for reusability
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506564461966-4107c88f6d29?q=80&w=829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Peaceful Background"
          fill
          priority
          className="object-cover transition-transform duration-1000 hover:scale-105"
        />
        {/* Gradient Overlay: light/dark mode friendly */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white dark:from-black/70 dark:via-black/50 dark:to-zinc-900" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge Animation */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm"
        >
          বাংলাদেশের প্রথম AI-পাওয়ারড প্ল্যাটফর্ম
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tight mb-6 font-bengali leading-[1.1]"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
            শান্তি হাব: মনের কথা
          </span>
          <br />
          <span className="text-primary italic">প্রকাশ হোক নির্ভয়ে</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          আমরা আপনার গোপনীয়তাকে সর্বোচ্চ গুরুত্ব দিই। আমাদের AI এবং সুরক্ষিত
          কমিউনিটির মাধ্যমে খুঁজে নিন মানসিক প্রশান্তি।
        </motion.p>

        {/* Buttons with Hover Effects */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/30 overflow-hidden"
          >
            <Link
              href={"/explore"}
              className="relative z-10 hover:cursor-pointer"
            >
              শুরু করুন
            </Link>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Blur Object */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
