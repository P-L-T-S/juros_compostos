export function convertYearRateToMonthly(yearRate: number) {
  return ((yearRate / 100 + 1) ** (1 / 12) - 1) * 100;
}
