import React from 'react';
import { Button, Popup } from 'semantic-ui-react';

const PopupContact = ({request, getCommentId }) => {

  const handleClick = () => {
    getCommentId(request.id);
  };

  return (
    <Popup
      header={`Voici les coordonnés de ${request.jobWorker.firstname}`}
      description={`@:${request.jobWorker.email}`}
      content={<a href={`mailto:${request.jobWorker.email}`}>{request.jobWorker.email} </a>}
      on="click"
      position="top right"
      size="large"
      hideOnScroll
      pinned
      trigger={<Button onClick={handleClick} content="Contacter" />}
    />
  );
};
export default PopupContact;
