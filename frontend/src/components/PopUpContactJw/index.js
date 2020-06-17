import React from 'react';
import { Button, Popup } from 'semantic-ui-react';

const PopupContact = ({request, getCommentId }) => {

  const handleClick = () => {
    getCommentId(request.id);
  };

  return (
    <Popup
      header={`Voici les coordonnés de ${request.friendlyUser.firstname}`}
      description={`@:${request.friendlyUser.email}`}
      content={<> <i class="envelope icon" /> : <a href={`mailto:${request.friendlyUser.email}`}>{request.friendlyUser.email}</a> </>}
      on="click"
      position="top right"
      size="large"
      hideOnScroll
      pinned
      trigger={<Button onClick={handleClick}><i class="comment alternate outline icon" /> Contacter</Button>}
    />
  );
};
export default PopupContact;
