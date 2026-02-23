import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Devashish - Full Stack Developer",
  description: "Creative full-stack developer with a strong focus on motion and interaction.",
};

import SmoothScroll from "@/components/SmoothScroll";
import StoreProvider from "@/components/StoreProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <StoreProvider>
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}
