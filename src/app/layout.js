import "./globals.css";
import Navbar from "../components/Navbar";
export const metadata = {
  title: "MH Lehri",
  description: "Portfolio of Mahmud Hassan Lehri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`scroll-smooth`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
