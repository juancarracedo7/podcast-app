import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPodcast, filterPodcast } from '../../store/slices/podcast/index.js';
import { useEffect } from 'react';
import * as styled from "./styles";

export default function PodcastList() {
  const dispatch = useDispatch();
  const {  filteredPodcast } = useSelector((state) => state.podcast);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getPodcast());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterPodcast(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <>
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar por nombre o título"
      />
    </div>
    <styled.PodcastContainer>
      {filteredPodcast.length > 0 ? (
        filteredPodcast.map((item) => (
          <styled.PodcastCardWrapper key={item.id}>
            <styled.PodcastImage src={item.image} alt={item.name} />
            <styled.PodcastName>{item.name}</styled.PodcastName>
            <styled.PodcastTitle>
              <strong>Author:</strong> {item.title}
            </styled.PodcastTitle>
          </styled.PodcastCardWrapper>
        ))
      ) : (
        <p>No se encontraron resultados para la búsqueda.</p>
      )}
     </styled.PodcastContainer>
     </>
  );
}
