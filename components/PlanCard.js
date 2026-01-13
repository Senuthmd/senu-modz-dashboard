export default function PlanCard({ name, price, msg }) {
  return (
    <div className="bg-gray-900 p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="mb-4">Price: {price}</p>
      <a
        href={`https://wa.me/94743903048?text=${encodeURIComponent(msg)}`}
        target="_blank"
        className="bg-primary px-4 py-2 rounded text-black font-bold"
      >
        Contact on WhatsApp
      </a>
    </div>
  );
}
