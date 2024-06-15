import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ConnectionLayout from "../../components/ConnectionLayout/ConnectionLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valentin Sonney",
    };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html suppressHydrationWarning={true} lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}