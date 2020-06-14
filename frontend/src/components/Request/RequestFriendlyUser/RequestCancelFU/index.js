import React from 'react';
import { Button, Card } from 'semantic-ui-react';


// == Composant
const RequestCancelFU = ({ request }) => {

  return (
    <ul>
      <li className="booking-card" style={{ backgroundImage: `url(${request.service.image})`}}>
      <div className="book-container">
        <div className="content" />
      </div>
      <div className="informations-container">
        <h2 className="title">Demande de {request.friendlyUser.firstname} </h2>
        <h2 className="title2">{request.service.title} </h2>
        <p className="sub-title_cancel"><i class="calendar times icon" />{request.status}</p>
        <div className="more-information">
          <div className="info-and-date-container">
            <div className="box date">
              <svg className="icon" style={{ width: '24px', height: '24px'}} viewBox="0 0 24 24">
        <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
    </svg>
              <p>
              {changeDateFormat(dateReservation)} à {changeHourFormat(hourResevation)}
              </p>
            </div>
          </div>
          <p className="disclaimer">Vous avez annulé cette demande</p>
          </div>
      </div>
    </li>
  </ul>
  );

  return (
    <Card className="request_Card_refuse">
      <Card.Content className="request_Content">
        <div className="request_LeftSide">
          <Card.Header>{request.jobWorker.firstname}</Card.Header>
          <Card.Meta>{request.service.title}</Card.Meta>
        </div>
        <div className="request_RightSide">
          <Card.Description>
            {request.body}
          </Card.Description>
        </div>
      </Card.Content>
      <div className="request_Status">{request.status}</div>
      <Card.Content extra>
        <div className="refuse_texte">
          Vous avez annulé cette demande
        </div>
      </Card.Content>
    </Card>
  );
};

export default RequestCancelFU;
