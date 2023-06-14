export default function Counter({ filteredPodcast }) {
  return (
    <div>
      <span>{filteredPodcast.length > 0 ? filteredPodcast.length : "0"}</span>
    </div>
  );
}
