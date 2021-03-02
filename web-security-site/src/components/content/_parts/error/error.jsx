import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { Button } from '../../../button';
import styles from './error.module.scss';
import paths from '../../../../pages/skeleton/paths';

const Error = ({ errorCode }) => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <h1 className={styles.error__code}>{errorCode}</h1>
      <p className={styles.error__title}>
        О-опс...
        <br />
        Что-то пошло не так...
      </p>
      <Button
        label="Вернуться на главную"
        callback={() => {
          history.push(paths.contactsList);
        }}
      />
    </div>
  );
};

Error.propTypes = {
  errorCode: PropTypes.number.isRequired,
};

export default Error;
