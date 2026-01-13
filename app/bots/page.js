import BotCard from "../../components/BotCard";

export default function Bots() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Available Bots</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <BotCard name="SULA MD Bot" desc="Feature-rich WhatsApp bot" />
        <BotCard name="Mini Bot" desc="Basic auto-response bot" />
      </div>
    </div>
  );
}
