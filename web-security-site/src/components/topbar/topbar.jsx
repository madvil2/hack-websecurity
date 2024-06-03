import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import comeBackIcon from './icons/back.svg';
import styles from './topbar.module.scss';

const Topbar = ({
  comeBackLink,
  title,
  children,
}) => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <div className={styles.backAndHeaderContainer}>
        {comeBackLink && (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events
        <img src={comeBackIcon} alt="back" onClick={() => history.push(comeBackLink)} className={styles.backIcon} />
        )}
        <p className={styles.header}>{title}</p>
      </div>
      {children}
    </div>
  );
};

Topbar.defaultProps = {
  comeBackLink: '',
  title: '',
  children: null,
};

Topbar.propTypes = {
  comeBackLink: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Topbar;
