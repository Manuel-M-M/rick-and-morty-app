import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: ${({ theme }) => theme.spacing(1)};
  font-size: ${({ theme }) => theme.font.size.base};
  margin: ${({ theme }) => theme.spacing(2)} auto;
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.accent};
  }
`;

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const CharacterSearchInput = ({ value, onChange }: Props) => {
  return (
    <Input
      type="text"
      placeholder="Search characters by name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      data-testid="search-input"
    />
  );
};

export default CharacterSearchInput;
