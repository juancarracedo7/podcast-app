import * as styled from "./styles";

export default function SideCards({ podcastDetails}) {
  return (
    <styled.Container>
    {podcastDetails && (
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
  </styled.Container>
  )
}
