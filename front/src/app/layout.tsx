import "../styles/globals.scss";
import { Inter } from "next/font/google";
import Navbar from "./components/templates/Navbar";
import Footer from "./components/templates/Footer";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
