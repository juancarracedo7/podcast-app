import styled from "styled-components";


export const EpisodeCountContainer = styled.div`
  position: absolute;
  margin: 10px;
  width: 80%;
  top: 0;
  right: 0;

  @media (max-width: 1607px) {
    width: 70%;
  }
`;

export const TrackListContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;
