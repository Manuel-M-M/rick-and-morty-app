import { render, screen, fireEvent } from "../../../test-utils/renderWithTheme";
import CharacterSearchInput from "./CharacterSearchInput";

test("calls onChange when typing in the input", () => {
  const onChange = jest.fn();
  render(<CharacterSearchInput value="" onChange={onChange} />);

  const input = screen.getByTestId("search-input");
  fireEvent.change(input, { target: { value: "Morty" } });

  expect(onChange).toHaveBeenCalledWith("Morty");
});
