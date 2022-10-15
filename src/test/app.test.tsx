import { useState } from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "../App";

describe("component app", () => {
  // deveria renderizar o componente Painel mas não o Dashboard
  it("should render Painel component AND NOT dashboard", () => {
    render(<App />);

    const painel = screen.queryByRole("painel");
    const dashboard = screen.queryByRole("dashboard");

    expect(painel).toBeInTheDocument();
    expect(dashboard).not.toBeInTheDocument();
  });

  //   deveria renderizar o Painel e os inputs
  it("should render Painel AND the inputs", () => {
    render(<App />);

    const initial_value = screen.getByRole("textbox", {
      name: "Valor inicial",
    });

    const monthly_value = screen.getByRole("textbox", {
      name: "Valor mensal",
    });

    const rates = screen.getByRole("textbox", {
      name: "Rentabilidade",
    });

    const period = screen.getByRole("textbox", {
      name: "Período",
    });

    const calculate_button = screen.getByRole("button", {
      name: "Calcular",
    });

    const limpar_button = screen.getByRole("button", {
      name: "Limpar",
    });

    expect(initial_value).toBeInTheDocument();
    expect(monthly_value).toBeInTheDocument();
    expect(rates).toBeInTheDocument();
    expect(period).toBeInTheDocument();

    expect(calculate_button).toBeInTheDocument();
    expect(calculate_button).toBeDisabled();

    expect(limpar_button).toBeInTheDocument();
  });

  //   deveria preencher os inputs
  it("should fill the inputs", async () => {
    render(<App />);

    const initial_value = screen.getByRole("textbox", {
      name: "Valor inicial",
    });

    await userEvent.type(initial_value, "1.000,00");

    const monthly_value = screen.getByRole("textbox", {
      name: "Valor mensal",
    });

    await userEvent.type(monthly_value, "1.000,00");

    const rates = screen.getByRole("textbox", {
      name: "Rentabilidade",
    });

    await userEvent.type(rates, "8,00");

    const period = screen.getByRole("textbox", {
      name: "Período",
    });

    await userEvent.type(period, "{backspace}2");

    const calculate_button = screen.getByRole("button", {
      name: "Calcular",
    });

    expect(initial_value).toHaveValue("1.000,00");
    expect(monthly_value).toHaveValue("1.000,00");
    expect(rates).toHaveValue("8,00");
    expect(period).toHaveValue("2");

    expect(calculate_button).not.toBeDisabled();
  });
});
