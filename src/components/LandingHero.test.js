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

test("renders logo and tagline", () => {
  render(<LandingHero />);

  expect(screen.getByAltText(/keystone notary group logo/i)).toBeInTheDocument();
  expect(
    screen.getByText(/mobile notary services in pennsylvania/i)
  ).toBeInTheDocument();
});

test("includes request notary button", () => {
  render(<LandingHero />);
  expect(
    screen.getByRole("link", { name: /request notary/i })
  ).toBeInTheDocument();
});

test("contact form fields have light and dark styles", () => {
  render(<LandingHero />);
  const nameInput = screen.getByPlaceholderText(/your name/i);
  expect(nameInput.className).toMatch(/bg-white/);
  expect(nameInput.className).toMatch(/dark:bg-neutral-800/);
});

test("hero background overlay animates when motion is allowed", () => {
  const { container } = render(<LandingHero />);
  const overlay = container.querySelector(
    "#home > div.absolute.inset-0.z-0.bg-cover.bg-center.opacity-40",
  );
  expect(overlay).toBeInTheDocument();
  expect(overlay.className).toMatch(/motion-safe:animate-bg-pan/);
});
