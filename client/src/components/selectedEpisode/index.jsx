import * as styled from './styles';

export default function SelectedEpisode({ selectedEpisode }) {
  return (
    <styled.EpisodeContainer>
      {selectedEpisode && (
        <div key={selectedEpisode.trackId}>
          <styled.EpisodeTitle>{selectedEpisode.trackName}</styled.EpisodeTitle>
          <styled.EpisodeDescription>{selectedEpisode.description}</styled.EpisodeDescription>
          <styled.AudioPlayer controls>
            <source src={selectedEpisode.previewUrl} type="audio/mpeg" />
            Tu navegador no admite la reproducción de audio.
          </styled.AudioPlayer>
        </div>
      )}
    </styled.EpisodeContainer>
  );
}
