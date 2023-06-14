import {  useDispatch } from 'react-redux';
import { filterPodcast } from '../../store/slices/podcast/index.js';

export default function SearchBar() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(filterPodcast(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Buscar por nombre o título"
      />
    </div>
  );
}
