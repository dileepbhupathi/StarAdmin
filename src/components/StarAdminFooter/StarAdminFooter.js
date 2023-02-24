import React from "react";
import './StarAdminFooter.scss'

export const StarAdminFooter = () => {
  return (
    <div className="star-admin-footer-container">
      <p className="footer-copyright-content">
        Copyright © <a href="/" className="footer-copyright-link">bootstrapdash.com</a> 2020
      </p>
      <p className="footer-free-templates-content">
        Free <span className="footer-react-admin-highlight">react admin</span> templates from BootstrapDash.com.
      </p>
    </div>
  );
};
