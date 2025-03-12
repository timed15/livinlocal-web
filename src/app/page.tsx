export default function Home() {
  return (
    <div className="relative">
      {/* Hero section */}
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Discover Your Local Community
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Find local events, explore businesses, and discover job opportunities in your area.
                Stay connected with what matters most in your community.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/events"
                  className="rounded-md bg-[#1fa093] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#198577] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1fa093]"
                >
                  Explore Events
                </a>
                <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}