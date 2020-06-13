/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Icon } from 'semantic-ui-react';


import './pagination.scss';

const PaginationExamplePagination = ({ currentPage, joberPerPage, totalJobWorker, changeCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobWorker / joberPerPage); i++) {
    pageNumbers.push(i);
  }


  const handlePrevClick = () => {
    changeCurrentPage(currentPage - 1);
  };


  const handleNextClick = () => {
    changeCurrentPage(currentPage + 1);
  };

  return (
    <nav data-pagination>
      <a onClick={handlePrevClick} href="#"><Icon name="chevron left" /></a>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          const handleClick = () => {
            changeCurrentPage(number);
            console.log(number);
          };
          return (
            <li activeClassName="current">
              <a onClick={handleClick} href="#">
                {number}
              </a>
            </li>
          );
        })}
      </ul>
      <a onClick={handleNextClick} href="#"><Icon name="chevron right" /></a>
    </nav>

  );
};


export default PaginationExamplePagination;
