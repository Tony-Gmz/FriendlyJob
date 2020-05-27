import React from 'react';
import { Pagination } from 'semantic-ui-react';

import './listPagination.scss';

const ListPagination = () => {
 
  const screenWidth = window.screen.width;

  return (
    <div className="listPagination">
      { screenWidth > 768 ? <Pagination defaultActivePage={1} totalPages={10} /> : <Pagination defaultActivePage={1} totalPages={5} /> }
    </div>
  );
};

export default ListPagination;
