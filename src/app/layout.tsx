import { Header } from "@/components/header/Header";
import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({ subsets: ["latin"] });

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
