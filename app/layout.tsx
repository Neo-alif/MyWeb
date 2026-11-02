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
      // The head script below adds a class before React hydrates.
      suppressHydrationWarning
    >
      <head>
        {/* Runs before first paint, so hero text never flashes before its intro. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("intro")`,
          }}
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}
