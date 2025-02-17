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
  title: 'Snowy River Technologies',
  description: 'Delivering innovative technical solutions and consulting services',
  openGraph: {
    title: 'Snowy River Technologies',
    description: 'Delivering innovative technical solutions and consulting services',
    url: 'https://snowyrivertech.com',
    siteName: 'Snowy River Technologies',
    locale: 'en_US',
    type: 'website',
  },
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
          <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-20 items-center">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/logo.svg"
                      alt="Company Logo"
                      width={60}
                      height={60}
                      priority
                      className="rounded-lg"
                    />
                  </div>
                  <div className="ml-8">
                    <ul className="flex items-center space-x-8">
                      <li>
                        <a
                          href="/"
                          className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium 
                                   transition-all duration-300 hover:bg-gray-800"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services"
                          className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium 
                                   transition-all duration-300 hover:bg-gray-800"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="/projects"
                          className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium 
                                   transition-all duration-300 hover:bg-gray-800"
                        >
                          Projects
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium 
                                   transition-all duration-300 hover:bg-gray-800"
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
          <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
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
