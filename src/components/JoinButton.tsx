"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function JoinButton({
  groupId,
  isJoined,
}: {
  groupId: string;
  isJoined: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(isJoined);
  const router = useRouter();

  const handleJoin = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/groups/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ groupId }),
      });

      if (res.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You Have joined the group",
          showConfirmButton: false,
          timer: 1500,
        });
        setJoined(true);
        router.refresh(); // পেজ রিফ্রেশ করে নতুন মেম্বার কাউন্ট দেখাবে
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleJoin}
      disabled={loading || joined}
      className={`btn w-full rounded-xl ${joined ? "btn-disabled bg-success/20 text-success" : "btn-primary"}`}
    >
      {loading
        ? "লোডিং..."
        : joined
          ? "আপনি অলরেডি মেম্বার"
          : "গ্রুপে জয়েন করুন"}
    </button>
  );
}
