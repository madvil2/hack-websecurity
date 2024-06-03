import React from 'react';
import PropTypes from 'prop-types';
import styles from './footer.module.scss';

const Footer = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

Footer.defaultProps = {
  children: '',
  withComeBackButton: false,
  comeBackRoute: '',
  comeBackTitle: 'Назад к списку',
};

Footer.propTypes = {
  children: PropTypes.node,
  withComeBackButton: PropTypes.bool,
  comeBackRoute: PropTypes.string,
  comeBackTitle: PropTypes.string,
};

export default Footer;
