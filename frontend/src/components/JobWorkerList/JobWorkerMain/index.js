import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Jober from '../../HomePage/JobPresentation/Jober';
import './jobWorkerMain.scss';


const JobWorkerMain = () => (
  <div className="jobWorker_main">
    <div className="jobWworker_sort">
      <Dropdown text="Trier">
        <Dropdown.Menu>
          <Dropdown.Item text="Trier par Prix" />
          <Dropdown.Item text="Trier par note" />
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div className="jobWorker_wrap">
      <Link>
        <div className="jobWorker_box">
          <Jober />
        </div>
      </Link>
      <Link>
        <div className="jobWorker_box">
          <Jober />
        </div>
      </Link>
      <Link>
        <div className="jobWorker_box">
          <Jober />
        </div>
      </Link>
      <Link>
        <div className="jobWorker_box">
          <Jober />
        </div>
      </Link>
      <Link>
        <div className="jobWorker_box">
          <Jober />
        </div>
      </Link>
      <Link>
        <div className="jobWorker_box">
          <Jober />
        </div>
      </Link>
      <Link>
        <div className="jobWorker_box">
          <Jober />
        </div>
      </Link>
      <Link>
        <div className="jobWorker_box">
          <Jober />
        </div>
      </Link>
      <Link>
        <div className="jobWorker_box">
          <Jober />
        </div>
      </Link>
    </div>
  </div>
);

export default JobWorkerMain;
