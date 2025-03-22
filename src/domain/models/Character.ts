export type Character = {
  id: number;
  name: string;
  gender: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
  episode: { id: number }[];
};
