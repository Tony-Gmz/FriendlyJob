import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import './brand.scss';

const Brand = () => {
  return (
    <>
      <Image className="img_main_homepage" src="https://res.cloudinary.com/friendlyjob/image/upload/q_auto:best/v1591887558/friendlyjob/logo_svg_lc4egu.png" />
    </>
  );
};

export default Brand;

const Image = styled.img`
  height: auto;
  width: 30%;
  margin: auto;
  margin-top: 0.5em;
  z-index:0;
`;
