export default function SelectedEpisode({ selectedEpisode}) {
    return (
        <div>
           {selectedEpisode && (
                <div key={selectedEpisode.trackId}>
                    <h1>{selectedEpisode.trackName}</h1>
                    <h2>{selectedEpisode.description}</h2>
                    <audio controls>
            <source src={selectedEpisode.previewUrl} type="audio/mpeg" />
            Tu navegador no admite la reproducción de audio.
          </audio>
                </div>
            )}
        </div>
    )
}
