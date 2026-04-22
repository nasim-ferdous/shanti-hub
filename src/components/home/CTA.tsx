"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Swal from "sweetalert2";

export const CTA = () => {
  const handleJoin = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "আপনি সফলভাবে কমিউনিটিতে যোগদান করা হয়েছে!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden bg-gradient-to-br from-secondary via-[#2D31FA] to-primary rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl shadow-secondary/20"
        >
          {/* Subtle Animated Background Elements */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              y: [0, -30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-12 -left-12 w-48 h-48 bg-black/10 rounded-full blur-2xl"
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            {/* Icon/Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl">
                <Sparkles className="w-8 h-8 text-white animate-pulse" />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-7xl font-black font-bengali tracking-tight leading-[1.2]"
            >
              আজই আপনার প্রশান্তির <br className="hidden md:block" />
              যাত্রা শুরু হোক
            </motion.h2>

            {/* Sub-text */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-white/80 font-bengali font-light max-w-xl mx-auto"
            >
              আমাদের নিরাপদ কমিউনিটিতে যোগ দিন এবং আপনার মনের কথা প্রকাশ করুন
              কোনো বাধা ছাড়াই।
            </motion.p>

            {/* Main Action Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-6"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 mx-auto px-10 py-5 bg-white text-secondary rounded-2xl font-bold text-xl transition-all duration-300 hover:cursor-pointer"
                onClick={handleJoin}
              >
                <span>ফ্রি জয়েন করুন</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
            </motion.div>

            {/* Extra Info */}
            <p className="text-white/50 text-sm mt-8">
              কোনো ক্রেডিট কার্ডের প্রয়োজন নেই • সম্পূর্ণ পরিচয় গোপন
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
