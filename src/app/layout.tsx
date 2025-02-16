import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="snap-y snap-mandatory">
      <title>Aditya Kulkarni</title>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
