import { render, screen, fireEvent } from "@testing-library/react";
import LandingHero from "./LandingHero.jsx";

test("FAQ accordion shows only one open panel at a time", () => {
  render(<LandingHero />);

  const first = screen.getByRole("button", { name: /notary appointment/i });
  const second = screen.getByRole("button", {
    name: /mobile notary services/i,
  });

  // Initially collapsed
  expect(first).toHaveAttribute("aria-expanded", "false");
  expect(second).toHaveAttribute("aria-expanded", "false");

  fireEvent.click(first);
  const firstPanel = screen.getByText(
    /government-issued photo id/i,
  ).parentElement;
  const secondPanel = screen.getByText(
    /public meeting location in Bucks and Montgomery County\./i,
  ).parentElement;
  expect(first).toHaveAttribute("aria-expanded", "true");
  expect(firstPanel).toHaveAttribute("aria-hidden", "false");
  expect(secondPanel).toHaveAttribute("aria-hidden", "true");

  fireEvent.click(second);
  expect(first).toHaveAttribute("aria-expanded", "false");
  expect(firstPanel).toHaveAttribute("aria-hidden", "true");
  expect(second).toHaveAttribute("aria-expanded", "true");
  expect(secondPanel).toHaveAttribute("aria-hidden", "false");
});
