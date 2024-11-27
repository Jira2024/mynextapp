import Footer from "./components/Footer";
import Menu from "./components/Menu";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
