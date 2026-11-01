import { DM_Sans, Instrument_Serif } from "next/font/google";
import Footer from "@/components/sections/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body>
        <SmoothScroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}
