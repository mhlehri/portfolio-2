import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MH Lehri",
  description: "Portfolio of Mahmud Hassan Lehri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
