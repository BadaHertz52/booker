import '@/styles/variables.scss';
import '@/styles/globals.scss';
import '@/styles/reset.scss';

import { Metadata } from 'next';
import { Suspense } from 'react';

import Footer from '@/components/Footer';
import Topbar from '@/components/Topbar';
import { enableServerMocking } from '@/mocks/enableServerMocking';
import { pretendard } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'BOOKER',
  description: '도서관에서 사랑받는 책을 한곳에! 사서 추천 도서,인기 도서와 대출 급상승 도서를 만나보세요',
  openGraph: {
    title: 'BOOKER',
    description: '도서관에서 사랑받는 책을 한곳에! 사서 추천 도서,인기 도서와 대출 급상승 도서를 만나보세요',
    images: ['./thumnail.png'],
  },
  themeColor: '#ffffff',
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  await enableServerMocking();

  return (
    <html lang="ko" className={pretendard.variable}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <div id="root">
          <div id="root__background"></div>
          <Suspense>
            <Topbar />
          </Suspense>
          <main id="main">{children}</main>
          <Footer />
        </div>
        {modal}
        <div id="portal-root"></div>
      </body>
    </html>
  );
}
