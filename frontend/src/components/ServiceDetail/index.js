import React from 'react';
import { Link, useParams } from 'react-router-dom';
import JoberService from './JoberService';
import './serviceDetail.scss';

import { getServiceBySlug } from 'src/utils';
import PropTypes from 'prop-types';

function ServiceDetail({ serviceList }) {
  const { slug } = useParams();

  const service = getServiceBySlug(serviceList, slug);

  return (
    <div className="service_detail">
      <div className="service_detail_title">
        <h2 className="service_detail_title-content">{service.title}</h2>
      </div>
      <div className="service_detail_presentation">{service.description}</div>
      <div className="service_details_jobworker">
        <div className="service_details_jobworker_title">Liste des JobWorker près de chez vous</div>
        <div className="service_details_jobworker_card">
          <div className="service_details_jobworker_card-item">
            <JoberService />
          </div>
          <div className="service_details_jobworker_card-item">
            <JoberService />
          </div>
          <div className="service_details_jobworker_card-item">
            <JoberService />
          </div>
          <div className="service_details_jobworker_card-item">
            <JoberService />
          </div>
          <div className="service_details_jobworker_card-item">
            <JoberService />
          </div>
          <div className="service_details_jobworker_card-item">
            <JoberService />
          </div>
        </div>
        <div className="service_details_link">
          <Link to="/jobworker"><a href="">Voir plus de JobWorker dans ma région</a></Link>
          <a href="#inscription">Devenez JobWorker ! Rejoingez-nous</a>
        </div>
      </div>
    </div>
  );
}

ServiceDetail.propTypes = {
  serviceList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ServiceDetail;
