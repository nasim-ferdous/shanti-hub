"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isLogin) {
      const res = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });
      if (res?.ok) router.push("/dashboard");
      else alert("ভুল ইমেইল বা পাসওয়ার্ড");
    } else {
      // রেজিস্ট্রেশন কল
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("রেজিস্ট্রেশন সফল! এখন লগইন করুন।");
        setIsLogin(true);
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 p-8 rounded-3xl shadow-xl w-full max-w-md border border-base-300">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          {isLogin ? "শান্তি হাব লগইন" : "নতুন অ্যাকাউন্ট তৈরি"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="আপনার নাম (আসল)"
              className="input input-bordered w-full rounded-xl"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          )}
          <input
            type="email"
            placeholder="ইমেইল এড্রেস"
            className="input input-bordered w-full rounded-xl"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder="পাসওয়ার্ড"
            className="input input-bordered w-full rounded-xl"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <button
            className="btn btn-primary w-full rounded-xl"
            disabled={loading}
          >
            {loading ? "প্রসেসিং..." : isLogin ? "লগইন" : "রেজিস্টার"}
          </button>
        </form>

        <p className="text-center mt-6 text-sm">
          {isLogin ? "অ্যাকাউন্ট নেই?" : "অ্যাকাউন্ট আছে?"}{" "}
          <span
            className="text-primary cursor-pointer font-bold"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "রেজিস্টার করুন" : "লগইন করুন"}
          </span>
        </p>
      </div>
    </div>
  );
}
