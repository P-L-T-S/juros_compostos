import { formatStringToCurrency } from "../utils/formatStringToCurrency"

// função de formatar string para formato de moeda
describe('function to format string to currency', ()=>{
    // deveria formatar texto para formato de moeda
    it('should format string to currency',()=>{
        const currency = formatStringToCurrency('1.000,00')

        expect(currency).toBe('1.000,00')
    })
})