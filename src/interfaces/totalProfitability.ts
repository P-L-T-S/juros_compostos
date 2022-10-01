export interface ITotalProfitability {
  amount: number | string;
  amountYields: number | string;
  amountMonthly: number | string;
}

export interface ITotalProfitabilityOutput extends ITotalProfitability {
  valuesByMonth: {
    amount: number | string;
    amountYields: number | string;
    amountMonthly: number | string;
  }[];
}
