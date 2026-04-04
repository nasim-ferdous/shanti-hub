export const Testimonials = () => (
  <section className="py-24 px-4 overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-16">মানুষ যা বলছে</h2>
    <div className="flex gap-6 animate-marquee">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="min-w-[350px] p-8 bg-slate-50 rounded-3xl border border-slate-100"
        >
          <p className="italic mb-6">
            "এই অ্যাপটি ব্যবহার করে আমি প্রথমবার মন খুলে কথা বলতে পেরেছি।"
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-300 rounded-full" />
            <span className="font-bold">অজ্ঞাত ব্যবহারকারী</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);
