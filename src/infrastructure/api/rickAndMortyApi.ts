import { Character } from "../../domain/models/Character";
import { RickAndMortyApiCharacter } from "./types";

const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (): Promise<Character[]> => {
  const response = await fetch(`${BASE_URL}/character`);
  const data = await response.json();

  return (data.results as RickAndMortyApiCharacter[]).map((item) => ({
    id: item.id,
    name: item.name,
    gender: item.gender,
    status: item.status,
    species: item.species,
    location: { name: item.location.name },
    episode: item.episode.map((url) => ({
      id: parseInt(url.split("/").pop() || "0"),
    })),
  }));
};
