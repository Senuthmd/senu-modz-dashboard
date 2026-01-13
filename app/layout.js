import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="flex bg-[#0a0f1f]">
        <Sidebar />
        <main className="flex-1">
          <Navbar />
          <div className="p-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
