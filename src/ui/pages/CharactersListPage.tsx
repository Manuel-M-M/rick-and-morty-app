import { useEffect, useState } from "react";
import { Character } from "../../domain/models/Character";
import { fetchCharacters } from "../../infrastructure/api/rickAndMortyApi";
import CharactersTable from "../components/CharactersTable/CharactersTable";

const CharactersListPage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchCharacters().then(setCharacters);
  }, []);

  return <CharactersTable characters={characters} />;
};

export default CharactersListPage;
