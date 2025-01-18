import { Global } from '@emotion/react';

import globalStyles from '@/globalStyles/globalStyles';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Global styles={globalStyles()} />
        {children}
      </body>
    </html>
  );
}
