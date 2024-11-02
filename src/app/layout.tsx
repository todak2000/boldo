import type { Metadata } from "next";
import { Manrope, Open_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const APP_NAME = "Boldo";
const PUBLIC_DOMAIN = "https://boldo-gold-eight.vercel.app";
const DESC = "Save time by building  fast with Boldo Template";
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: DESC,
  openGraph: {
    url: `${PUBLIC_DOMAIN}`,
    title: APP_NAME,
    description: DESC,
    images: {
      url: `${PUBLIC_DOMAIN}/og-image.png`,
      alt: `${APP_NAME}-og-image`,
    },
    type: "website",
    locale: "en_US",
  },
  twitter: {
    creator: "@todak2000",
    card: "summary_large_image",
    title: APP_NAME,
    description: DESC,
    images: {
      url: `${PUBLIC_DOMAIN}/og-image.png`,
      alt: `${APP_NAME}-og-image`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.className} ${openSans.className} antialiased min-h-screen bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
