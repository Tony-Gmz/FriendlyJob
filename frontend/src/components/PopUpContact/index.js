import React from 'react';
import { Button, Popup } from 'semantic-ui-react';

const PopupContact = ({request, getRequestId }) => {

  const handleClick = () => {
    getRequestId(request.id);
  };

  return (
    <Popup
      header={`Voici les coordonnés de ${request.jobWorker.firstname}`}
      description={`@:${request.jobWorker.email}`}
      content={<> <i class="envelope icon" /> : <a href={`mailto:${request.jobWorker.email}`}>{request.jobWorker.email}</a> </>}
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
