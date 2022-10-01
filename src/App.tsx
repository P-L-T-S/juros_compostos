import { useState } from "react";
import { Painel } from "./components/Painel";
import { ITotalProfitabilityOutput } from "./interfaces/totalProfitability";

function App() {
  const [totalProfitability, setTotalProfitability] =
    useState<ITotalProfitabilityOutput>({
      amount: 0,
      amountMonthly: 0,
      amountYields: 0,
      valuesByMonth: [],
    });

  return (
    <div className="flex flex-col items-center justify-center w-4/5 h-screen m-auto">
      <Painel setTotalProfitability={setTotalProfitability} />

      <h1 className='text-2xl text-zinc-200' >{totalProfitability.amount}</h1>
    </div>
  );
}

export default App;
