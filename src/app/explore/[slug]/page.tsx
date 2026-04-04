import { connectDB } from "@/lib/db";
import { Group } from "@/models/Group";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Users, Tag, ChevronLeft, MessageCircle } from "lucide-react";
import JoinButton from "@/components/JoinButton";
import { getServerSession } from "next-auth";
import { User } from "@/models/User";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Message } from "@/models/Message";
import ChatBox from "@/components/ChatBox";

export default async function GroupDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  await connectDB();

  const group = await Group.findOne({ slug });

  if (!group) {
    notFound();
  }

  const session = await getServerSession(authOptions);
  const currentUser = session
    ? await User.findOne({ email: session.user?.email })
    : null;

  const isJoined = currentUser?.joinedGroups?.some(
    (id: any) => id.toString() === group._id.toString(),
  );

  // ওই গ্রুপের আগের মেসেজগুলো ফেচ করা (সর্বশেষ ৫০টি)
  const rawMessages = await Message.find({ groupId: group._id })
    .sort({ createdAt: 1 })
    .limit(50);

  // JSON সিরিয়ালাইজেশন (ObjectId কে String এ রূপান্তর)
  const initialMessages = JSON.parse(JSON.stringify(rawMessages));

  return (
    <div className="min-h-screen pt-24 pb-12 bg-base-200">
      <div className="max-w-5xl mx-auto px-4">
        {/* Back Button */}
        <Link href="/explore" className="btn btn-ghost btn-sm mb-6 gap-2">
          <ChevronLeft size={18} /> এক্সপ্লোর-এ ফিরে যান
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card bg-base-100 shadow-xl overflow-hidden">
              <img
                src={group.image}
                alt={group.title}
                className="h-72 w-full object-cover"
              />
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <h1 className="text-3xl font-bold text-neutral">
                    {group.title}
                  </h1>
                  <span className="badge badge-primary">{group.category}</span>
                </div>

                <p className="text-neutral/70 mt-4 leading-relaxed">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {group.tags?.map((tag: string) => (
                    <div key={tag} className="badge badge-outline gap-1">
                      <Tag size={12} /> {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Discussion Area */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 px-2">
                <MessageCircle className="text-primary" /> কমিউনিটি ডিসকাশন
              </h2>

              {isJoined ? (
                /* যদি ইউজার জয়েন করা থাকে তবে চ্যাট বক্স দেখাবে */
                <ChatBox
                  groupId={group._id.toString()}
                  initialMessages={initialMessages}
                />
              ) : (
                /* জয়েন করা না থাকলে এই প্লেসহোল্ডার দেখাবে */
                <div className="card bg-base-100 shadow-md p-12 text-center border-2 border-dashed border-base-300">
                  <div className="bg-base-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="text-neutral/30" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral">
                    আলোচনা দেখতে এবং অংশগ্রহণ করতে প্রথমে জয়েন করুন।
                  </h3>
                  <p className="text-sm text-neutral/50 mt-2">
                    এটি একটি নিরাপদ এবং গোপনীয় জায়গা।
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="card bg-base-100 shadow-xl p-6">
              <h3 className="text-xl font-bold mb-4">কমিউনিটি স্ট্যাটস</h3>
              <div className="flex items-center gap-4 p-3 bg-base-200 rounded-xl mb-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-sm text-neutral/60">মোট মেম্বার</p>
                  <p className="text-lg font-bold">{group.membersCount}</p>
                </div>
              </div>

              {!session ? (
                <Link
                  href="/login"
                  className="btn btn-primary w-full rounded-xl"
                >
                  জয়েন করতে লগইন করুন
                </Link>
              ) : (
                <JoinButton
                  groupId={group._id.toString()}
                  isJoined={!!isJoined}
                />
              )}

              <p className="text-[10px] text-center mt-3 text-neutral/40">
                জয়েন করার মাধ্যমে আপনি আমাদের কমিউনিটি গাইডলাইন মেনে চলছেন।
              </p>
            </div>

            {/* Rules Card */}
            <div className="card bg-neutral text-neutral-content p-6 shadow-xl">
              <h3 className="font-bold mb-2">💡 নিয়মাবলী:</h3>
              <ul className="text-sm space-y-2 opacity-80">
                <li>• একে অপরের প্রতি শ্রদ্ধাশীল থাকুন।</li>
                <li>• ব্যক্তিগত তথ্য শেয়ার করা থেকে বিরত থাকুন।</li>
                <li>• এটি একটি নিরাপদ জায়গা, কোনো প্রকার ট্রলিং করা নিষেধ।</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
