import { Character } from "../../../domain/models/Character";
import { Table, Thead, Th, Td, Tr } from "./CharactersTable.styles";

type CharactersTableProps = {
  characters: Character[];
};

const CharactersTable = ({ characters }: CharactersTableProps) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Gender</Th>
          <Th>Status</Th>
          <Th>Species</Th>
          <Th>Last Known Location</Th>
          <Th>Episodes</Th>
        </Tr>
      </Thead>
      <tbody>
        {characters.map((char) => (
          <Tr key={char.id}>
            <Td>{char.name}</Td>
            <Td>{char.gender}</Td>
            <Td>{char.status}</Td>
            <Td>{char.species}</Td>
            <Td>{char.location.name}</Td>
            <Td>{char.episode.length}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CharactersTable;
