export const characterMock = {
  id: 1,
  name: "Rick Sanchez",
  gender: "Male",
  status: "Alive",
  species: "Human",
  location: {
    name: "Earth (Replacement Dimension)",
  },
  episode: Array.from({ length: 51 }, (_, i) => ({ id: i + 1 })),
};
