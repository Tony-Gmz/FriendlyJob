import React from 'react';

import NavButtonStyled from 'src/components/Button/NavButtonStyled';

// == Import
import './modalReservation.scss';
import ModalTextArea from './TextArea';
import ModalCalendar from './Calendar';
import ModalReservationSelect from './Select';

// == Composant
const ModalReservation = () => (
  <div className="ModalReservation">
    <a href="#reservation"><NavButtonStyled>Reservation</NavButtonStyled></a>
    <div id="reservation" className="reservation">
      <div className="modal_block">
        <div className="modal_header">
          <p className="modal_title">Bienvenue dans notre espace Reservation</p>
        </div>
        <div className="modal_content">
          <div className="modal_select">
            <ModalReservationSelect />
          </div>
          <div className="modal_text">
            <ModalTextArea />
          </div>
          <div className="modal_calendar">
            <ModalCalendar />
          </div>
        </div>
        <div>
          <div className="div_submit">
            <a href="#"><button className="cancel_btn" type="submit">Annuler</button></a>
            <button className="submit_btn" type="submit">Reserver</button>
          </div>
          <a href="#" className="close_btn">close</a>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default ModalReservation;
