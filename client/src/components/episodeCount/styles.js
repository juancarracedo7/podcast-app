import styled from "styled-components";

export const EpisodeCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%; /* Aumenta el ancho de la tarjeta según tus necesidades */
  height: 100px; /* Ajusta la altura de la tarjeta según tus necesidades */
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
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
`;
