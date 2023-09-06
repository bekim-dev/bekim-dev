import "./../styles/index.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
  display: "swap",
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Bekim Rexhepi | bekim.dev",
  description: "Front-End Developer with experience in React, React-Native and Next.js",
}

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
