export const Stats = () => (
  <section className="py-20 px-4">
    <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 grid grid-cols-2 md:grid-cols-4 gap-8  text-center">
      {[
        { n: "১০কে", t: "ইউজার" },
        { n: "২৪/৭", t: "সাপোর্ট" },
        { n: "১০০%", anonymous: "গোপন" },
        { n: "৫০+", t: "এক্সপার্ট" },
      ].map((s, i) => (
        <div key={i}>
          <h4 className="text-4xl font-black">{s.n}</h4>
          <p className="opacity-80">{s.t || "পরিচয় গোপন"}</p>
        </div>
      ))}
    </div>
  </section>
);
