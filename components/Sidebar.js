import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-black text-white p-5">
      <div className="text-center mb-8">
        <img
          src="/24daccd6-c2be-4610-a3d2-7841d3f93ecc.jpeg"
          className="w-24 mx-auto rounded"
          alt="SENU MODZ Logo"
        />
        <h2 className="text-xl font-bold mt-2">SENU MODZ</h2>
        <p className="text-gray-400 text-sm">Powering WhatsApp Automation</p>
      </div>
      <nav className="space-y-3">
        <Link href="/">Dashboard</Link>
        <Link href="/bots">Bots</Link>
        <Link href="/buy">Buy Panel</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/profile">Profile</Link>
      </nav>
    </aside>
  );
}
