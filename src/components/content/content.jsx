import React from 'react';
import PropTypes from 'prop-types';
import styles from './content.module.scss';
import Error from './_parts/error';

const Content = ({ children, pageError }) => (
  <div className={styles.container}>{!pageError ? children : <Error errorCode={pageError} />}</div>
);

Content.defaultProps = {
  children: '',
  pageError: null,
};

Content.propTypes = {
  children: PropTypes.node,
  pageError: PropTypes.number,
};

export default Content;
