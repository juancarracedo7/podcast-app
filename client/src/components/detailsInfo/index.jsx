import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPodcastDetails } from "../../store/slices/podcast/index";
import * as styled from "./styles";
import EpisodeCount from "../episodeCount";
import TrackList from "../trackList";
import SideCards from "../sideCards";
import Loading from "../loading";

export default function DetailInfo() {
  const { trackId } = useParams();
  const dispatch = useDispatch();
  const podcastDetails = useSelector((state) => state.podcast.details);


  useEffect(() => {
    dispatch(fetchPodcastDetails(trackId));
  }, [dispatch, trackId]);

 

  return (
    <>
    {!podcastDetails ? (
     <Loading />
    ) : (
      <>
        <styled.EpisodeCountContainer>
          <EpisodeCount podcastDetails={podcastDetails} />
        </styled.EpisodeCountContainer>
        <SideCards podcastDetails={podcastDetails} />
        <styled.TrackListContainer>
          <TrackList podcastDetails={podcastDetails} />
        </styled.TrackListContainer>
      </>
    )}
  </>
);
}
