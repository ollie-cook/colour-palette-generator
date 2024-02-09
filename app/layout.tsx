import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const robotoMono = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Single Hue Palette Generator",
  description: "Generate a colour palette that uses just one hue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
    </html>
  );
}
