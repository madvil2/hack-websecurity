import React from 'react';
import cx from 'classnames';
import editIcon from '../icons/edit.svg';
import stylesDefault from '../../header.module.scss';
import styles from '../styles.module.scss';

const Timestamps = ({
  // eslint-disable-next-line react/prop-types
  author, updateAuthor, authorPosition, updateAuthorPosition, createdAt, updatedAt,
}) => (
  <>
    {updatedAt && updateAuthor && (<img src={editIcon} className={styles.itemIcon} />)}
    <div className={stylesDefault.content}>
      {updatedAt && updateAuthor && (
      <div className={styles.item}>
        {updateAuthor && <span className={styles.itemLabel}>{updateAuthor}</span>}
        {updateAuthorPosition && (
        <span className={cx([styles.itemLabel], [styles.itemLabelPosition])}>
          {' '}
          {updateAuthorPosition}
        </span>
        )}
        {updatedAt && <span className={styles.itemDate}>{updatedAt}</span>}
      </div>
      )}
      {createdAt && author && (
      <div className={styles.item}>
        {author && <span className={styles.itemLabel}>{author}</span>}
        {authorPosition && (
          <span className={cx([styles.itemLabel], [styles.itemLabelPosition])}>
            {authorPosition}
          </span>
        )}
        {createdAt && <span className={styles.itemDate}>{createdAt}</span>}
      </div>
      )}
    </div>
  </>
);

export default Timestamps;
