import styled from "styled-components";
import { Link } from 'react-router-dom';

const commonFontFamily = "Arial, sans-serif";

export const TableWrapper = styled.div`
  margin-top: 20px;
  width: 50%;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const Table = styled.table`
  width: 100%; 
  border-collapse: collapse;
  border-spacing: 0;
  font-family: ${commonFontFamily};
  font-size: 14px;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const TableHead = styled.thead`
  background-color: white;
  color: #000;
  font-weight: bold;

`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;

`;

export const TableDataCell = styled.td`
  padding: 10px;
  text-align: left;
`;

export const TableDataCellName = styled.td`
  padding: 10px;
  text-align: left;
  font-weight: bold;
  color: #1a237e;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #000051;
  }
`;

export const CustomLink = styled(Link)`
text-decoration: none;
color: inherit;
`;


export const TableDataSeparatorCell = styled.td`
  height: 1px;
  background-color: #000;
  border: none;
`;

export const LoadMoreButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #1a237e;
  color: white;
  font-weight: bold;
  font-family: ${commonFontFamily};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000051;
  }
`;