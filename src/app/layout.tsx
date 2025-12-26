import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tharanus Kongjaroon - CV",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">{children}</body>
    </html>
  );
}
