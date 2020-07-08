import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import './uploadImg.scss';

const UploadImg = ({ getUrlAvatar, submitAvatar }) => {
  const handleAvatarChange = (evt) => {
    //console.log(evt.target.files[0]);
    const file = evt.target.files[0];
    getUrlAvatar(file);
  };
  const handleSubmit = (evt) => {
    //console.log('submit img');
    evt.preventDefault();
    subitAvatar();
  };
  return (
    <form onSubmit={handleSubmit}>
       <input
        id="file"
        type="file"
        name="file"
        onChange={handleAvatarChange}
      />
      <Button className="button_file" animated='vertical'>
      <Button.Content className="button_file_content" hidden>Envoyer</Button.Content>
      <Button.Content className="button_file_content" visible>
        <Icon name='camera' />
      </Button.Content>
    </Button>
    </form>
  );
};

export default UploadImg;
