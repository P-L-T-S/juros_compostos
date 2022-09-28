import { Dispatch, SetStateAction } from "react";

export function formatStringToCurrency(
  value: string,
  setValue?: Dispatch<SetStateAction<string>>
) {
  value = value.replace(".", "").replace(",", "").replace(/\D/g, "");

  if (value === "" && !!setValue) {
    setValue("");
    return "";
  } else if (!value && !setValue) {
    return "";
  }

  const formated = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
  }).format(parseFloat(value) / 100);

  if (!!setValue) setValue(formated);

  return formated;
}
