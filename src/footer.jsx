import React from 'react';
import './footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Find A Store</a></li>
            <li><a href="#">Become A Member</a></li>
            <li><a href="#">Education Discounts</a></li>
            <li><a href="#">Send Us Feedback</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Get Help</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Payment Options</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Nike</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Nike, Inc. All rights reserved</p>
        <div className="footer-links">
          <a href="#">Guides</a>
          <a href="#">Terms of Sale</a>
          <a href="#">Terms of Use</a>
          <a href="#">Nike Privacy Policy</a>
        </div>
        <div className="footer-region">
          <button className="region-button">USA</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
