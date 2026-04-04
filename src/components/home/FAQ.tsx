export const FAQ = () => (
  <section className="py-24 px-4 bg-white dark:bg-slate-950">
    <div className="max-w-3xl mx-auto space-y-4">
      <h2 className="text-3xl font-bold text-center mb-12">প্রশ্ন ও উত্তর</h2>
      {[1, 2, 3].map((i) => (
        <details
          key={i}
          className="group p-6 border border-slate-200 rounded-2xl"
        >
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
            আমার ডাটা কি নিরাপদ থাকবে?
            <span className="group-open:rotate-180 transition-transform">
              ▼
            </span>
          </summary>
          <p className="mt-4 text-slate-500">
            আমরা এন্ড-টু-এন্ড এনক্রিপশন ব্যবহার করি, তাই আপনার অনুমতি ছাড়া কেউ
            আপনার ডাটা দেখতে পারবে না।
          </p>
        </details>
      ))}
    </div>
  </section>
);
