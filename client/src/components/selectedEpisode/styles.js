import styled from 'styled-components';

export const EpisodeContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 75%;
  position: absolute;
  top: 20px;
  right: 20px;
  margin-top: 110px;

  // TABLET
    @media (max-width: 1607px) {
        width: 70%;
    }
`;

export const EpisodeTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const EpisodeDescription = styled.h2`
  font-size: 18px;
  color: #888;
  margin-bottom: 20px;
`;

export const AudioPlayer = styled.audio`
  margin-top: 20px;
  width: 100%;
`;
