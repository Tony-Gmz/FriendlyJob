import React from 'react';
import PropTypes from 'prop-types';
import { Message, Rating } from 'semantic-ui-react';
import Avatar from '@material-ui/core/Avatar';


import './evaluation.scss';


const Evaluation = ({ demands }) => {
  // eslint-disable-next-line no-console
  console.log(`demande: ${demands} `);
  return (

    <div className="evaluation">
      <h4 className="evaluation_title">Evaluation</h4>
      <div className="evaluation_note">
        {demands.map((demand) => (
          <Message className="evaluation_message">
            <Message.Header> </Message.Header>
            <div className="message_content">
              <div className="message_content_avatar"><Avatar>{demand.rating.id}</Avatar></div>
              <div className="message_content_rating"><Rating icon="star" defaultRating={demand.rating.star} maxRating={5} /></div>
              <div className="message_content_comment">{demand.rating.comment}</div>
            </div>
          </Message>
        ))}
      </div>
      <div className="evaluation_see_more">
        <a href="">Voir plus</a>
      </div>
    </div>
  );
};

Evaluation.propTypes = {
  demands: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.object.isRequired,
      comment: PropTypes.string.isRequired,
      star: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};


export default Evaluation;
