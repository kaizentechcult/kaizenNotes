// app/layout.tsx
'use client';

import { SessionProvider } from 'next-auth/react';
import { AuthProvider } from '../../../utils/AuthContext';

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: any;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
