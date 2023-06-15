import  { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPodcast } from '../../store/slices/podcast/index.js';
import * as styled from "./styles";
import EmptyResultsScreen from '../emptySearch/index.jsx';
import SearchBar from '../searchbar/index.jsx'; 
import Counter from '../counter/index.jsx';
import Pagination from '../pagination/index.jsx';


export default function PodcastList() {
  const dispatch = useDispatch();
  const { filteredPodcast } = useSelector((state) => state.podcast);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Número de elementos por página

  useEffect(() => {
    dispatch(getPodcast());
  }, [dispatch]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPodcast.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <SearchBar /> 
      <Counter filteredPodcast={filteredPodcast} />
      {currentItems.length === 0 ? (
        <EmptyResultsScreen />
      ) : (
        <>
          <styled.PodcastContainer>
            {currentItems.map((item) => (
              <styled.PodcastCardWrapper key={item.idPodcast}>
                <styled.CustomLink to={`/podcast/${item.idPodcast}`}>
                  <styled.PodcastImage src={item.image} alt={item.name} />
                  <styled.PodcastName>{item.name}</styled.PodcastName>
                  <styled.PodcastTitle>
                    <strong>Author:</strong> {item.title.slice(item.title.indexOf(' - ') + 3)}
                  </styled.PodcastTitle>
                </styled.CustomLink>
              </styled.PodcastCardWrapper>
            ))}
          </styled.PodcastContainer>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredPodcast.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}
