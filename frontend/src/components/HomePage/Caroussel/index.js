import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import './caroussel.scss';
import { Link } from 'react-router-dom';

// Component caroussel in homepage
const Caroussel = ({ serviceList }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
      <Slider {...settings}>
        {serviceList.map((service) => (
          <Link to="/services">
            <div className="caroussel_content">
              <div className="carroussel_content_img">
                <img className="caroussel_img" src={service.image} alt="jardinage" />
              </div>
              <h3 className="caroussel_service_title">{service.title}</h3>
            </div>
          </Link>
        ))}
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
