import styled from "styled-components";

const commonFontFamily = "Arial, sans-serif";

export const EpisodeCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%; 
  height: 100px; 
  border: 1px solid white;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const EpisodeCountContainer = styled.div`
  flex-grow: 1; /* Ocupa todo el espacio disponible horizontalmente */
`;

export const EpisodeCount = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 10px; /* Ajusta los márgenes según tus necesidades */
`;

export const EpisodeText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  font-family: ${commonFontFamily};
`;
