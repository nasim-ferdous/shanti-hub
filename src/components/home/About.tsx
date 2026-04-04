export const About = () => (
  <section className="py-24 px-4 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
    <div className="flex-1 space-y-6">
      <h2 className="text-4xl font-bold">কেন আমরা আলাদা?</h2>
      <p className="text-lg text-slate-600 leading-relaxed">
        আমরা শুধু একটি ওয়েবসাইট নই, আমরা একটি নিরাপদ আশ্রয়। আমাদের AI 'শান্তি' আপনার প্রতিটি কথা শোনে এবং কোনো বিচার ছাড়াই সমাধান দেয়।
      </p>
    </div>
    <div className="flex-1 w-full h-80 bg-slate-100 rounded-[2rem] animate-pulse" />
  </section>
);