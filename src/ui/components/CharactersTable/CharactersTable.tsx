import { Character } from "../../../domain/models/Character";

type CharactersTableProps = {
  characters: Character[];
};

const CharactersTable = ({ characters }: CharactersTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Status</th>
          <th>Species</th>
          <th>Last Known Location</th>
          <th>Episodes</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((char) => (
          <tr key={char.id}>
            <td>{char.name}</td>
            <td>{char.gender}</td>
            <td>{char.status}</td>
            <td>{char.species}</td>
            <td>{char.location.name}</td>
            <td>{char.episode.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CharactersTable;
