import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from 'src/assets/img/logo.png';

const Brand = () => {
  return (
    <>
      <Link to="/">
        <Image src={logo} alt="Company Logo" />
      </Link>
    </>
  );
};

export default Brand;

const Image = styled.img`
  height: 100%;
  margin: auto 0;
  transform: scale(2.3);
  margin-left: 1em;
  margin-top: 0.3em;
`;
