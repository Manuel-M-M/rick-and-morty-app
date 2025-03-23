import { screen, waitFor, fireEvent } from "@testing-library/react";
import { render } from "../../test-utils/renderWithTheme";
import CharactersListPage from "./CharactersListPage";
import * as api from "../../infrastructure/api/rickAndMortyApi";
import { characterMock } from "../../mocks/characterMock";

describe("CharactersListPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders character table with fetched characters", async () => {
    jest.spyOn(api, "fetchCharacters").mockResolvedValue({
      characters: characterMock,
      totalPages: 3,
    });

    render(<CharactersListPage />);

    await waitFor(() =>
      expect(screen.getByText(characterMock[0].name)).toBeInTheDocument()
    );
  });

  it("search input triggers fetch and resets page", async () => {
    const fetchCharactersMock = jest
      .spyOn(api, "fetchCharacters")
      .mockResolvedValue({
        characters: characterMock,
        totalPages: 3,
      });

    render(<CharactersListPage />);

    const input = screen.getByPlaceholderText("Search characters by name...");
    fireEvent.change(input, { target: { value: "Rick" } });

    await waitFor(() => {
      expect(fetchCharactersMock).toHaveBeenCalledWith("Rick", 1);
      expect(screen.getByText(characterMock[0].name)).toBeInTheDocument();
    });
  });

  it("paginates forward and backward", async () => {
    const fetchCharactersMock = jest
      .spyOn(api, "fetchCharacters")
      .mockResolvedValue({
        characters: characterMock,
        totalPages: 2,
      });

    render(<CharactersListPage />);

    await screen.findByText(characterMock[0].name);

    const nextBtn = screen.getByLabelText("Next page");
    fireEvent.click(nextBtn);

    await waitFor(() =>
      expect(fetchCharactersMock).toHaveBeenCalledWith("", 2)
    );

    const prevBtn = screen.getByLabelText("Previous page");
    fireEvent.click(prevBtn);

    await waitFor(() =>
      expect(fetchCharactersMock).toHaveBeenCalledWith("", 1)
    );
  });
});
