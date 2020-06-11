import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Brand = () => {
  return (
    <>
      <Link to="/">
        <Image src="https://res.cloudinary.com/friendlyjob/image/upload/e_cartoonify,q_100/v1591887558/friendlyjob/logo_svg_lc4egu.png" />
      </Link>
    </>
  );
};

export default Brand;

const Image = styled.img`
  height: 100%;
  margin: auto 0;
  transform: scale(2.1);
  margin-left: 3.5em;
  margin-top: 0.5em;
  z-index:0;
`;
