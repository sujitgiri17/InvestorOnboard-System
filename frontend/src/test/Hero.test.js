import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("HeroImage");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders heading text", () => {
    render(<Hero />);
    const heading = screen.getByText("Invest in everything");
    expect(heading).toBeInTheDocument();
  });

  test("renders description text", () => {
    render(<Hero />);
    const description = screen.getByText(
      "Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more."
    );
    expect(description).toBeInTheDocument();
  });

  test("renders signup button", () => {
    render(<Hero />);
    const button = screen.getByRole("button", { name: "Sign up for free" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn", "btn-primary");
  });
});
