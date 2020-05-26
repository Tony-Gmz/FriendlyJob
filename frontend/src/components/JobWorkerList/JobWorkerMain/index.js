import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Jober from '../../HomePage/JobPresentation/Jober';
import './jobWorkerMain.scss';


const JobWorkerMain = () => (
  <div className="jobWorkerMain">
    <div className="jobWworkerSort">
      <Dropdown text="Trier">
        <Dropdown.Menu>
          <Dropdown.Item text="Trier par Prix" />
          <Dropdown.Item text="Trier par note" />
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div className="jobWorkerCards">
      <Link>
        <div className="jobWorkerCards_item">
          <Jober />
        </div>
      </Link>
      <Link>
        <div className="jobWorkerCards_item">
          <Jober />
        </div>
      </Link>
      <Link>
        <div className="jobWorkerCards_item">
          <Jober />
        </div>
      </Link>
      <Link>
        <div className="jobWorkerCards_item">
          <Jober />
        </div>
      </Link>
      <Link>
        <div className="jobWorkerCards_item">
          <Jober />
        </div>
      </Link>
      <Link>
        <div className="jobWorkerCards_item">
          <Jober />
        </div>
      </Link>
      <Link>
        <div className="jobWorkerCards_item">
          <Jober />
        </div>
      </Link>
      <Link>
        <div className="jobWorkerCards_item">
          <Jober />
        </div>
      </Link>
      <Link>
        <div className="jobWorkerCards_item">
          <Jober />
        </div>
      </Link>
    </div>
  </div>
);

export default JobWorkerMain;
