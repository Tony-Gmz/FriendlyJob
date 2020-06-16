// == Import Library
import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Import Style
import './caroussel.scss';

// == Import Utils to use the slugifyTitle fonction
import { slugifyTitle } from 'src/utils';

// Component caroussel in homepage
const Caroussel = ({ serviceList }) => {
  // settings for the caroussel
  const settings = {
    dots: true,
    infinite: true,
    speed: 5,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  };

  return (

    <div className="caroussel">
      {/* we use spread operator to send settings to the children "Slider" */}
      <Slider {...settings}>
        {/* with the container's caroussel we have acces to
        the serviceList's prop and now we can map it in our caroussel
        to print all pictures and title */}
        {serviceList.map((service) => {
          const slug = slugifyTitle(service.title);
          return (
            <Link to={`/services/${slug}/`}>
              <div key={service.id} className="caroussel_content">
                <div className="carroussel_content_img">
                  <img className="caroussel_img" src={service.image} alt="jardinage" />
                </div>
                <h3 className="caroussel_service_title">{service.title}</h3>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>

  );
};

Caroussel.propTypes = {
  serviceList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Caroussel;
