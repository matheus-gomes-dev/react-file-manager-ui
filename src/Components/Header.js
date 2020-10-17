import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title = 'React File Manager'}) => (
  <header>
    <div className="header-container">
      <div className="header-text">
        <span>{title}</span>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
