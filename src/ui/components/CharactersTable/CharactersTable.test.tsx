import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharactersTable from "./CharactersTable";

describe("CharactersTable", () => {
  it("should render table headers correctly", () => {
    render(<CharactersTable />);

    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Gender/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Species/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Known Location/i)).toBeInTheDocument();
    expect(screen.getByText(/Episodes/i)).toBeInTheDocument();
  });
});
