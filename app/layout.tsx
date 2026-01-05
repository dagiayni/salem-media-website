import type { Metadata } from "next";
import { Inter, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const notoEthiopic = Noto_Sans_Ethiopic({
  variable: "--font-noto-ethiopic",
  subsets: ["ethiopic"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Salem Media | Elevating Our Collective Narrative",
  description: "A platform dedicated to culture, education, and meaningful impact.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: "/images/salem-logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/salem-logo.png", type: "image/png" },
    ],
    shortcut: [
      { url: "/images/salem-logo.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="am">
      <head>
        <link rel="icon" href="/images/salem-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/salem-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/salem-logo.png" />
      </head>
      <body
        className={`${inter.variable} ${notoEthiopic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
