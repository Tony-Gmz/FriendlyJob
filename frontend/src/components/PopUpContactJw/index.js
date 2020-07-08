import React from 'react';
import PropTypes from 'prop-types';
import { Button, Popup } from 'semantic-ui-react';

const PopupContact = ({ request, getRequestId }) => {
  const handleClick = () => {
    getRequestId(request.id);
  };

  return (
    <Popup
      header={`Voici les coordonnés de ${request.friendlyUser.firstname}`}
      description={`@:${request.friendlyUser.email}`}
      content={<> <i className="envelope icon" /> : <a href={`mailto:${request.friendlyUser.email}`}>{request.friendlyUser.email}</a> </>}
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
      firstname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  /** func with param */
  getRequestId: PropTypes.func.isRequired,
};
export default PopupContact;
