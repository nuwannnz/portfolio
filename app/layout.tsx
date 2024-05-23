import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const imbPlexMono = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nuwan Karunarathna",
  description: "Nuwan Karunarathna's personal blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={imbPlexMono.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
