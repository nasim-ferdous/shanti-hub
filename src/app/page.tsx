import { About } from "@/components/home/About";
import { AIPreview } from "@/components/home/AIPreview";
import { CTA } from "@/components/home/CTA";
import { FAQ } from "@/components/home/FAQ";
import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-0  overflow-x-hidden">
      <Hero></Hero>
      <Features></Features>
      <Stats></Stats>
      <About></About>
      <AIPreview></AIPreview>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <CTA></CTA>
    </div>
  );
}
