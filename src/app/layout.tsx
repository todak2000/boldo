import type { Metadata } from "next";
import { Manrope, Open_Sans } from "next/font/google";
import "./globals.css";


const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({ subsets: ['latin'], weight: ['300', '400', '600', '700', '800'], display: 'swap', });

export const metadata: Metadata = {
  title: "Boldo",
  description: "Save time by building  fast with Boldo Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} ${openSans.className} antialiased min-h-screen bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
