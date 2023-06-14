import * as styled from "./styles";

export default function TrackList({ podcastDetails }) {
    return (
      <styled.TableWrapper>
        <styled.TableHead>
          <thead>
            <tr>
              <styled.TableHeaderCell>Title</styled.TableHeaderCell>
              <styled.TableHeaderCell>Date</styled.TableHeaderCell>
              <styled.TableHeaderCell>Duration</styled.TableHeaderCell>
            </tr>
          </thead>
          <tbody>
            {podcastDetails && podcastDetails.map((track) => (
              <tr key={track.trackId}>
                <styled.TableDataCell>{track.trackName}</styled.TableDataCell>
                <styled.TableDataCell>{formatDate(track.releaseDate)}</styled.TableDataCell>
                <styled.TableDataCell>{formatDuration(track.trackTimeMillis)}</styled.TableDataCell>
              </tr>
            ))}
          </tbody>
        </styled.TableHead>
      </styled.TableWrapper>
    );
  }
  
  // Función auxiliar para formatear la fecha a horario en formato 'US'
  function formatDate(date) {
    const options = { month: 'numeric', day: 'numeric', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }
  
  // Función auxiliar para formatear la duración en milisegundos a un formato legible
  function formatDuration(duration) {
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  