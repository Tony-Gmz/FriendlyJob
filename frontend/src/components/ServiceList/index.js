// == Import npm
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { slugifyTitle } from 'src/utils';

// == Import
import './serviceList.scss';

// == Composant

const ServiceList = ({ serviceList }) => {

  return (
    <div className="serviceList">
      <div className="serviceList_presentation">
        Cliquez sur le service de votre choix pour avoir un appercu
        des JobWorkers present dans votre region.
      </div>
      <div className="serviceList_wrap">
        {serviceList.map((service) => {
          const slug = slugifyTitle(service.title);
          return (
            <div  className="serviceList_box">
              <Link className="serviceList_link" to={`/services/${slug}`}>
                <img id={service.id} className="serviceList_Card_img" src={service.image} alt="profil's" />
                <div className="serviceList_Card_title">{service.title}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ServiceList.propTypes = {
  getServiceId: PropTypes.func.isRequired,
  serviceList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};


// == Export
export default ServiceList;