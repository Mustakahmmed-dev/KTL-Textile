import Navbar from "@/components/Header/Navbar";
import "./globals.css";

export const metadata = {
  title: "KTL Textile - Leading Textile Company in Yangon, Myanmar",
  description: "KTL Textile is a leading textile company based in Yangon, Myanmar. We specialize in producing high-quality textiles and fabrics for various industries. With our state-of-the-art manufacturing facilities and commitment to excellence, we strive to deliver superior products that meet the needs of our customers worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar />
      {children}
      </body>
    </html>
  );
}
