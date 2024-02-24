import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";

const satoshi = localFont({
  src: [
    {
      path: "../../public/Fonts/Satoshi-Variable.ttf",
    },
  ],
  variable: "--font-satoshi",
});
const faktum = localFont({
  src: [
    {
      path: "../../public/Fonts/Faktum-Regular.otf",
    },
  ],
  variable: "--font-faktum",
});

const gopher = localFont({
  src: [
    {
      path: "../../public/Fonts/Gopher/Gopher-Regular.ttf",
      weight: "normal",
    },
    {
      path: "../../public/Fonts/Gopher/Gopher-Bold.ttf",
      weight: "600",
    },
    {
      path: "../../public/Fonts/Gopher/Gopher-Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/Fonts/Gopher/Gopher-BoldItalic.ttf",
      weight: "800",
      style: "Bolditalic",
    },
    {
      path: "../../public/Fonts/Gopher/Gopher-HeavyItalic.ttf",
      weight: "900",
    },
    {
      path: "../../public/Fonts/Gopher/Gopher-HairlineItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-gopher",
});

export const metadata: Metadata = {
  title: "Pranith Molakalapalli's Portfolio",
  description:
    "Discover the work of Pranith Molakalapalli. His exqusite designs and his passion for technology. He is a full stack developer and a designer. I love biryani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-black">
      <head>
        <link rel="shortcut icon" href="Pranith.ico" type="image/x-icon" />
        {/* @ts-ignore */}
        <style global={"true"}>
          {`
          :root {
            --font-satoshi: ${satoshi.variable};
            --font-faktum: ${faktum.variable};
          }
          .font-satoshi {
            font-family: ${satoshi.style.fontFamily.replaceAll("'", "")};
          }

          .font-faktum {
            font-family: ${faktum.style.fontFamily.replaceAll("'", "")};
          }

          .font-gopher {
            font-family: ${gopher.style.fontFamily.replaceAll("'", "")};
          }
        `}
        </style>
      </head>
      <body className={`${faktum.className} h-full text-white scroll-smooth`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
