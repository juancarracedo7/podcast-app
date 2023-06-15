import * as styled from "./styles";

export default function Counter({ filteredPodcast }) {
  return (
    <styled.CounterContainer>
      <styled.CounterNumber>{filteredPodcast.length > 0 ? filteredPodcast.length : "0"}</styled.CounterNumber>
    </styled.CounterContainer>
  );
}
