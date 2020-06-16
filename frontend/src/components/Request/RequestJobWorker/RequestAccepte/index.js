import React from 'react';
import { Button } from 'semantic-ui-react';
import { changeHourFormat, changeDateFormat } from 'src/utils';
import PopupContact from '../../../PopUpContact';

// == Composant
const RequestAccepte = ({ request, getCommentId }) => {

  const hourResevation = new Date(request.reservationHour);
  const dateReservation = new Date(request.reservationDate);

  return (
    <ul className="request_container">
      <li className="booking-card" style={{backgroundImage: `url(${request.service.image})`}}>
      <div className="book-container">
        <div className="content">
          <PopupContact request={request} getCommentId={getCommentId} />
        </div>
      </div>
      <div className="informations-container">
        <h2 className="title">Demande de {request.friendlyUser.firstname} </h2>
        <h2 className="title2">{request.service.title} </h2>
        <p className="sub-title_accept"><i class="check circle icon"/>{request.status}</p>
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
          <p className="disclaimer">{request.body}</p>
          </div>
      </div>
    </li>
  </ul>
  );
};
export default RequestAccepte;
