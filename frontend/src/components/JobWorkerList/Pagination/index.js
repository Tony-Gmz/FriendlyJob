import React from 'react';
import { Pagination } from 'semantic-ui-react';
import { changeCurrentPage } from '../../../action/usersActions';

const PaginationExamplePagination = ({ joberPerPage, totalJobWorker, changeCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobWorker / joberPerPage); i++) {
    pageNumbers.push(i);
  }
console.log(joberPerPage);
console.log(totalJobWorker);



  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          const handleClick = () => {
            changeCurrentPage(number);
            console.log(number);
          };
          return (
            <li>
              <a onClick={handleClick} href="#">
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};


export default PaginationExamplePagination;
