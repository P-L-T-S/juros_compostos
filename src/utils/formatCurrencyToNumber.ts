import { Dispatch, SetStateAction } from "react";

export function formatCurrencyToNumber(value: string) {
  value = value.replace(".", "").replace(",", "").replace(/\D/g, "");

  const formated = parseFloat(value) / 100;

  return formated;
}
