import { Dispatch, SetStateAction, useState } from "react";

import { PeriodByButton } from "./PeriodByButtom";
import { Section } from "./Section";

import { calculateYieldByYear } from "../utils/calculateYieldByYear";
import { formatStringToCurrency } from "../utils/formatStringToCurrency";

import { ITotalProfitabilityOutput } from "../interfaces/totalProfitability";

export function Painel({
  setTotalProfitability,
}: {
  setTotalProfitability: Dispatch<SetStateAction<ITotalProfitabilityOutput>>;
}) {
  const [initialValue, setInitialValue] = useState("");
  const [monthlyValue, setMonthlyValue] = useState("");
  const [rates, setRates] = useState("");
  const [period, setPeriod] = useState("");
  const [ratesBy, setRatesBy] = useState("");
  const [periodBy, setPeriodBy] = useState("");

  function handleClickToCalculate() {
    const calculatedYield = calculateYieldByYear({
      initialValue,
      monthlyValue,
      period,
      rates,
      periodBy,
      ratesBy,
    });

    setTotalProfitability(calculatedYield);
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full text-zinc-200 bg-slate-500 rounded-lg">
      <header>
        <h1 className="text-3xl font-black">Calculadora de Juros Compostos</h1>
      </header>
      <main className="grid grid-cols-2 gap-8 w-full">
        <Section
          id="initial_value"
          label="Valor inicial"
          startAdornment={"R$"}
          value={initialValue}
          onChange={(e) => {
            formatStringToCurrency(e.target.value, setInitialValue);
          }}
        />
        <Section
          id="monthly_value"
          label="Valor mensal"
          startAdornment={"R$"}
          value={monthlyValue}
          onChange={(e) =>
            formatStringToCurrency(e.target.value, setMonthlyValue)
          }
        />
        <Section
          id="rates"
          label="Rentabilidade"
          startAdornment={"%"}
          endAdornment={<PeriodByButton setPeriodBy={setRatesBy} />}
          value={rates}
          onChange={(e) => formatStringToCurrency(e.target.value, setRates)}
        />
        <Section
          id="period"
          label="Período"
          endAdornment={<PeriodByButton setPeriodBy={setPeriodBy} />}
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        />
      </main>
      <footer className="flex justify-end items-center gap-4 w-full mt-4">
        <button
          type="button"
          className="bg-slate-900 rounded p-2 font-semibold"
          onClick={() => handleClickToCalculate()}
        >
          Calcular
        </button>
        <button
          type="button"
          className="bg-slate-700 rounded p-2 font-semibold"
        >
          Limpar
        </button>
      </footer>
    </div>
  );
}
