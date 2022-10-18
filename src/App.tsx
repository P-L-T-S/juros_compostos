import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
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

  const [showDashboard, setShowDashboard] = useState(false);
  return (
    <div className="flex flex-col justify-center gap-10 w-4/5 h-screen m-auto">
      {!showDashboard ? (
        <Painel
          setTotalProfitability={setTotalProfitability}
          setShowDash={setShowDashboard}
        />
      ) : (
        <Dashboard
          profitability={totalProfitability}
          setShowDash={setShowDashboard}
        />
      )}
    </div>
  );
}

export default App;
