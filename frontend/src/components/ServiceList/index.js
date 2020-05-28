// == Import npm
import React from 'react';
import service from 'src/assets/img/menage-assitant.jpg';
import { Link } from 'react-router-dom';

// == Import
import './serviceList.scss';

// == Composant
const ServiceList = () => (
  <div className="serviceList">
    <div className="serviceList_presentation">
      Cliquez sur le service de votre choix pour avoir un appercu
      des JobWorkers present dans votre region.
    </div>
    <div className="serviceList_wrap">
      <Link to="/services/detail">
        <div className="serviceList_box">
          <img className="serviceList_Card_img" src={service} alt="profil's" />
          <div className="serviceList_Card_title">Service</div>
        </div>
      </Link>
      <Link to="/services/detail">
        <div className="serviceList_box">
          <img className="serviceList_Card_img" src={service} alt="profil's" />
          <div className="serviceList_Card_title">Service</div>
        </div>
      </Link>
      <Link to="/services/detail">
        <div className="serviceList_box">
          <img className="serviceList_Card_img" src={service} alt="profil's" />
          <div className="serviceList_Card_title">Service</div>
        </div>
      </Link>
      <Link to="/services/detail">
        <div className="serviceList_box">
          <img className="serviceList_Card_img" src={service} alt="profil's" />
          <div className="serviceList_Card_title">Service</div>
        </div>
      </Link>
      <Link to="/services/detail">
        <div className="serviceList_box">
          <img className="serviceList_Card_img" src={service} alt="profil's" />
          <div className="serviceList_Card_title">Service</div>
        </div>
      </Link>
      <Link to="/services/detail">
        <div className="serviceList_box">
          <img className="serviceList_Card_img" src={service} alt="profil's" />
          <div className="serviceList_Card_title">Service</div>
        </div>
      </Link>
    </div>
  </div>
);

// == Export
export default ServiceList;
