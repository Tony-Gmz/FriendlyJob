import React from 'react';
import { Message, Rating } from 'semantic-ui-react';
import Avatar from '@material-ui/core/Avatar';

import './evaluation.scss';


const Evaluation = ({jobWorkerDemands}) => {
console.log(`demande: ${jobWorkerDemands} `);
  return (

  <div className="evaluation">
    <h4 className="evaluation_title">Evaluation</h4>
    <div className="evaluation_note">
      <Message className="evaluation_message">
        <Message.Header> </Message.Header>
        <div className="message_content">
          <div className="message_content_avatar"><Avatar>H</Avatar></div>
          <div className="message_content_rating"><Rating icon="star" defaultRating={4} maxRating={5} /></div>
          <div className="message_content_comment"></div>
        </div>
      </Message>
    </div>
    <div className="evaluation_see_more">
      <a href="">Voir plus</a>
    </div>
  </div>
);

};


export default Evaluation;
