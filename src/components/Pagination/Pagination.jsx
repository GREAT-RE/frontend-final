import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import ListingsContext from "../../context/ListingsContext";
import "./Pagination.css"
const Pagination = ({ setPageNumber, listingPerPage }) => {
  const { listings, listingsFilter } = useContext(ListingsContext);
  
  const pageCount = Math.ceil(listings && listingsFilter.length === 0 ? listings.length / listingPerPage: listingsFilter.length / listingPerPage);
  
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        pageCount={pageCount}
        onPageChange={pageChange}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        containerClassName="pagination-buttons"
        pageLinkClassName="pages-buttons"
        previousLinkClassName="previous-button"
        nextLinkClassName="next-button"
        breakLinkClassName="break-pagination"
        disabledLinkClassName="disabled-button"
        activeLinkClassName="active-link"
      />
    </div>
  );
};

export default Pagination;
