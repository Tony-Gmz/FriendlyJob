import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Brand = () => {
  return (
    <>
      <Link to="/">
        <Image src="https://res.cloudinary.com/friendlyjob/image/upload/c_scale,q_100,w_868/v1591887558/friendlyjob/logo_svg_lc4egu.png" />
      </Link>
    </>
  );
};

export default Brand;

const Image = styled.img`
  height: 100%;
  margin: auto 0;
  transform: scale(1.9);
  margin-left: 3em;
  margin-top: 0.3em;
  z-index:0;
`;
