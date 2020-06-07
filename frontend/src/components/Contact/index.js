// == Import library
import React from 'react';

// == Import Style
import './contact.scss';


// == Component for Contact's page
const Contact = () => (
  // ============================= We can Make a map to render our information present in BDD ????
  <div className="contact">
    <div className="stage">
      <img className="karim bounce-7" alt="admin" src="https://i.vippng.com/png/small/87-870948_hand-clipart-incredible-hulk-hulk-age-of-ultron.png" />
      <img className="jolan bounce-7" alt="admin" src="https://i.vippng.com/png/small/91-914118_goku-png-dbz-chibi-dragon-ball-z-son.png" />
      <img className="thibault bounce-7" alt="admin" src="https://i.vippng.com/png/small/240-2405419_chibi-super-saiyan-blue-vegeta-by-rayzorblade189-da64uni.png" />
      <img className="tony bounce-7" alt="admin" src="https://i.vippng.com/png/small/230-2300287_final-fantasy-xiii-2-releases-before-versus-xiii.png" />
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

export default Contact;
