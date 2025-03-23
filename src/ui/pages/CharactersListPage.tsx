import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Character } from "../../domain/models/Character";
import { fetchCharacters } from "../../infrastructure/api/rickAndMortyApi";
import CharactersTable from "../components/CharactersTable/CharactersTable";
import CharacterSearchInput from "../components/CharacterSearchInput/CharacterSearchInput";
import {
  PageContainer,
  PaginationContainer,
  PageButton,
} from "./CharactersListPage.styles";

const CharactersListPage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchCharacters(search, currentPage)
      .then(({ characters, totalPages }) => {
        setCharacters(characters);
        setTotalPages(totalPages);
      })
      .catch(() => {
        setCharacters([]);
        setTotalPages(1);
      });
  }, [search, currentPage]);

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  return (
    <PageContainer>
      <CharacterSearchInput value={search} onChange={handleSearch} />
      <CharactersTable characters={characters} />
      {totalPages > 1 && (
        <PaginationContainer>
          <PageButton
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <FaArrowLeft />
          </PageButton>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <PageButton
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <FaArrowRight />
          </PageButton>
        </PaginationContainer>
      )}
    </PageContainer>
  );
};

export default CharactersListPage;
