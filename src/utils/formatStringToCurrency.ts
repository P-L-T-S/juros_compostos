import { Dispatch, SetStateAction } from "react";

export function formatStringToCurrency(value: string) {
  value = value.replace(".", "").replace(",", "").replace(/\D/g, "");

  const formated = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
  }).format(parseFloat(value) / 100);

  return formated;
}
