import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/lib/providers';

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Rick and Morty | Explore o Universo',
    template: '%s | Rick and Morty',
  },
  description:
    'Explore detalhes sobre os personagens do universo de Rick and Morty',
  icons: './logo.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${workSans.className} antialiased`}>
        <Providers>
          <main className='w-full max-w-96 md:max-w-[80rem] ml-auto mr-auto mt-8 flex flex-col gap-12'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
