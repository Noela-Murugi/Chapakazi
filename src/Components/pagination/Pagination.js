import React from "react";
import { NavLink } from "react-router-dom";
import "./Pagination.css";

function Pagination({ jobsPerPage, totalJobs, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  function renderFirstPage() {
    return pageNumbers[0];
  }
  function renderLastPage() {
    return pageNumbers[pageNumbers.length - 1];
  }

  return (
    <nav className="pagination-container">
      <NavLink to="#" onClick={() => paginate(renderFirstPage())}>
        «
      </NavLink>
      {pageNumbers.map((number) => (
        <NavLink
          to="#"
          onClick={() => paginate(number)}
          id={currentPage === number ? "active-page" : ""}
          key={number}
        >
          {number}
        </NavLink>
      ))}

      <NavLink to="#" onClick={() => paginate(renderLastPage())}>
        »
      </NavLink>
    </nav>
  );
}

export default Pagination;
