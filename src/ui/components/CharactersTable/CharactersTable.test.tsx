import { render, screen } from "../../../test-utils/renderWithTheme";
import "@testing-library/jest-dom";
import CharactersTable from "./CharactersTable";
import { characterMock } from "../../../mocks/characterMock";

it("should render a character row with correct data", () => {
  render(<CharactersTable characters={[characterMock[0]]} />);

  expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
  expect(screen.getByText(/Male/i)).toBeInTheDocument();
  expect(screen.getByText(/Alive/i)).toBeInTheDocument();
  expect(screen.getByText(/Human/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Earth \(Replacement Dimension\)/i)
  ).toBeInTheDocument();
  expect(screen.getByText("1")).toBeInTheDocument();
});

it("should render multiple character rows when receiving an array", () => {
  const characters = [
    { ...characterMock[0], id: 1, name: "Rick" },
    { ...characterMock[0], id: 2, name: "Morty" },
  ];

  render(<CharactersTable characters={characters} />);

  expect(screen.getByText("Rick")).toBeInTheDocument();
  expect(screen.getByText("Morty")).toBeInTheDocument();
});

it("should render only headers if character list is empty", () => {
  render(<CharactersTable characters={[]} />);

  const rows = screen.queryAllByRole("row");
  expect(rows).toHaveLength(1);
});
