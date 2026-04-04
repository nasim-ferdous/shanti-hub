"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="data-theme" // এটি DaisyUI এর জন্য জরুরি
      defaultTheme="light"
      enableSystem={false}
      value={{
        light: "light",
        dark: "night", // 'dark' ভ্যালু কল করলে যেন 'night' থিম অ্যাপ্লাই হয়
        night: "night"
      }}
    >
      {children}
    </NextThemesProvider>
  );
}