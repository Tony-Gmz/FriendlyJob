import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import Jober from '../../JobPresentation/Jober';
import './jobWorkerMain.scss';
const JobWorkerMain = () => {

  return (
    <div className="jobWorkerMain">
    <div className="jobWworkerSort">
    <Dropdown text='Trier'>
    <Dropdown.Menu>
      <Dropdown.Item text='Trier par Prix' />
      <Dropdown.Item text='Trier par note' />
      </Dropdown.Menu>
    </Dropdown>
    </div>
    <div className="jobWorkerCards">
      <div className="jobWorkerCards_item">
      <Jober />
      </div>
      <div className="jobWorkerCards_item">
      <Jober />
      </div>
      <div className="jobWorkerCards_item">
      <Jober />
      </div>
      <div className="jobWorkerCards_item">
      <Jober />
      </div>
    </div>
    </div>
  );
 

};

export default JobWorkerMain;
