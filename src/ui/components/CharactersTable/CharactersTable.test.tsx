import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharactersTable from "./CharactersTable";
import { characterMock } from "../../../mocks/characterMock";

it("should render a character row with correct data", () => {
  render(<CharactersTable characters={[characterMock]} />);

  expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
  expect(screen.getByText(/Male/i)).toBeInTheDocument();
  expect(screen.getByText(/Alive/i)).toBeInTheDocument();
  expect(screen.getByText(/Human/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Earth \(Replacement Dimension\)/i)
  ).toBeInTheDocument();
  expect(screen.getByText("51")).toBeInTheDocument();
});
