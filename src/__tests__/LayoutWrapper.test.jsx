import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LayoutWrapper from "../components/LayoutWrapper";

// Basic render test to ensure skip link is present
it("renders skip link for accessibility", () => {
  render(
    <HelmetProvider>
      <BrowserRouter>
        <LayoutWrapper>
          <div>content</div>
        </LayoutWrapper>
      </BrowserRouter>
    </HelmetProvider>,
  );
  const link = screen.getByRole("link", { name: /skip to content/i });
  expect(link).toBeInTheDocument();
});
