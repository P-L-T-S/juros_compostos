import { useState } from "react";
import { PeriodByButton } from "./components/PeriodByButtom";
import { Section } from "./components/Section";
import { calculateYield } from "./utils/calculateYield";
import { formatStringToCurrency } from "./utils/formatStringToCurrency";

function App() {
  const [initialValue, setInitialValue] = useState("");
  const [monthlyValue, setMonthlyValue] = useState("");
  const [rates, setRates] = useState("");
  const [ratesBy, setRatesBy] = useState("");
  const [period, setPeriod] = useState("");
  const [periodBy, setPeriodBy] = useState("");

  return (
    <div className="flex flex-col items-center justify-center text-zinc-200 w-4/5 h-screen m-auto">
      <header>
        <h1 className="text-3xl font-black">Calculadora de Juros Compostos</h1>
      </header>
      <main className="grid grid-cols-2 gap-8 p-4 w-full">
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
          onChange={(e) => formatStringToCurrency(e.target.value, setPeriod)}
        />
      </main>
      <footer className="flex justify-end items-center gap-4 w-full mt-4">
        <button
          type="button"
          className="bg-slate-900 rounded p-2 font-semibold"
          onClick={() =>
            calculateYield({ initialValue, monthlyValue, period, rates })
          }
        >
          Calcular
        </button>
        <button type="button" className="p-2 font-semibold">
          Limpar
        </button>
      </footer>
    </div>
  );
}

export default App;
