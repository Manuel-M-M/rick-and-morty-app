import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: ${({ theme }) => theme.spacing(4)} auto;
  font-family: ${({ theme }) => theme.font.family};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow: ${({ theme }) => theme.shadow.glow};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
`;

export const Thead = styled.thead`
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Th = styled.th`
  padding: ${({ theme }) => theme.spacing(2)};
  text-align: left;
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.font.size.heading};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Td = styled.td`
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.colors.text};
`;

export const Tr = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;
