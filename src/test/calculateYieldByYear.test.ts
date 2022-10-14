import { calculateYieldByYear } from "../utils/calculateYieldByYear";

// função de calcular os juros compostos
describe("function to calculate compound interest", () => {
  // deveria calcular o resultado dos juros compostos sem valor mensal
  it("should to calculate the result of compound interest without monthly value", () => {
    const profitability = calculateYieldByYear({
      initialValue: "1000,00",
      monthlyValue: "0,00",
      period: "2",
      rates: "8,00",
      periodBy: "anos",
      ratesBy: "anos",
    });

    expect(profitability.amount).toBe("1.166,40");
    expect(profitability.amountMonthly).toBe("1.000,00");
    expect(profitability.amountYields).toBe("166,40");
  });
  // deveria calcular o resultado dos juros compostos com ratesBy e periodBy igual á 'meses'
  it("should to calculate the result of compound interest with ratesBy and periodBy equal 'meses'", () => {
    const profitability = calculateYieldByYear({
      initialValue: "1000,00",
      monthlyValue: "0,00",
      period: "24",
      rates: "0,50",
      periodBy: "meses",
      ratesBy: "meses",
    });

    expect(profitability.amount).toBe("1.127,16");
    expect(profitability.amountMonthly).toBe("1.000,00");
    expect(profitability.amountYields).toBe("127,16");
  });

  // deveria calcular o resultado dos juros compostos com valor mensal
  it("should to calculate the result of compound interest with monthly value", () => {
    const profitability = calculateYieldByYear({
      initialValue: "1000,00",
      monthlyValue: "1000,00",
      period: "2",
      rates: "8,00",
      periodBy: "anos",
      ratesBy: "anos",
    });

    expect(profitability.amount).toBe("27.028,88");
    expect(profitability.amountMonthly).toBe("25.000,00");
    expect(profitability.amountYields).toBe("2.028,88");
  });

  // deveria calcular o resultado dos juros compostos com valor mensal e ratesBy igual á 'meses'
  it("should to calculate the result of compound interest with monthly value and ratesBy equal 'meses'", () => {
    const profitability = calculateYieldByYear({
      initialValue: "1000,00",
      monthlyValue: "1000,00",
      period: "2",
      rates: "0,50",
      periodBy: "anos",
      ratesBy: "meses",
    });

    expect(profitability.amount).toBe("26.559,12");
    expect(profitability.amountMonthly).toBe("25.000,00");
    expect(profitability.amountYields).toBe("1.559,12");
  });
});
