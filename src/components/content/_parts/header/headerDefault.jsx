import React from 'react';
import styles from './header.module.scss';

const HeaderDefault = (props) => {
  const { header, children } = props;
  return (
    <div className={styles.container}>
      <span className={styles.header}>{header}</span>
      <div className={styles.content}>
        {(Array.isArray(children) ? children : [children])
          .filter((item) => item)
          // eslint-disable-next-line react/no-array-index-key
          .map((child, i) => <div key={i} className={styles.contentChildItem}>{child}</div>)}
      </div>
    </div>
  );
};

export default HeaderDefault;
