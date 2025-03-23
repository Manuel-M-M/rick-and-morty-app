import { Character } from "../domain/models/Character";

export const characterMock: Character[] = [
  {
    id: 1,
    name: "Rick Sanchez",
    gender: "Male",
    status: "Alive",
    species: "Human",
    location: { name: "Earth (Replacement Dimension)" },
    episode: [{ id: 1 }],
  },
];
