/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';


import './pagination.scss';

const PaginationExamplePagination = ({
  currentPage,
  joberPerPage,
  totalJobWorker,
  changeCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobWorker / joberPerPage); i += 1) {
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
             //console.log(number);
          };
          return (
            <li key={number} activeclassname="current">
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

PaginationExamplePagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  joberPerPage: PropTypes.number.isRequired,
  totalJobWorker: PropTypes.number.isRequired,
  changeCurrentPage: PropTypes.func.isRequired,
};
export default PaginationExamplePagination;
