import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caply — Watch movies. Don't read them.",
  description:
    "Caply hides subtitles until you actually need them. A Chrome extension that brings the image back.",
  metadataBase: new URL("https://caply.app"),
  openGraph: {
    title: "Caply — Watch movies. Don't read them.",
    description: "Caply hides subtitles until you actually need them.",
    type: "website",
  },
  icons: {
    icon: "/icon-caply.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
