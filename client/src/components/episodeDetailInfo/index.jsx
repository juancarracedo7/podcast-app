import SideCards from "../sideCards";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SelectedEpisode from "../selectedEpisode";

export default function EpisodeDetailInfo() {
    const podcastDetails = useSelector((state) => state.podcast.details);
    const {trackId} = useParams() 

    const selectedEpisode = podcastDetails.find((track) => track.trackId === Number(trackId));

    return (
        <div>
            <SideCards podcastDetails={podcastDetails} />
            <SelectedEpisode selectedEpisode={selectedEpisode} />
        </div>
    );
}