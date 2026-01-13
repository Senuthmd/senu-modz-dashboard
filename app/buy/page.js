import PlanCard from "../../components/PlanCard";

export default function Buy() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Buy / Deploy Panel</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <PlanCard name="FREE" price="0" msg="I want FREE BOT" />
        <PlanCard name="BASIC" price="499" msg="I want BASIC BOT" />
        <PlanCard name="PREMIUM" price="999" msg="I want PREMIUM BOT" />
      </div>
    </div>
  );
}
