import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { Group } from "@/models/Group";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { redirect } from "next/navigation";
import AiChat from "@/components/AiChat";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  await connectDB();

  // ইউজারের ডাটা এবং তার জয়েন করা গ্রুপের ডিটেইলস নিয়ে আসা
  const user = await User.findOne({ email: session.user?.email }).populate({
    path: "joinedGroups",
    model: Group,
  });

  const joinedGroups = user?.joinedGroups || [];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-3 rounded-2xl text-primary-content shadow-lg">
              <LayoutDashboard size={28} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-neutral">
                আমার ড্যাশবোর্ড
              </h1>
              <p className="text-neutral/60">
                স্বাগতম, {user?.alias || session.user?.name}!
              </p>
            </div>
          </div>
          <Link
            href="/explore"
            className="btn btn-outline btn-primary rounded-xl"
          >
            নতুন গ্রুপ খুঁজুন
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="stats shadow bg-base-100">
            <div className="stat">
              <div className="stat-figure text-primary">
                <Users size={32} />
              </div>
              <div className="stat-title">জয়েন করা গ্রুপ</div>
              <div className="stat-value text-primary">
                {joinedGroups.length} টি
              </div>
            </div>
          </div>
        </div>

        {/* Joined Groups List */}
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <MessageSquare className="text-secondary" /> আপনার কমিউনিটিসমূহ
        </h2>

        {joinedGroups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {joinedGroups.map((group: any) => (
              <div
                key={group._id}
                className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow border border-base-300"
              >
                <figure className="px-4 pt-4">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="rounded-xl h-40 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <h2 className="card-title text-lg">{group.title}</h2>
                    <div className="badge badge-ghost text-[10px]">
                      {group.category}
                    </div>
                  </div>
                  <p className="text-sm text-neutral/60 line-clamp-2 mt-2">
                    {group.description}
                  </p>
                  <div className="card-actions justify-end mt-4">
                    <Link
                      href={`/explore/${group.slug}`}
                      className="btn btn-primary btn-sm rounded-lg gap-2"
                    >
                      চ্যাটে যান <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <AiChat />
            </div>
          </div>
        ) : (
          <div className="card bg-base-100 p-12 text-center border-2 border-dashed border-base-300">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-2">
                আপনি এখনো কোনো গ্রুপে জয়েন করেননি
              </h3>
              <p className="text-neutral/50 mb-6">
                আপনার পছন্দের কমিউনিটি খুঁজে পেতে এক্সপ্লোর পেজটি দেখুন।
              </p>
              <Link href="/explore" className="btn btn-primary rounded-xl px-8">
                এক্সপ্লোর করুন
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
