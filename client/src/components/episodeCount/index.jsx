import Loading from "../loading";
import * as styled from "./styles";

export default function EpisodeCount({ podcastDetails }) {
  const episodeCount = podcastDetails?.length > 0 ? podcastDetails?.length : "0"

  return (
    <>
   { !podcastDetails ? (
    <Loading />
   ) : ( <styled.EpisodeCard>
        <styled.EpisodeText>Episodes</styled.EpisodeText>
      <styled.EpisodeCount>{episodeCount}</styled.EpisodeCount>
    </styled.EpisodeCard>
    )}
    </>
  );
}
