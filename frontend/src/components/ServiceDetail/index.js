import React from 'react';
import Jober from '../HomePage/JobPresentation/Jober';
import { Link } from 'react-router-dom';
import './serviceDetail.scss';

const ServiceDetail = () => (

  <div className="service_detail">
    <div className="service_detail_title">
      <h2 className="service_detail_title-content">Nom du service</h2>
    </div>
    <div className="service_detail_presentation">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aspernatur nihil, sapiente ad voluptate quisquam itaque nam maxime, libero adipisci unde eos accusantium et commodi tenetur nulla tempora! Itaque officiis officia, ad ipsum magnam sint aspernatur illum rem laboriosam aliquid cum asperiores rerum perspiciatis dolorem dignissimos sed praesentium, neque possimus!</div>
    <div className="service_details_jobworker">
      <div className="service_details_jobworker_title">Liste des JobWorker près de chez vous</div>
      <div className="service_details_jobworker_card">
        <div className="service_details_jobworker_card-item">
          <Jober />
        </div>
        <div className="service_details_jobworker_card-item">
          <Jober />
        </div>
        <div className="service_details_jobworker_card-item">
          <Jober />
        </div>
        <div className="service_details_jobworker_card-item">
          <Jober />
        </div>
        <div className="service_details_jobworker_card-item">
          <Jober />
        </div>
        <div className="service_details_jobworker_card-item">
          <Jober />
        </div>
      </div>
      <div className="service_details_link">
        <Link to="/jobworker"><a href="">Voir plus de JobWorker dans ma région</a></Link>
        <a href="#inscription">Devenez JobWorker ! Rejoingez-nous</a>
      </div>
    </div>
  </div>
);

export default ServiceDetail;
