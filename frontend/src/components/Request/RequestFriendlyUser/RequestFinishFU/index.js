import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import { changeHourFormat, changeDateFormat } from 'src/utils';
import ModalComment from 'src/containers/ModalComment';


// == Composant
const RequestFinishFU = ({ request }) => {

  const hourResevation = new Date(request.reservationHour);
  const dateReservation = new Date(request.reservationDate);

  return (
    <ul className="request_container">
      <li className="booking-card" style={{ backgroundImage: `url(${request.service.image})`}}>
      <div className="book-container">
        <div className="content">
        <ModalComment request={request} />
        </div>
      </div>
      <div className="informations-container">
        <h2 className="title">Demande de {request.friendlyUser.firstname} </h2>
        <h2 className="title2">{request.service.title} </h2>
        <p className="sub-title"><i class="calendar check outline icon"></i>{request.status}</p>
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
          <p className="disclaimer">Merci d'avoir fait confiance a notre JobWorker, si vous le desirez vous pouvez laisser un commentaire sur sa prestation.</p>
          </div>
      </div>
    </li>
  </ul>
  );
};


export default RequestFinishFU;
