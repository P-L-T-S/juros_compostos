import { Airplane } from "phosphor-react";
import { Section } from "./components/Section";

function App() {
  return (
    <div className="flex flex-col items-center justify-center text-zinc-200 w-4/5 m-auto">
      <header>
        <h1 className="text-3xl font-black">Calculadora de Juros Compostos</h1>
      </header>
      <main className="grid grid-cols-2 gap-4 p-4 w-full">
        <Section id="initial_value" label="Valor inicial" startAdornment={'R$'} />
        <Section id="monthly_value" label="Valor mensal" startAdornment={'R$'}  />
        <Section id="rates" label="Rentabilidade" startAdornment={'%'}  />
        <Section id="period" label="Período" endAdornment={'R$'}  />
      </main>
      <footer className='flex justify-end items-center gap-4 w-full mt-4' >
        <button type="button" className="bg-slate-900 rounded p-2 font-semibold" >Calcular</button>
        <button type="button" className='p-2 font-semibold' >Limpar</button>
      </footer>
    </div>
  );
}

export default App;
