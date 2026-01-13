export default function Card({ title, value }) {
  return (
    <div className="bg-gray-900 p-6 rounded shadow-md">
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-2xl mt-2">{value}</p>
    </div>
  );
}
