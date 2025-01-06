import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";

const sansFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  weight: "400",
});

const monoFont = Space_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Loadify Android UI Loaders",
  metadataBase: new URL("https://loadify-docs.vercel.app"),
  description: "Enhance your Android apps with Loadify's customizable and visually appealing UI loaders.",
  keywords: "Loadify, Android loaders, UI loaders, customizable loaders, Android UI components, Kotlin-based Android libraries, Jetpack Compose animations, Android development tools 2025, Best libraries for Android app performance, Free tools for UI/UX Android apps, Firebase integration with Android UI loaders, Modern UI design for mobile apps, Top Android libraries for developers,customizable loaders, Android UI components, Kotlin-based Android libraries, Jetpack Compose animations, Android development tools 2025, Best libraries for Android app performance, Free tools for UI/UX Android apps, Firebase integration with Android UI loaders, Modern UI design for mobile apps, Top Android libraries for developers, Primary Android UI loaders, Animated Android UI components, Android UI optimization, Mobile UI/UX development, Android UI libraries 2025",
  openGraph: {
    title: "Loadify Android UI Loaders",
    description: "Enhance your Android apps with Loadify's customizable and visually appealing UI loaders.",
    url: "https://loadify-docs.vercel.app",
    siteName: "Loadify",
    images: [
      {
        url: "https://github.com/user-attachments/assets/4ab92de0-7ac1-48b0-99a6-1ba0bf67eb33",
        width: 1200,
        height: 630,
        alt: "Loadify Android UI Loaders",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@loadify",
    title: "Loadify Android UI Loaders",
    description: "Enhance your Android apps with Loadify's customizable and visually appealing UI loaders.",
    images: "https://github.com/user-attachments/assets/4ab92de0-7ac1-48b0-99a6-1ba0bf67eb33",
  },
  alternates: {
    canonical: "https://loadify-docs.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Hariom Harsh" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://loadify-docs.vercel.app",
            "name": "Loadify Android UI Loaders",
            "author": {
              "@type": "Person",
              "name": "Hariom Harsh",
            },
            "description": "Enhance your Android apps with Loadify's customizable and visually appealing UI loaders.",
            "publisher": {
              "@type": "Organization",
              "name": "Loadify",
            },
          })}
        </script>
      </head>
      <body
        className={`${sansFont.variable} ${monoFont.variable} font-regular antialiased tracking-wide`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="h-screen scroll-smooth">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
