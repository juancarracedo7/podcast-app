import * as styled from "./styles";
import {formatDate, formatDuration} from "../../utils/format";

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
                <styled.CustomLink to={`/episode/${track.trackId}`}><styled.TableDataCell>{track.trackName}</styled.TableDataCell></styled.CustomLink>
                <styled.TableDataCell>{formatDate(track.releaseDate)}</styled.TableDataCell>
                <styled.TableDataCell>{formatDuration(track.trackTimeMillis)}</styled.TableDataCell>
              </tr>
            ))}
          </tbody>
        </styled.TableHead>
      </styled.TableWrapper>
    );
  }
  
  