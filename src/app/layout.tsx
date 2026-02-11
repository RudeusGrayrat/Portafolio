import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav/Nav";
import BinaryBackground from "@/components/BackgroundDynamic"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miguel Nicolas",
  description: "Portafolio of Miguel Nicolas, a software developer specializing in web development.",
  icons: {
    icon: "nc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <BinaryBackground>
        </BinaryBackground>
        <div className=" flex flex-col bg-black bg-opacity-[0.75] h-screen w-dvh">
          <div className="h-20">
            <Navbar></Navbar>
          </div>
          <div className="flex-grow">
            {children}
          </div>
        </div>
      </body>

    </html>
  );
}
