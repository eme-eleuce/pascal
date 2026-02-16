import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "../contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sub Sole Films | Professionelle Videoproduktion",
  description: "Sub Sole Films ist eine kreative Videoagentur mit Sitz in der Berner Altstadt. Wir produzieren visuellen Content und verpassen eurer Unternehmenskommunikation die passende Bildsprache. Von Camera-Crew und Equipment über Content Creation bis zur Postproduktion.",
  keywords: "Videoagentur Bern, Videoproduktion, Content Creation, Live-Broadcast, Postproduktion, Kamera-Crew, Bern Altstadt",
  authors: [{ name: "Sub Sole Films" }],
  openGraph: {
    title: "Sub Sole Films | Professionelle Videoproduktion",
    description: "Kreative Videoagentur in Bern. Professionelle Videoproduktion von Konzept bis Postproduktion.",
    type: "website",
    locale: "de_CH",
    siteName: "Sub Sole Films",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sub Sole Films | Videoagentur Bern",
    description: "Kreative Videoagentur in Bern. Professionelle Videoproduktion von Konzept bis Postproduktion.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
