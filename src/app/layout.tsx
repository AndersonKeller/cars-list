import { Header } from "@/components/header/Header";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const gabarito = Roboto({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Cars list",
  description: "Get you car now",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
        {" "}
        <Header />
        {children}
      </body>
    </html>
  );
}
