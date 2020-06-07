// == Import Library
import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import Style
import './footer.scss';

// Component for our Footer in all pages
const Footer = () => (

  <footer className="footer">
    <div className="footer_content">
      &copy; 2020 - FriendlyJob Tout droits réservés
    </div>
    <div className="footer_link">
      <div className="footer_link_text">
        {/* Link to our Contact's pages */}
        <Link to="/contact">Qui somme nous ?</Link>
      </div>
      {/* social network links to join us and follow our evolution */}
      <div className="footer_icon">
        <Button className="footer_icon_item" circular color="facebook" icon="facebook" />
        <Button className="footer_icon_item" circular color="twitter" icon="twitter" />
        <Button className="footer_icon_item" circular color="linkedin" icon="linkedin" />
      </div>
    </div>
  </footer>
);

// Export
export default Footer;
