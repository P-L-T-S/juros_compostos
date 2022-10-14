import { ITotalProfitabilityOutput } from "../interfaces/totalProfitability";
import { convertYearRateToMonthly } from "./convertYearRateToMonthly";
import { formatCurrencyToNumber } from "./formatCurrencyToNumber";
import { formatStringToCurrency } from "./formatStringToCurrency";

interface ICalculateYieldProps {
  initialValue: string;
  monthlyValue: string;
  rates: string;
  period: string;
  periodBy: string;
  ratesBy: string;
}

export function calculateYieldByYear({
  initialValue,
  monthlyValue,
  period,
  rates,
  periodBy,
  ratesBy,
}: ICalculateYieldProps) {
  const floatInitialValue = formatCurrencyToNumber(initialValue);
  const floatMonthlyValue = formatCurrencyToNumber(monthlyValue);
  const floatRates = formatCurrencyToNumber(rates);

  const periodNumber =
    periodBy == "anos" ? Number(period) * 12 : Number(period);
  const convertedFloatRates =
    ratesBy == "anos"
      ? convertYearRateToMonthly(floatRates).toFixed(20)
      : floatRates.toFixed(4);

  let amount = floatInitialValue;
  let amountYields = 0;
  let amountMonthly = floatInitialValue;

  const totalProfitability: ITotalProfitabilityOutput = {
    amount,
    amountYields,
    amountMonthly,
    valuesByMonth: [],
  };

  const taxa = parseFloat(convertedFloatRates);

  for (let i = 0; i < periodNumber; i++) {
    const juros = (amount * taxa) / 100;

    amountYields += juros;
    amountMonthly += floatMonthlyValue;

    amount += juros;
    amount += floatMonthlyValue;

    totalProfitability.valuesByMonth.push({
      amount: formatStringToCurrency(amount.toFixed(2)),
      amountMonthly: formatStringToCurrency(amountMonthly.toFixed(2)),
      amountYields: formatStringToCurrency(amountYields.toFixed(2)),
    });
  }

  totalProfitability.amount = formatStringToCurrency(amount.toFixed(2));
  totalProfitability.amountMonthly = formatStringToCurrency(
    amountMonthly.toFixed(2)
  );
  totalProfitability.amountYields = formatStringToCurrency(
    amountYields.toFixed(2)
  );

  return totalProfitability;
}
