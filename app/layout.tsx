import "./globals.css";
import { Barlow } from "next/font/google";
import { Fraunces } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["600"],
});
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
