import * as styled from "./styles";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <styled.PaginationContainer>
      {pageNumbers.map((pageNumber) => (
        <styled.PaginationItem
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </styled.PaginationItem>
      ))}
    </styled.PaginationContainer>
  );
}




