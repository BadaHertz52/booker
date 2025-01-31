import '@/styles/variables.scss';
import '@/styles/globals.scss';
import '@/styles/reset.scss';

import { Suspense } from 'react';

import { Footer, Topbar } from '@/components';
import { pretendard } from '@/styles/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body>
        <div id="root">
          <Suspense>
            <Topbar />
          </Suspense>
          <main>{children}</main>
          <Footer />
        </div>
        <div id="portal-root"></div>
      </body>
    </html>
  );
}
