// == Import npm
import React from 'react';
import service from 'src/assets/img/menage-assitant.jpg';

// == Import
import './serviceList.scss';

// == Composant
const ServiceList = () => (
  <div className="serviceList">
    <div className="presentation_serviceList">
      Prenez soin de vous, ou de vos proches, en confiant les tâches du quotidien à des pros!
    </div>
    <div className="list">
      <a href="#">
        <div className="serviceCard">
          <img className="serviceCard_img" src={service} alt="profil's" />
          <div className="serviceCard_title">Service</div>
        </div>
      </a>
      <a href="#">
        <div className="serviceCard">
          <img className="serviceCard_img" src={service} alt="profil's" />
          <div className="serviceCard_title">Service</div>
        </div>
      </a>
      <a href="#">
        <div className="serviceCard">
          <img className="serviceCard_img" src={service} alt="profil's" />
          <div className="serviceCard_title">Service</div>
        </div>
      </a>
      <a href="#">
        <div className="serviceCard">
          <img className="serviceCard_img" src={service} alt="profil's" />
          <div className="serviceCard_title">Service</div>
        </div>
      </a>
      <a href="#">
        <div className="serviceCard">
          <img className="serviceCard_img" src={service} alt="profil's" />
          <div className="serviceCard_title">Service</div>
        </div>
      </a>
      <a href="#">
        <div className="serviceCard">
          <img className="serviceCard_img" src={service} alt="profil's" />
          <div className="serviceCard_title">Service</div>
        </div>
      </a>
    </div>
  </div>
);

// == Export
export default ServiceList;
