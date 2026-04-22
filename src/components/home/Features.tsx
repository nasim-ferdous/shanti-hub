"use client";
import { motion } from "framer-motion";
import { Users, MessageSquareText, Bot } from "lucide-react";

const features = [
  {
    title: "কমিউনিটি এক্সেস",
    description:
      "আপনার সাথে মিলে যায় এমন সাপোর্ট গ্রুপে যুক্ত হোন এবং সবার সাথে সংযুক্ত থাকুন।",
    icon: <Users className="w-6 h-6 text-primary" />,
    color: "bg-blue-500/10",
  },
  {
    title: "বেনামী রিয়েল-টাইম চ্যাট",
    description:
      "নিজের পরিচয় গোপন রেখে গ্রুপের মেম্বারদের সাথে নির্ভয়ে মেসেজ আদান-প্রদান করুন।",
    icon: <MessageSquareText className="w-6 h-6 text-primary" />,
    color: "bg-purple-500/10",
  },
  {
    title: "গ্রুপ-ভিত্তিক AI চ্যাট",
    description:
      "আমাদের স্মার্ট AI প্রতিটি গ্রুপের কন্টেক্সট বুঝে আপনাকে সঠিক তথ্য দিয়ে সাহায্য করবে।",
    icon: <Bot className="w-6 h-6 text-primary" />,
    color: "bg-emerald-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-zinc-950 dark:to-zinc-900 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-4 font-bengali tracking-tight"
          >
            আমাদের বিশেষ ফিচারসমূহ
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 },
              }}
              className="group p-10 bg-white/70 dark:bg-zinc-800/50 backdrop-blur-md rounded-[2.5rem] border border-slate-200 dark:border-zinc-700 shadow-xl shadow-slate-200/40 dark:shadow-none hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative background glow on hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors duration-500" />

              {/* Icon Container */}
              <div
                className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold mb-4 font-bengali text-zinc-800 dark:text-zinc-100">
                {feature.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Subtle bottom indicator */}
              <div className="mt-6 w-0 group-hover:w-full h-1 bg-gradient-to-r from-primary to-transparent transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
