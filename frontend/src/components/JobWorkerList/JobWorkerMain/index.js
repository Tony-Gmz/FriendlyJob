import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NavButtonStyled from 'src/components/Button/NavButtonStyled';
import Avatar from '@material-ui/core/Avatar';
import { Card, Rating } from 'semantic-ui-react';
import { whitoutAvatar } from 'src/utils';
import './jobWorkerMain.scss';


const JobWorkerMain = () => {

  return (
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
            <div className="jober">
              <div className="Jober_avatar">
                <Avatar alt="Remy Sharp" src="">T</Avatar>
              </div>
              <div className="Jober_card">
                <Card>
                  <Card.Content header="thibault" />
                  <Card.Content description="blabla" />
                  <Card.Content extra>
                    <Rating defaultRating={1} maxRating={5} disabled />
                    <Link to="">
                      <NavButtonStyled>Contact</NavButtonStyled>
                    </Link>
                  </Card.Content>
                </Card>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default JobWorkerMain;
