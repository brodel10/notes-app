import type { Metadata } from "next";
import {
  geistSans,
  geistMono,
  interSans,
  notoSerif,
  sourceCodePro,
} from "@/lib/fonts";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Notes",
  description: "Create notes and be creative!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interSans.variable} ${notoSerif.variable} ${sourceCodePro.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
