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
        <Link>
          <div className="caroussel_content">
            <img className="caroussel_img" src={jardinage} alt="jardinage" />
            <h3>Service 1</h3>
          </div>
        </Link>
        <Link>
          <div className="caroussel_content">
            <img className="caroussel_img" src={jardinage} alt="jardinage" />
            <h3>Service 2</h3>
          </div>
        </Link>
        <Link>
          <div className="caroussel_content">
            <img className="caroussel_img" src={jardinage} alt="jardinage" />
            <h3>Service 3</h3>
          </div>
        </Link>
        <Link>
          <div className="caroussel_content">
            <img className="caroussel_img" src={jardinage} alt="jardinage" />
            <h3>Service 4</h3>
          </div>
        </Link>
        <Link>
          <div className="caroussel_content">
            <img className="caroussel_img" src={jardinage} alt="jardinage" />
            <h3>Service 5</h3>
          </div>
        </Link>
        <Link>
          <div className="caroussel_content">
            <img className="caroussel_img" src={jardinage} alt="jardinage" />
            <h3>Service 6</h3>
          </div>
        </Link>
        <Link>
          <div className="caroussel_content">
            <img className="caroussel_img" src={jardinage} alt="jardinage" />
            <h3>Service 7</h3>
          </div>
        </Link>
        <Link>
          <div className="caroussel_content">
            <img className="caroussel_img" src={jardinage} alt="jardinage" />
            <h3>Service 8</h3>
          </div>
        </Link>
      </Slider>
    </div>

  );

};

export default Caroussel;
