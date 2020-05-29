import React from 'react';
import Caroussel from 'src/containers/Caroussel';
import JobPresentation from 'src/containers/JobPresentation';
import Presentation from 'src/containers/Presentation';

const HomePage = () => (
  <>
    <Caroussel />
    <Presentation />
    <JobPresentation />
  </>
);

export default HomePage;
