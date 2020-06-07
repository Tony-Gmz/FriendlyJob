import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';
import ModalInscription from 'src/containers/ModalInscription';
import Jober from 'src/containers/Jober';
import './jobpresentation.scss';


// component for jobworker presentation in homepage

const JobPresentation = ({ randomJobWorker, loading }) => (

  <div className="jobpresentation">
    {loading && <Loader />}
    {!loading && (
    <>
      <div className="jobpresentation_title">
        <h2>Comme {randomJobWorker.firstname} deviens un super jobWorker</h2>
      </div>
      <div className="jobpresentation_card">
        <div className="jobercard">
          <Jober />
        </div>
      </div>
    </>
    )}
    <div className="jobpresentation_content">
      <p>
        Vous avez une passion ou une compètence que vous souhaitez exercer
        de manière plus assidu et rémunerée ?
        Alors inscris-toi et deviens le jobWorker préféré de tes voisins !
      </p>
    </div>
    <div>
      <ModalInscription />
    </div>
  </div>
);

JobPresentation.propTypes = {
  randomJobWorker: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default JobPresentation;
