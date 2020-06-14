import React from 'react';
import { Card } from 'semantic-ui-react';


// == Composant
const RequestCancel = ({ request, getCommentId, submitDeleteRequest }) => {
  
  const handleClick = () => {
    getCommentId(request.id);
    submitDeleteRequest();
  };
  return (
    <ul>
      <li className="booking-card" style={{backgroundImage: `url(${request.service.image})`}}>
      <div className="book-container">
        <div className="content">
          <Button className="btn">
            Voir mes evaluations
          </Button>
          <Button className="btn" onClick={handleClick}>
            supprimer
          </Button>
        </div>
      </div>
      <div className="informations-container">
        <h2 className="title">Demande de {request.friendlyUser.firstname} </h2>
        <h2 className="title2">{request.service.title} </h2>
        <p className="sub-title_cancel"><i class="calendar times icon"></i>{request.status}</p>
        <div className="more-information">
          <div className="info-and-date-container">
          </div>
          <p className="disclaimer">La demande a été annulé.</p>
          </div>
      </div>
    </li>
  </ul>
  );
};

export default RequestCancel;
