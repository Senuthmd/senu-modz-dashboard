export default function BotCard({ name, desc }) {
  return (
    <div className="bg-gray-900 p-6 rounded shadow-md">
      <h2 className="font-bold text-xl">{name}</h2>
      <p className="mt-2">{desc}</p>
      <a
        href="/api/deploy"
        className="mt-3 inline-block bg-primary px-4 py-2 rounded text-black font-bold"
      >
        Deploy Bot
      </a>
    </div>
  );
}
