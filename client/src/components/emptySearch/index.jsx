import * as styled from './styles';

const EmptyResultsScreen = () => {
  return (
    <styled.EmptyResultsContainer>
      <styled.EmptyResultsImage src="https://img.freepik.com/vector-premium/persona-mirando-traves-busqueda-telescopio-no-encontro-nada-no-encontraron-resultados_586724-310.jpg" alt="No Results" />
      <styled.EmptyResultsMessage>No results found for the search</styled.EmptyResultsMessage>
    </styled.EmptyResultsContainer>
  );
};

export default EmptyResultsScreen;