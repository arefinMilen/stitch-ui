import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 py-24 sm:py-32 lg:px-8">
      {/* Background Decorative Elements (Pure CSS) */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <div className="absolute top-[-10%] left-[-10%] h-125 w-125 rounded-full bg-purple-500/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] h-125 w-125 rounded-full bg-blue-500/10 blur-[120px] animate-pulse [animation-delay:2s]" />
      </div>

      <div className="text-center">
        {/* Animated 404 Header */}
        <p className="text-9xl font-black text-white/18 animate-bounce select-none">
          404
        </p>
        
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
          Page not found
        </h1>
        
        <p className="mt-6 text-base leading-7 text-slate-400 max-w-sm mx-auto">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-95"
          >
            <span>Return Home</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size:[14px_24px]"></div>
    </main>
  )
}