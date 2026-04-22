import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4">
        {/* Back Button Skeleton */}
        <div className="w-40 h-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-6 animate-pulse" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-zinc-900 shadow-xl overflow-hidden rounded-[2rem] border border-zinc-100 dark:border-zinc-800">
              {/* Image Area */}
              <div className="h-72 w-full bg-zinc-200 dark:bg-zinc-800 animate-pulse" />

              <div className="p-8 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="h-10 w-2/3 bg-zinc-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
                  <div className="h-6 w-20 bg-zinc-200 dark:bg-zinc-800 rounded-full animate-pulse" />
                </div>

                <div className="space-y-3">
                  <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
                  <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
                  <div className="h-4 w-2/3 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
                </div>

                <div className="flex gap-2 pt-2">
                  <div className="h-6 w-16 bg-zinc-100 dark:bg-zinc-800 rounded-full animate-pulse" />
                  <div className="h-6 w-20 bg-zinc-100 dark:bg-zinc-800 rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* Discussion Placeholder */}
            <div className="h-64 w-full bg-white dark:bg-zinc-900 rounded-[2rem] border-2 border-dashed border-zinc-200 dark:border-zinc-800 animate-pulse" />
          </div>

          {/* Sidebar Skeleton */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-zinc-900 p-8 shadow-xl rounded-[2rem] border border-zinc-100 dark:border-zinc-800 space-y-6">
              <div className="h-6 w-1/2 bg-zinc-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
              <div className="h-20 w-full bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl animate-pulse" />
              <div className="h-12 w-full bg-zinc-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
            </div>
            <div className="bg-zinc-200 dark:bg-zinc-800 h-48 w-full rounded-[2.5rem] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
