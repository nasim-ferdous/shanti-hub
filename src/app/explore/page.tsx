import { connectDB } from "@/lib/db";
import { Group } from "@/models/Group";
import Link from "next/link";
import { Search } from "lucide-react";

// এই লাইনটি নিশ্চিত করবে যে প্রতিবার রিকোয়েস্টে নতুন ডেটা আসবে
export const dynamic = "force-dynamic";

async function getGroups(search?: string, category?: string) {
  await connectDB();
  
  let query: any = {};
  
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } }
    ];
  }
  
  if (category && category !== "All") {
    query.category = category;
  }

  return await Group.find(query).sort({ createdAt: -1 });
}

export default async function ExplorePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; cat?: string }>; // Next.js এর নতুন ভার্সনে এটি Promise হয়
}) {
  // searchParams কে await করতে হবে
  const params = await searchParams;
  const searchTerm = params?.q || "";
  const selectedCat = params?.cat || "All";
  
  const groups = await getGroups(searchTerm, selectedCat);
  const categories = ["All", "Anxiety", "Academic", "Meditation", "Depression", "General"];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-base-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header & Search Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="text-left">
            <h1 className="text-3xl font-bold text-neutral">এক্সপ্লোর সাপোর্ট গ্রুপ</h1>
            <p className="text-neutral/60">আপনার জন্য সঠিক কমিউনিটিটি খুঁজে নিন</p>
          </div>

          {/* Search Form */}
          <form action="/explore" method="GET" className="relative w-full md:w-96">
            <input
              type="text"
              name="q"
              defaultValue={searchTerm}
              placeholder="সার্চ করুন..."
              className="input input-bordered w-full pl-10 rounded-2xl bg-base-100 focus:border-primary"
            />
            <Search className="absolute left-3 top-3 text-neutral/40" size={20} />
            {/* যদি ক্যাটাগরি সিলেক্ট করা থাকে তবে সার্চের সময় সেটিও পাঠাতে হবে */}
            <input type="hidden" name="cat" value={selectedCat} />
          </form>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/explore?cat=${cat}${searchTerm ? `&q=${searchTerm}` : ""}`}
              className={`btn btn-sm rounded-full px-6 transition-all ${
                selectedCat === cat 
                ? "btn-primary shadow-lg shadow-primary/20" 
                : "btn-ghost bg-base-100 border-base-300"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Groups Grid */}
        {groups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {groups.map((group) => (
              <div key={group._id.toString()} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all border border-base-300 group">
                <figure className="relative overflow-hidden">
                  <img 
                    src={group.image} 
                    alt={group.title} 
                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 right-3">
                    <div className="badge badge-secondary shadow-md font-medium">{group.category}</div>
                  </div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-neutral font-bold">{group.title}</h2>
                  <p className="text-sm text-neutral/70 line-clamp-2 min-h-[40px]">
                    {group.description}
                  </p>
                  <div className="divider my-2 opacity-50"></div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs font-semibold text-neutral/50 flex items-center gap-1">
                      👥 {group.membersCount} মেম্বার
                    </span>
                    <Link 
                      href={`/explore/${group.slug}`} 
                      className="btn btn-primary btn-sm rounded-xl px-6"
                    >
                      জয়েন করুন
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-base-100 rounded-3xl border-2 border-dashed border-base-300">
            <h3 className="text-xl font-semibold text-neutral/50">কোনো গ্রুপ পাওয়া যায়নি!</h3>
            <Link href="/explore" className="text-primary hover:underline mt-2 inline-block">সব গ্রুপ দেখুন</Link>
          </div>
        )}
      </div>
    </div>
  );
}