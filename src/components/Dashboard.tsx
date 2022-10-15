import { ITotalProfitabilityOutput } from "../interfaces/totalProfitability";
import { PainelCard } from "./PainelCard";

export function Dashboard({
  profitability,
}: {
  profitability: ITotalProfitabilityOutput;
}) {
  return (
    <PainelCard className="bg-slate-400 max-h-[500px]" role="dashboard">
      <div className="flex justify-evenly w-full mb-6">
        <section className="p-5 w-60 text-center rounded-md border border-slate-700 bg-slate-500">
          <h1 className="text-sm">Valor final:</h1>
          <h1
            className="text-2xl font-semibold text-zinc-200"
            role="valor_final"
          >
            {profitability.amount}
          </h1>
        </section>
        <section className="p-5 w-60 text-center rounded-md border border-slate-700 bg-slate-500">
          <h1 className="text-sm">Valor investido:</h1>
          <h1
            className="text-2xl font-semibold text-slate-900"
            role="valor_investido"
          >
            {profitability.amountMonthly}
          </h1>
        </section>
        <section className="p-5 w-60 text-center rounded-md border border-slate-700 bg-slate-500">
          <h1 className="text-sm">Recebido em juros </h1>
          <h1
            className="text-2xl font-semibold text-green-400"
            role="juros_recebido"
          >
            {profitability.amountYields}
          </h1>
        </section>
      </div>
      <div className="max-h-[450px] w-4/5 overflow-auto shadow-lg shadow-slate-900 ">
        {profitability.valuesByMonth.map((month, index) => (
          <div
            className="flex justify-evenly w-full"
            key={`${month.amount}_${index}`}
          >
            <section className="w-40 m-2 text-center rounded-md border border-slate-700 bg-slate-500">
              <h1 className="text-sm">MÊS</h1>
              <h1 className="font-semibold text-zinc-200">{index + 1} °</h1>
            </section>
            <section className="w-40 m-2 text-center rounded-md border border-slate-700 bg-slate-500">
              <h1 className="text-sm">Valor investido:</h1>
              <h1
                className="text-2xl font-semibold text-slate-900"
                role="valor_investido_mes"
              >
                {month.amountMonthly}
              </h1>
            </section>
            <section className="w-40 m-2 text-center rounded-md border border-slate-700 bg-slate-500">
              <h1 className="text-sm">Recebido em juros </h1>
              <h1
                className="text-2xl font-semibold text-green-400"
                role="juros_recebido_mes"
              >
                {month.amountYields}
              </h1>
            </section>
            <section className="w-40 m-2 text-center rounded-md border border-slate-700 bg-slate-500">
              <h1 className="text-sm">Valor final:</h1>
              <h1
                className="text-2xl font-semibold text-zinc-200"
                role="valor_final_mes"
              >
                {month.amount}
              </h1>
            </section>
          </div>
        ))}
      </div>
    </PainelCard>
  );
}
