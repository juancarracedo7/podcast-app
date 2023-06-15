import * as styled from "./styles";
import { formatDate, formatDuration } from "../../utils/format";
import { useState } from "react";

export default function TrackList({ podcastDetails }) {
  const [visibleItems, setVisibleItems] = useState(15);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 15);
  };

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
        <tr>
          <styled.TableDataSeparatorCell colSpan="3" />
        </tr>
        <tbody>
          {podcastDetails &&
            podcastDetails.slice(0, visibleItems).map((track) => (
              <tr key={track.trackId}>
                <styled.CustomLink to={`/episode/${track.trackId}`}>
                  <styled.TableDataCellName>
                    {track.trackName}
                  </styled.TableDataCellName>
                </styled.CustomLink>
                <styled.TableDataCell>
                  {formatDate(track.releaseDate)}
                </styled.TableDataCell>
                <styled.TableDataCell>
                  {formatDuration(track.trackTimeMillis)}
                </styled.TableDataCell>
              </tr>
            ))}
          {podcastDetails && visibleItems < podcastDetails.length && (
            <tr>
              <td colSpan="3">
                <styled.LoadMoreButton onClick={loadMoreItems}>
                  Load More
                </styled.LoadMoreButton>
              </td>
            </tr>
          )}
        </tbody>
      </styled.TableHead>
    </styled.TableWrapper>
  );
}
