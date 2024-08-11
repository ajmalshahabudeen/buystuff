import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";
import { merri } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Just Buy Anything",
  description: "a super simple shop for anyone to buy anything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merri.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
