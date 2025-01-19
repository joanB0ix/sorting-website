import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const firaCode = localFont({
  src: [
    {
      path: "./fonts/FiraCode-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/FiraCode-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/FiraCode-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/FiraCode-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FiraCode-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Sorting Visualizer",
  description: "My version of a Sorting Algorithm Visualizer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Joan Boix",
              url: "https://sorting.joanboix.dev",
              sameAs: [
                "https://github.com/joanB0ix",
                "https://x.com/JoanBoixAv",
                "https://www.linkedin.com/in/joanboixavalos/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${firaCode.variable} light:bg-white light:text-black dark:bg-black dark:text-white h-screen flex flex-col font-fira-code m-auto scrollbar-hide overflow-y-scroll`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
