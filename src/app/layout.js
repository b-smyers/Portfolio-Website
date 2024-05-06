import { Inter } from "next/font/google";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brendan Smyers",
  description: "The portfolio page for Brendan Smyers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
