import React from 'react';
import PropTypes from 'prop-types';
import { Button, Popup } from 'semantic-ui-react';

const PopupContact = ({ request, getRequestId }) => {
  const handleClick = () => {
    getRequestId(request.id);
  };

  return (
    <Popup
      header={`Voici les coordonnés de ${request.jobWorker.firstname}`}
      description={`@:${request.jobWorker.email}`}
      content={<> <i className="envelope icon" /> : <a href={`mailto:${request.jobWorker.email}`}>{request.jobWorker.email}</a> </>}
      on="click"
      position="top right"
      size="large"
      hideOnScroll
      pinned
      trigger={<Button onClick={handleClick}><i className="comment alternate outline icon" /> Contacter</Button>}
    />
  );
};
PopupContact.propTypes = {
  request: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  /** func with param {id} */
  getRequestId: PropTypes.func.isRequired,
};
export default PopupContact;
