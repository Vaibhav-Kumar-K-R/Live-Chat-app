import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { JetBrains_Mono } from "next/font/google"


const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: "Chat application with real time messaging",
  description: "A real-time chat application with room support, built with Next.js, React, and Socket.IO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning className={`${jetbrainsMono.variable} font-mono`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
          
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
