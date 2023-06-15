import styled from "styled-components";
import { Link } from 'react-router-dom';

const commonFontFamily = "Arial, sans-serif";

export const TableWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px;
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
  background-color: #f2f2f2;
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

export const CustomLink = styled(Link)`
text-decoration: none;
color: inherit;
`;