import React from "react";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
       pageNumbers.push(i);
  }
  return (
    <div  className="pagination">
      <ol>
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`${currentPage === number ? "active" : ""}`}
          >
            <span className="page-link" onClick={() => paginate(number)}>
              {number}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Pagination;
