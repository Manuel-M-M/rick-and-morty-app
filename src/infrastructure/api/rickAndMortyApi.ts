import { Character } from "../../domain/models/Character";
import { RickAndMortyApiCharacter } from "./types";

const BASE_URL = "https://rickandmortyapi.com/api";

export type FetchCharactersResult = {
  characters: Character[];
  totalPages: number;
};

export const fetchCharacters = async (
  name = "",
  page = 1
): Promise<FetchCharactersResult> => {
  const url = `${BASE_URL}/character?name=${encodeURIComponent(
    name
  )}&page=${page}`;
  const response = await fetch(url);

  if (!response.ok) {
    return { characters: [], totalPages: 0 };
  }

  const data = await response.json();
  const characters = (data.results as RickAndMortyApiCharacter[]).map(
    mapToCharacter
  );
  const totalPages = data.info?.pages || 1;

  return { characters, totalPages };
};

const mapToCharacter = (item: RickAndMortyApiCharacter): Character => ({
  id: item.id,
  name: item.name,
  gender: item.gender,
  status: item.status,
  species: item.species,
  location: { name: item.location.name },
  episode: item.episode.map((url) => ({
    id: parseInt(url.split("/").pop() || "0", 10),
  })),
});
