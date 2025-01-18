import '@/styles/variables.scss';
import '@/styles/globals.scss';
import '@/styles/reset.scss';

import localFont from 'next/font/local';

const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body>{children}</body>
    </html>
  );
}
