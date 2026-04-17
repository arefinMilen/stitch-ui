// app/loading.jsx

export default function Loading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">

      {/* Navbar skeleton */}
      <div className="border-b border-gray-100 px-6 h-16 flex items-center justify-between max-w-7xl mx-auto">
        <div className="h-6 w-24 bg-gray-200 rounded-lg" />
        <div className="hidden md:flex gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 w-16 bg-gray-200 rounded-lg" />
          ))}
        </div>
        <div className="h-10 w-36 bg-gray-200 rounded-xl" />
      </div>

      {/* Hero skeleton */}
      <div className="flex flex-col items-center justify-center gap-5 py-24 px-4">
        <div className="h-10 w-72 sm:w-96 bg-gray-200 rounded-xl" />
        <div className="h-6 w-48 sm:w-64 bg-gray-200 rounded-lg" />
        <div className="h-4 w-64 sm:w-125 bg-gray-200 rounded-lg" />
        <div className="h-4 w-48 sm:w-80 bg-gray-200 rounded-lg" />
        <div className="h-12 w-44 bg-pink-200 rounded-xl mt-2" />
      </div>

      {/* Cards skeleton */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl p-8 flex flex-col gap-4">
              <div className="h-14 w-14 bg-gray-200 rounded-xl" />
              <div className="h-5 w-3/4 bg-gray-200 rounded-lg" />
              <div className="h-4 w-full bg-gray-200 rounded-lg" />
              <div className="h-4 w-5/6 bg-gray-200 rounded-lg" />
              <div className="h-4 w-4/6 bg-gray-200 rounded-lg" />
              <div className="h-9 w-28 bg-pink-100 rounded-full mt-2" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}