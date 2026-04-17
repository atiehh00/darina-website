import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`h-full ${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-[#f5f3ef] text-[#2c2c2c]">
        {children}
      </body>
    </html>
  );
}
