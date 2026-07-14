'use client';
import { SessionProvider } from "next-auth/react";
import './globals.css'  // هذا السطر هو اللي رجع التنسيقات

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <title>خبير</title>
      </head>
      <body className="bg-gray-50">
        <SessionProvider>
          <header className="bg-white shadow-sm p-4 mb-6">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold">خ خبير</h1>
              <div className="text-sm">
                واتساب الدعم 💡 <br/> 9647715480994
              </div>
            </div>
          </header>
          <main className="container mx-auto px-4">
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
