import React from 'react';
import PropTypes from 'prop-types';
import { Message, Rating } from 'semantic-ui-react';
import Avatar from '@material-ui/core/Avatar';
import { whitoutAvatar } from 'src/utils';

import './evaluation.scss';


const Evaluation = ({ jobWorkerRating }) => {
  // eslint-disable-next-line no-console
  console.log(jobWorkerRating);
  return (

    <div className="evaluation">
      <h4 className="evaluation_title">Evaluation</h4>
      <div className="evaluation_note">
        {jobWorkerRating.map((jobWorker) => {
          const userAvatar = jobWorker.friendlyUser.firstname;
          return (

            <Message className="evaluation_message">
              <Message.Header> </Message.Header>
              <div className="message_content">
                <div className="message_content_avatar">
                  {userAvatar && <Avatar alt="Remy Sharp" src={jobWorker.friendlyUser.image} /> }
                  {!userAvatar && <Avatar alt="Remy Sharp" src="">{whitoutAvatar(jobWorker.friendlyUser.firstname)}</Avatar>}
                </div>
                <span>{jobWorker.friendlyUser.firstname}</span>
                <div className="message_content_rating"><Rating icon="star" defaultRating={jobWorker.rating.star} maxRating={5} /></div>
                <div className="message_content_comment">{jobWorker.rating.comment}</div>
              </div>
            </Message>
          );
        })}
      </div>
      <div className="evaluation_see_more">
        <a href="">Voir plus</a>
      </div>
    </div>
  );
};

Evaluation.propTypes = {
};


export default Evaluation;
