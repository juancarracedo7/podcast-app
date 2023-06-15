import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 1.5rem;
  background-color: #f1f3f6;
  color: #ffffff;
  text-align: center;
  border-bottom: 1px solid #ccc;
`;

export const Title = styled.h1`
  color: #4285f4;
  font-size: 24px;
  text-align: left;
  align-self: flex-start;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
    color: inherit;
  `;


