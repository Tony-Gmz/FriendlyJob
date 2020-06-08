import React from 'react';

const UploadImg = ({ getUrlAvatar, subitAvatar }) => {
  const handleAvatarChange = (evt) => {
    console.log(evt.target.files[0]);
    const file = evt.target.files[0];
    getUrlAvatar(file);
  };
  const handleSubmit = (evt) => {
    console.log('submit img');
    evt.preventDefault();
    subitAvatar();
  };
  return (
    <form onSubmit={handleSubmit}>
       <input
        id="contained-button-file"
        type="file"
        name="file"
        onChange={handleAvatarChange}
      />
      <button type="submit">send</button>
    </form>
  );
};

export default UploadImg;
