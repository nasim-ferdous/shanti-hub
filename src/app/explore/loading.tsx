export default function ExploreLoading() {
  const skeletonCards = Array.from({ length: 8 });

  return (
    <div className="min-h-screen pt-24 pb-12 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="space-y-3 w-full md:w-1/3">
            <div className="h-10 w-3/4 bg-base-300 rounded-lg animate-pulse"></div>
            <div className="h-4 w-1/2 bg-base-300 rounded-lg animate-pulse"></div>
          </div>
          <div className="h-12 w-full md:w-96 bg-base-300 rounded-2xl animate-pulse"></div>
        </div>

        {/* Categories Skeleton */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-8 w-24 bg-base-300 rounded-full animate-pulse"
            ></div>
          ))}
        </div>

        {/* Groups Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skeletonCards.map((_, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden"
            >
              {/* Image area */}
              <div className="h-48 w-full bg-base-300 animate-pulse"></div>

              <div className="card-body">
                {/* Title */}
                <div className="h-6 w-3/4 bg-base-300 rounded animate-pulse"></div>

                {/* Description */}
                <div className="space-y-2 mt-2">
                  <div className="h-3 w-full bg-base-300 rounded animate-pulse"></div>
                  <div className="h-3 w-5/6 bg-base-300 rounded animate-pulse"></div>
                </div>

                <div className="divider my-2 opacity-30"></div>

                {/* Footer buttons */}
                <div className="flex justify-between items-center mt-2">
                  <div className="h-4 w-16 bg-base-300 rounded animate-pulse"></div>
                  <div className="h-8 w-24 bg-base-300 rounded-xl animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
