// == Import Library
import React from 'react';

// == Import Components (Its "src/containers" because we use React-Redux technologie in our app )
import Caroussel from 'src/containers/Caroussel';
import JobPresentation from 'src/containers/JobPresentation';
import Presentation from 'src/containers/Presentation';

// ==  Main Component for the homepage
const HomePage = () => (
  <>
    <Caroussel />
    <Presentation />
    <JobPresentation />
  </>
);

export default HomePage;
