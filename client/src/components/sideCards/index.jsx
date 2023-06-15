import { useLocation } from "react-router-dom";
import * as styled from "./styles";

export default function SideCards({ podcastDetails }) {
  const location = useLocation();

  return (
    <styled.Container>
      {podcastDetails && (
        <>
          {location.pathname !== `/podcast/${podcastDetails[0].trackId}` ? (
            <styled.CustomLink to={`/podcast/${podcastDetails[0].trackId}`}>
              <styled.Image src={podcastDetails[0].artworkUrl100} alt="podcast" />
              <styled.Details>
                <styled.LineSeparator />
                <styled.TrackName>{podcastDetails[0].trackName}</styled.TrackName>
                <styled.ArtistName>By {podcastDetails[0].artistName}</styled.ArtistName>
                <styled.LineSeparator />
                <styled.Description>Description: {podcastDetails[0].description}</styled.Description>
              </styled.Details>
            </styled.CustomLink>
          ) : (
            <>
              <styled.Image src={podcastDetails[0].artworkUrl100} alt="podcast" />
              <styled.Details>
                <styled.LineSeparator />
                <styled.TrackName>{podcastDetails[0].trackName}</styled.TrackName>
                <styled.ArtistName>By {podcastDetails[0].artistName}</styled.ArtistName>
                <styled.LineSeparator />
                <styled.Description>Description: {podcastDetails[0].description}</styled.Description>
              </styled.Details>
            </>
          )}
        </>
      )}
    </styled.Container>
  );
}
