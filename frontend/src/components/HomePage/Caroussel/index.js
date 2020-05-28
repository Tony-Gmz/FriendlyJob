import React from 'react';
import Slider from 'react-slick';
import jardinage from 'src/assets/img/jardinage.jpg';
import './caroussel.scss';
import { Link } from 'react-router-dom';

// Component caroussel in homepage

const Caroussel = () => {
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
        <Link to="/services">
          <div className="caroussel_content">
            <div className="carroussel_content_img">
              <img className="caroussel_img" src=" https://i.ibb.co/1bPYLmz/jardinage.jpg" alt="jardinage" />
            </div>
            <h3 className="caroussel_service_title">Jardinage</h3>
          </div>
        </Link>
        <Link to="/services">
          <div className="caroussel_content">
            <div className="carroussel_content_img">
              <img className="caroussel_img" src="https://i.ibb.co/jhR4T65/Bricolage.jpg" alt="jardinage" />
            </div>
            <h3 className="caroussel_service_title">Bricolage</h3>
          </div>
        </Link>
        <Link to="/services">
          <div className="caroussel_content">
            <div className="carroussel_content_img">
              <img className="caroussel_img" src="https://i.ibb.co/jG7c7KJ/demenagement.jpg" alt="jardinage" />
            </div>
            <h3 className="caroussel_service_title">Déménagement</h3>
          </div>
        </Link>
        <Link to="/services">
          <div className="caroussel_content">
            <div className="carroussel_content_img">
              <img className="caroussel_img" src=" https://i.ibb.co/rMB52Bb/gardeanimaux.jpg" alt="jardinage" />
            </div>
            <h3 className="caroussel_service_title">Garde d'animaux</h3>
          </div>
        </Link>
        <Link to="/services">
          <div className="caroussel_content">
            <div className="carroussel_content_img">
              <img className="caroussel_img" src="https://i.ibb.co/3YtgX26/informatique.jpg" alt="jardinage" />
            </div>
            <h3 className="caroussel_service_title">Informatique</h3>
          </div>
        </Link>
        <Link to="/services">
          <div className="caroussel_content">
            <div className="carroussel_content_img">
              <img className="caroussel_img" src="https://i.ibb.co/6RkgSB6/babysitting.png" alt="jardinage" />
            </div>
            <h3 className="caroussel_service_title">Babby-Sitting</h3>
          </div>
        </Link>
        <Link to="/services">
          <div className="caroussel_content">
            <div className="carroussel_content_img">
              <img className="caroussel_img" src=" https://i.ibb.co/BwMSMng/covoiturage.jpg" alt="jardinage" />
            </div>
            <h3 className="caroussel_service_title">Co-voiturage</h3>
          </div>
        </Link>
        <Link to="/services">
          <div className="caroussel_content">
            <div className="carroussel_content_img">
              <img className="caroussel_img" src="https://i.ibb.co/XL7Bn9h/aide.jpg" alt="jardinage" />
            </div>
            <h3 className="caroussel_service_title">Aide à la personne</h3>
          </div>
        </Link>
      </Slider>
    </div>

  );
};

export default Caroussel;
