import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPodcast } from '../../store/slices/podcast/index.js';
import * as styled from "./styles";
import EmptyResultsScreen from '../emptySearch/index.jsx';
import SearchBar from '../searchbar/index.jsx'; 
import Counter from '../counter/index.jsx';

export default function PodcastList() {
  const dispatch = useDispatch();
  const { filteredPodcast } = useSelector((state) => state.podcast);

  useEffect(() => {
    dispatch(getPodcast());
  }, [dispatch]);

  return (
    <>
      <SearchBar /> 
      <Counter filteredPodcast={filteredPodcast} />
      {filteredPodcast.length === 0 ? (
        <EmptyResultsScreen />
      ) : (
        <styled.PodcastContainer>
          {filteredPodcast.map((item) => (
            <styled.PodcastCardWrapper key={item.idPodcast}>
              <styled.CustomLink to={`/details/${item.idPodcast}`}>
                <styled.PodcastImage src={item.image} alt={item.name} />
                <styled.PodcastName>{item.name}</styled.PodcastName>
                <styled.PodcastTitle>
                  <strong>Author:</strong> {item.title.slice(item.title.indexOf(' - ') + 3)}
                </styled.PodcastTitle>
              </styled.CustomLink>
            </styled.PodcastCardWrapper>
          ))}
        </styled.PodcastContainer>
      )}
    </>
  );
}
