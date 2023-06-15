import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// Animación de titilación
const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

// Estilos del componente LoadingIndicator
export const LoadingIndicator = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #4285f4;
  animation: ${blinkAnimation} 1s infinite;
  margin-left: 10px;
`;

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

export const BackButton = styled.button`
  background-color: lightblue;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;
  position: fixed;
  bottom: 0;
  left: 20px;

  &:hover {
    background-color: #000051;
    color: white;
  }
`



