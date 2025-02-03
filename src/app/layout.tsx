import '@/styles/variables.scss';
import '@/styles/globals.scss';
import '@/styles/reset.scss';

import { Suspense } from 'react';

import { Footer, Topbar } from '@/components';
import { enableServerMocking } from '@/mocks/enableServerMocking';
import { pretendard } from '@/styles/fonts';

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  await enableServerMocking();

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
        {modal}
        <div id="portal-root"></div>
      </body>
    </html>
  );
}
