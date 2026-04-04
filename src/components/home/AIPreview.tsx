export const AIPreview = () => (
  <section className="py-24 bg-black text-white px-4 overflow-hidden">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
        <div className="relative p-6 bg-slate-900 border border-slate-800 rounded-3xl">
          <p className="text-primary mb-2">শান্তি:</p>
          <p className="text-xl italic">
            "আমি বুঝতে পারছি আপনার আজকের দিনটি কঠিন যাচ্ছে। আপনি কি এই বিষয়ে কথা
            বলতে চান?"
          </p>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">বুদ্ধিমান AI চ্যাট</h2>
        <p className="text-slate-400">
          আমাদের AI মডেলটি বাংলা ভাষার ইমোশন বুঝতে বিশেষভাবে সক্ষম।
        </p>
      </div>
    </div>
  </section>
);
