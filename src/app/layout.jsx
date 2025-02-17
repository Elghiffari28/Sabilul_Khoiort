import localFont from "next/font/local";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import Navbar from "@/components/Navbar";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className}  bg-color-primary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
