import React from 'react';
import { Pagination } from 'semantic-ui-react';

import './listPagination.scss';

const ListPagination = () => {
 

  return (
    <div className="listPagination">
    <Pagination defaultActivePage={5} totalPages={10} />
    </div>
    
  )
};

export default ListPagination;
