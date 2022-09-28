import { formatCurrencyToNumber } from "./formatCurrencyToNumber";

interface ICalculateYieldProps {
  initialValue: string;
  monthlyValue: string;
  rates: string;
  period: string;
}

export function calculateYield({
  initialValue,
  monthlyValue,
  period,
  rates,
}: ICalculateYieldProps) {
  const floatInitialValue = formatCurrencyToNumber(initialValue);
  const floatMonthlyValue = formatCurrencyToNumber(monthlyValue);
  const floatPeriod = formatCurrencyToNumber(period);
  const floatRates = formatCurrencyToNumber(rates);
}
