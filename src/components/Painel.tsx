import { Dispatch, SetStateAction, useState } from "react";

import { PeriodByButton } from "./PeriodByButtom";
import { Section } from "./Section";

import { calculateYieldByYear } from "../utils/calculateYieldByYear";
import { formatStringToCurrency } from "../utils/formatStringToCurrency";

import { ITotalProfitabilityOutput } from "../interfaces/totalProfitability";
import { PainelCard } from "./PainelCard";
import { formatCurrencyToNumber } from "../utils/formatCurrencyToNumber";

export function Painel({
  setTotalProfitability,
  setShowDash,
}: {
  setTotalProfitability: Dispatch<SetStateAction<ITotalProfitabilityOutput>>;
  setShowDash: Dispatch<SetStateAction<boolean>>;
}) {
  const [initialValue, setInitialValue] = useState("0,00");
  const [monthlyValue, setMonthlyValue] = useState("0,00");
  const [rates, setRates] = useState("0,00");
  const [period, setPeriod] = useState("0");
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
    setShowDash(true);
  }

  function clearInputs() {
    setInitialValue("0,00");
    setMonthlyValue("0,00");
    setRates("0,00");
    setPeriod("0");
  }
  return (
    <PainelCard role="painel">
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
            setInitialValue(formatStringToCurrency(e.target.value));
          }}
        />
        <Section
          id="monthly_value"
          label="Valor mensal"
          startAdornment={"R$"}
          value={monthlyValue}
          onChange={(e) =>
            setMonthlyValue(formatStringToCurrency(e.target.value))
          }
        />
        <Section
          id="rates"
          label="Rentabilidade"
          startAdornment={"%"}
          endAdornment={<PeriodByButton setPeriodBy={setRatesBy} />}
          value={rates}
          onChange={(e) => setRates(formatStringToCurrency(e.target.value))}
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
          name="calculate"
          className="bg-slate-900 rounded p-2 font-semibold"
          onClick={() => handleClickToCalculate()}
          disabled={formatCurrencyToNumber(rates) === 0 || Number(period) === 0}
        >
          Calcular
        </button>
        <button
          type="button"
          name="limpar"
          className="bg-slate-700 rounded p-2 font-semibold"
          onClick={() => clearInputs()}
        >
          Limpar
        </button>
      </footer>
    </PainelCard>
  );
}
