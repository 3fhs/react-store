import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function PaginationNumber({ pages, currentPage, setCurrentPage }) {
  const generationPages = [];

  for (let i = 1; i <= pages; i++) {
    generationPages.push(i);
  }

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        className="btn-pagination-next"
        onClick={() => setCurrentPage((next) => next - 1)}
      >
        <FontAwesomeIcon icon={faCaretRight} />
        السابق
      </button>
      {generationPages.map((page) => (
        <div
          onClick={() => setCurrentPage(page)}
          className={currentPage === page ? "page active" : "page"}
          key={page}
        >
          {page}
        </div>
      ))}
      <button
        disabled={currentPage === pages}
        className="btn-pagination-prev"
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        {" "}
        اللاحق
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
    </div>
  );
}

export default PaginationNumber;
