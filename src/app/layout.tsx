import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "YASHENSHA | HOME",
  description: "Showcase of an UX Architect."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-dvh w-dvw bg-[#DDDDDD] flex flex-col">
          <Navbar />
          <div className="bg-transparent-500 px-14 py-5 h-full w-full overflow-auto ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
