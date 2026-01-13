import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome, SENUTH 👋</h1>
      <p className="text-gray-400">Powering WhatsApp Automation</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <Card title="Bots Available" value="5" />
        <Card title="Users Interested" value="—" />
        <Card title="Active Today" value="—" />
      </div>
    </div>
  );
}
