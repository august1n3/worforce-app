
import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";

import "./globals.css";
import "./ui/components/nav-bar"
import NavigationBar from "./ui/components/nav-bar";

const encode_sans = Encode_Sans({ 
  subsets: ["latin-ext"], 
  weight: ["100","200","300","400","500","600","700","800","900"] 
});

export const metadata: Metadata = {
  title: "WorkForce Dashboard",
  description: "Employer's Dashboard ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={encode_sans.className}><NavigationBar/>{children}</body>
    </html>
  );
}
