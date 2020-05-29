import React from 'react';

import './contact.scss';

const Contact = () => {

return (
  <div className="contact">

    <div className="stage">
      <img className="box bounce-7" alt="admin" src="https://i.pinimg.com/564x/e8/67/de/e867de0619b0323c19614e3a3d294eef.jpg"/>
      <img className="box bounce-7" alt="admin" src="https://i.pinimg.com/564x/a8/63/cc/a863cc151b350e614d3af395bcc4c662.jpg"/>
      <img className="box bounce-7" alt="admin" src="https://i.pinimg.com/564x/ce/9e/c5/ce9ec5436e4b033b1ec07351e344b77c.jpg"/>
      <img className="box bounce-7" alt="admin" src="https://i.pinimg.com/564x/02/99/25/029925d914ee2ebb62ed123e08606e86.jpg"/>

    </div>

    <div className="contact_description">
      <div className="contact_desciption_item">
        <h1 className="contact_desciption_item_name">Maazaoui Karim</h1>
        <h3 className="contact_desciption_item_role">"Lead Back"</h3>
      </div>
      <div className="contact_desciption_item">
        <h1 className="contact_desciption_item_name">Lazzari Jolan</h1>
        <h3 className="contact_desciption_item_role">"Product Owner"</h3>
      </div>
      <div className="contact_desciption_item">
        <h1 className="contact_desciption_item_name">Clusel Thibault</h1>
        <h3 className="contact_desciption_item_role">"Scrum Master && Lead FrontZer"</h3>
      </div>
      <div className="contact_desciption_item">
        <h1 className="contact_desciption_item_name">Gomez Antony</h1>
        <h3 className="contact_desciption_item_role">"Git Master"</h3>
      </div>
    </div>


  </div>
  );
};

export default Contact;
