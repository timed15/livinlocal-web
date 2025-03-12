import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                {/* Add your logo here */}
                <span className="text-2xl font-bold text-[#1fa093]">LivinLocal</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a
                  href="/"
                  className="border-transparent text-gray-500 hover:border-[#1fa093] hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Events
                </a>
                <a
                  href="/businesses"
                  className="border-transparent text-gray-500 hover:border-[#1fa093] hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Businesses
                </a>
                <a
                  href="/jobs"
                  className="border-transparent text-gray-500 hover:border-[#1fa093] hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Jobs
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                type="button"
                className="bg-[#1fa093] p-2 rounded-md text-white hover:bg-[#198577] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1fa093]"
              >
                Sign In
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} LivinLocal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}