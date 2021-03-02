import React from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import styles from './body.module.scss';

const Body = ({
  children, onScrollHandler, loading, moreLoading,
}) => {
  const onScrollEventThrottled = throttle((event) => {
    const element = event.target;
    if ((element.scrollHeight - element.scrollTop === element.clientHeight)) {
      onScrollHandler();
    }
  }, 200);
  const onScrollEvent = (event) => {
    event.persist();
    onScrollEventThrottled(event);
  };

  return (
    <div
      className={styles.container}
      onScroll={onScrollEvent}
    >
      {!loading && children}
    </div>
  );
};

Body.defaultProps = {
  children: '',
  onScrollHandler: () => { /**/ },
  loading: false,
  moreLoading: false,
};

Body.propTypes = {
  children: PropTypes.node,
  onScrollHandler: PropTypes.func,
  loading: PropTypes.bool,
  moreLoading: PropTypes.bool,
};

export default Body;
