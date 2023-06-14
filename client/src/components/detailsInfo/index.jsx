import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPodcastDetails } from "../../store/slices/podcast/index";
import * as styled from "./styles";
import EpisodeCount from "../episodeCount";

export default function DetailInfo() {
  const { trackId } = useParams();
  const dispatch = useDispatch();
  const podcastDetails = useSelector((state) => state.podcast.details);
  const loading = useSelector((state) => state.podcast.loading);


  console.log("DETALLES DEL PODCAST", podcastDetails);
  useEffect(() => {
    dispatch(fetchPodcastDetails(trackId));
  }, [dispatch, trackId]);

  if (loading) {
    return <styled.Loading>Loading...</styled.Loading>;
  }



  return (
    <>
     <styled.EpisodeCountContainer>
        <EpisodeCount podcastDetails={podcastDetails} />
      </styled.EpisodeCountContainer>
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
  </>
  );
}
