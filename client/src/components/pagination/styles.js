import styled from "styled-components";

export const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const PaginationItem = styled.li`
  margin-right: 8px;
  padding: 4px 8px;
  background-color: ${({ active }) => (active ? 'lightblue' : 'transparent')};
  border: 1px solid lightblue;
  border-radius: 4px;
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};

  &:hover {
    background-color: ${({ active }) => (active ? 'lightblue' : 'rgba(0, 0, 0, 0.1)')};
  }
`;