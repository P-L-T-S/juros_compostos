import { formatCurrencyToNumber } from "../utils/formatCurrencyToNumber";

// função de formatar moeda para número
describe("function to format currency to number", () => {
  // deveria formatar moeda para numero
  it("should format currency to number", () => {
    const currency = formatCurrencyToNumber("1.000,50");

    expect(currency).toBe(1000.5);
  });
});
