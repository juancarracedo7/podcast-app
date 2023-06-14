import {  useDispatch } from 'react-redux';
import { filterPodcast } from '../../store/slices/podcast/index.js';
import * as styled from './styles.js';

export default function SearchBar() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(filterPodcast(e.target.value));
  };

  return (
    <styled.SearchBarContainer>
      <styled.SearchInput
        type="text"
        onChange={handleSearch}
        placeholder="Filter podcasts..."
      />
    </styled.SearchBarContainer>
  );
}
