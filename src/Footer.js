import React from 'react';
import './css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p className="footer-text">
        <strong>Nima Majidifar</strong>
        <br />
        © {currentYear} All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
