import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import Image from 'next/image';
import { ReactNode } from 'react';

import { AppProvider } from '@/app/provider';
import { getUserQueryOptions } from '@/lib/auth';
import { paths } from '@/config/paths';
import { Footer } from '@/components/Footer';

import '@/styles/globals.css';

export const metadata = {
  title: 'Bulletproof React',
  description: 'Showcasing Best Practices For Building React Applications',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getUserQueryOptions());

  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="en">
      <body className="bg-gray-900 min-h-screen flex flex-col">
        <AppProvider>
          <nav className="bg-gray-800 border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/logo.svg"
                      alt="Company Logo"
                      width={32}
                      height={32}
                      priority
                    />
                  </div>
                  <div className="ml-6">
                    <ul className="flex items-center space-x-8">
                      <li>
                        <a
                          href="/"
                          className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services"
                          className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="/projects"
                          className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Projects
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <HydrationBoundary state={dehydratedState}>
              {children}
            </HydrationBoundary>
          </main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}

// We are not prerendering anything because the app is highly dynamic
// and the data depends on the user so we need to send cookies with each request
export const dynamic = 'force-dynamic';
