import type { Config } from "tailwindcss";

const config: Config = {
  // DaisyUI data-theme এর সাথে সিঙ্ক করার জন্য
  darkMode: ["class", '[data-theme="night"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // এখানে আলাদা করে কালার দরকার নেই কারণ DaisyUI ভেরিয়েবলগুলোই 'primary' হিসেবে কাজ করবে
    },
  },
  plugins: [],
};
export default config;
