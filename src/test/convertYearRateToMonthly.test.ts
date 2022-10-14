import { convertYearRateToMonthly } from "../utils/convertYearRateToMonthly"

// função para converter taxa anual em mensal
describe('function to convert yearly rate to monthly',()=>{
    // deveria converter taxa anual em mensal
    it('should convert yearly rate to monthly rate', ()=>{
        const rates = convertYearRateToMonthly(8.00)

        expect(rates).toBe(0.643403011000343)
    })
})