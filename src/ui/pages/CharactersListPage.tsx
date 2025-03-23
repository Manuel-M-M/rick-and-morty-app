import { useEffect, useState } from "react";
import { Character } from "../../domain/models/Character";
import { fetchCharactersByName } from "../../infrastructure/api/rickAndMortyApi";
import CharactersTable from "../components/CharactersTable/CharactersTable";
import CharacterSearchInput from "../components/CharacterSearchInput/CharacterSearchInput";

const CharactersListPage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCharactersByName(search)
      .then(setCharacters)
      .catch(() => setCharacters([]));
  }, [search]);

  return (
    <>
      <CharacterSearchInput value={search} onChange={setSearch} />
      <CharactersTable characters={characters} />
    </>
  );
};

export default CharactersListPage;
